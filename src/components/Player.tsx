/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useCallback, useRef, ChangeEvent, MouseEvent } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player/lazy";
import { jsx, css } from "@emotion/react";
import screenfull from "screenfull";

import PlayerControls from "./PlayerControls";
import Bookmark, { TBookmark } from "./Bookmark";

const CSS = css`
    position: relative;
`;

type State = {
    playing: boolean
    volume: number
    muted: boolean
    played: number
    seeking: boolean
    bookmarks: TBookmark[]
    rate: number
}

type Props = {
    title: string
    url: string
}

let count = 0;

const Player = ({
    title,
    url
}: Props) => {
    const [state, setState] = useState<State>({
        playing: false,
        volume: 0.5,
        muted: false,
        played: 0,
        seeking: false,
        bookmarks: [],
        rate: 1.0
    });

    const playerRef = useRef<ReactPlayer>(null); 
    const playerWrapperRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const controlsRef = useRef<HTMLDivElement>(null);

    const togglePlay = useCallback(() => {
        setState(state => ({ ...state, playing: !state.playing}))
    }, []);

    const toggleMute = useCallback(() => {
        setState(state => ({ ...state, muted: !state.muted }));
    }, []);

    const setVolume = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, volume: (+value / 100), muted: +value === 0 }));
    }, []);

    const onProgress = useCallback((currentState: ReactPlayerProps) => {
        if (count > 3 && controlsRef.current) {
            controlsRef.current.style.opacity = "0";
            count = 0;
        }

        if (controlsRef.current && controlsRef.current.style.opacity === "1") count += 1; 

        if (!state.seeking) {
            setState(state => ({ ...state, played: currentState.playedSeconds }))
        }
    }, [state.seeking]);

    const onMouseDown = useCallback(() => {
        setState(state => ({ ...state, seeking: true }));
    }, []);

    const onChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
        setState(state => ({ ...state, played: +target.value }));
    }, []); 

    const onMouseUp = useCallback(({ currentTarget }: MouseEvent<HTMLInputElement>) => {
        if (playerRef.current) {
            setState(state => ({ ...state, seeking: false }));
            playerRef.current.seekTo(+currentTarget.value);
        }
    }, []);

    const format = useCallback((secs: number) => {
        if (isNaN(secs)) return "00:00";

        const date = new Date(secs * 1000);
        const hh = date.getUTCHours();
        const mm = date.getUTCMinutes().toString().padStart(2, "0");
        const ss = date.getUTCSeconds().toString().padStart(2, "0");

        if (!hh) return `${mm}:${ss}`;
        return `${hh}:${mm}:${ss}`;
    }, []); 

    const onMouseOver = useCallback(() => {
        if (controlsRef.current) {
            controlsRef.current.style.opacity = "1";
            count = 0;
        }
    }, []);

    const rewindPlayer = useCallback(() => {
        if (playerRef.current) {
            playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
        }
    }, []);

    const forwardPlayer = useCallback(() => {
        if (playerRef.current) {
            playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
        }
    }, []);

    const toggleFullScreen = useCallback(() => {
        if (screenfull.isEnabled && playerWrapperRef.current) {
            screenfull.toggle(playerWrapperRef.current);
        }
    }, []);

    const changeRate = useCallback((rate: number) => {
        setState(state => ({ ...state, rate }));
    }, []);

    
    const duration = playerRef.current ? playerRef.current.getDuration() : 0;
    const currentTime = playerRef.current ? playerRef.current.getCurrentTime() : 0;

    const formatedDuration = format(duration);
    const formatedCurrentTime = format(currentTime);

    return <div className="player wow animate__animated animate__backInUp" ref={playerWrapperRef} css={CSS}>
        <ReactPlayer 
            url={url}
            ref={playerRef}
            width="100%"
            playbackRate={state.rate}
            height="100%"
            playing={state.playing}
            volume={state.volume}
            muted={state.muted}
            onProgress={onProgress}
            config={{
                file: {
                    attributes: {
                        crossOrigin: "anonymous"
                    }
                }
            }}
        />

        <PlayerControls 
            ref={controlsRef}
            togglePlay={togglePlay} 
            isPlaying={state.playing}
            muted={state.muted}
            volume={state.volume}
            toggleMute={toggleMute}
            setVolume={setVolume}
            duration={duration}
            played={state.played}
            onChange={onChange}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            displayTime={`${formatedCurrentTime}/${formatedDuration}`}
            title={title}
            onMouseOver={onMouseOver}
            rewindPlayer={rewindPlayer}
            forwardPlayer={forwardPlayer}
            toggleFullScreen={toggleFullScreen}
            changeRate={changeRate}
            playbackRate={state.rate}
        />

        <div style={{display: "flex", position: "absolute", overflow: "hidden", width: "100%"}}>
            {state.bookmarks.map((mark, item) => {
                return <Bookmark
                    key={item}
                    img={mark.img}
                    display={mark.display}
                    seekTo={() => playerRef.current ? playerRef.current.seekTo(mark.currentTime) : null}
                />
            })}
        </div>

        <canvas ref={canvasRef} style={{position: "absolute", backgroundColor: "transparent"}} />
    </div>
};

export default Player;