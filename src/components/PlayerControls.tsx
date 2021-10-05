/** @jsxRuntime classic */
/** @jsx jsx */
import React, { MouseEventHandler, ChangeEventHandler, forwardRef, ForwardedRef, Fragment } from "react";
import { jsx, css } from "@emotion/react";
import { HiPause, HiPlay, HiRewind, HiFastForward } from "react-icons/hi";
import { FiVolume1, FiVolume2, FiVolumeX } from "react-icons/fi";
import { AiOutlineFullscreen } from "react-icons/ai";

const CSS = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0,0,0, .4);
    transition: opacity .3s linear;

    button
    {
        border: 0;
        background-color: transparent;
        cursor: pointer;
        color: white;
    }

    > .player-controls__top
    {
        display: flex;
        justify-content: space-between;
        padding: 1em;

        > .heading  
        {
            color: white;
            margin: 0;  
            font-size: 1rem;

            @media (min-width: 600px) {
                font-size: 1.5rem;
            }
        }
    }

    > .player-controls__middle
    {
        display: flex;
        justify-content: center;

        > .toggle-play
        {
            font-size: 2.5rem;

            @media (min-width: 600px) {
                font-size: 5rem;
            }
        }

        > .rewind,
        > .forward
        {
            font-size: 2rem;

            @media (min-width: 600px) {
                font-size: 4rem;
            }
        }
    }

    > .player-controls__bottom
    {
        display: flex;
        align-items: center;

        > .toggle-play
        {
            font-size: 1.5rem;
            padding: 0;

            @media (min-width: 600px) {
                font-size: 2rem;
            }
        }

        > .volume-range
        {
            cursor: pointer;
            width: 20%;
        }

        > .rewind,
        > .forward,
        > .toggle-mute,
        > .fullscreen
        {
            font-size: 1rem;

            @media (min-width: 600px) {
                font-size: 1.5rem;
            }
        }

        > .fullscreen
        {
            position: relative;
            width: 30px;
            height: 100%;

            > svg
            {
                position: absolute;
                top: 22%;
                left: .25em;

                @media (min-width: 600px) {
                    left: -.25em;
                }
            }
        }

        > .seekbar
        {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            height: 100%;

            > .seekbar__range
            {
                width: 80%;
                cursor: pointer;
            }

            > .seekbar__display-time
            {
                color: white;
                font-size: .6rem;

                @media (min-width: 600px) {
                    font-size: 1rem;
                }
            }
        }
    }
`;

type Props = {
    togglePlay: MouseEventHandler<HTMLButtonElement>
    isPlaying: boolean
    muted: boolean
    volume: number
    toggleMute: MouseEventHandler<HTMLButtonElement>
    setVolume: ChangeEventHandler<HTMLInputElement>
    duration: number
    played: number
    onChange: ChangeEventHandler<HTMLInputElement>
    onMouseDown: MouseEventHandler<HTMLInputElement>
    onMouseUp: MouseEventHandler<HTMLInputElement>
    displayTime: string
    title: string
    onMouseOver: MouseEventHandler<HTMLDivElement>
    rewindPlayer: MouseEventHandler<HTMLButtonElement>
    forwardPlayer: MouseEventHandler<HTMLButtonElement>
    toggleFullScreen: MouseEventHandler<HTMLButtonElement>
}

const PlayerControls = ({ 
        togglePlay, isPlaying, muted, volume, toggleMute, setVolume, duration, played, onChange, onMouseDown, 
        onMouseUp, displayTime, title, onMouseOver, rewindPlayer, forwardPlayer, toggleFullScreen
    }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return <Fragment>
        <div 
            css={CSS} 
            ref={ref} 
            className="player-controls"
            onMouseOver={onMouseOver}
        >
            <div className="player-controls__top">
                <h2 className="heading">{title}</h2>
            </div>
            <div className="player-controls__middle">
                <button className="rewind" onClick={rewindPlayer}>
                    <HiRewind/>
                </button>

                <button className="toggle-play" onClick={togglePlay}>        
                    {isPlaying ? <HiPause/> : <HiPlay/>}
                </button>

                <button className="forward" onClick={forwardPlayer}>
                    <HiFastForward/>
                </button>
            </div>
            <div className="player-controls__bottom">
                <button className="rewind" onClick={rewindPlayer}>
                    <HiRewind/>
                </button>

                <button className="toggle-play" onClick={togglePlay}>        
                    {isPlaying ? <HiPause/> : <HiPlay/>}
                </button>

                <button className="forward" onClick={forwardPlayer}>
                    <HiFastForward/>
                </button>

                <button className="toggle-mute" onClick={toggleMute}>
                    {muted ? <FiVolumeX/> : volume > 0.5 ? <FiVolume2/> : <FiVolume1/>}
                </button>

                <input 
                    className="volume-range"
                    id="volume-range"
                    type="range" 
                    min={0} 
                    max={100} 
                    value={volume * 100}
                    onChange={setVolume}
                />

                <div className="seekbar">
                    <input
                        className="seekbar__range"
                        type="range"    
                        min={0}
                        max={duration}
                        value={played}
                        onChange={onChange}
                        onMouseDown={onMouseDown}
                        onMouseUp={onMouseUp}
                    />
                    <span className="seekbar__display-time">{displayTime}</span>
                </div>

                <button className="fullscreen" onClick={toggleFullScreen}>
                    <AiOutlineFullscreen/>
                </button>
            </div>
        </div>
    </Fragment>
};

export default forwardRef(PlayerControls);