/** @jsxRuntime classic */
/** @jsx jsx */
import React, { MouseEventHandler, ChangeEventHandler, forwardRef, ForwardedRef, Fragment } from "react";
import { jsx, css } from "@emotion/react";
import { HiPause, HiPlay, HiRewind, HiFastForward } from "react-icons/hi";
import { FiVolume1, FiVolume2, FiVolumeX } from "react-icons/fi";
import { AiOutlineFullscreen } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5"; 

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
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
            height: 100%;

            > .seekbar__range
            {
                --before-width: 0%;

                position: relative;
                width: calc(100% - 12em);
                cursor: pointer;
                appearance: none;
                background-color: white;
                border-radius: 1em;
                height: .5em;

                &::before
                {
                    content: " ";
                    position: absolute;
                    width: var(--before-width);
                    height: .5em;
                    background-color: gray;
                    border-radius: 1em;
                    top: 0;
                    left: 0;
                    z-index: 2;
                }

                &::-webkit-slider-thumb
                {
                    appearance: none;
                    width: 1em;
                    height: 1em;
                    border-radius: 50%;
                    background-color: gray;
                    position: relative;
                    z-index: 3;

                    &:hover
                    {
                        background-color: darkgray;
                    }
                }
            }

            > .seekbar__display-time
            {
                color: white;
                font-size: .6rem;
                margin-left: -1em;

                @media (min-width: 600px) {
                    font-size: 1rem;
                }
            }
        }

        > .playback-rate
        {
            position: relative;
            font-size: 1.1rem;
            margin-left: -1.8em;
            margin-bottom: -.4em;

            > .playback-rate__options
            {
                display: none;
                position: absolute;
                bottom: 1.5em;
                left: calc(50% - 1em);
                background-color: white;
                border-radius: .3em;
                overflow: hidden;

                > div
                {
                    color: black;
                    padding: .5em;
                    font-size: clamp(.7rem, 2vw + .1em, 1rem);

                    &::nth-of-type(1), 
                    &::nth-of-type(4) 
                    {
                        border-radius: .3em;
                    }

                    &:hover,
                    &.active
                    {
                        background-color: hsla(0, 0%, 0%, .2);
                    }
                }
            }

            &:focus
            {
                > svg
                {
                    transform: rotate(45deg);
                    transition: transform .3s linear;
                }

                > .playback-rate__options
                {
                    display: block;

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
    changeRate: (rate: number) => any
    playbackRate: number
}

const PlayerControls = ({ 
        togglePlay, isPlaying, muted, volume, toggleMute, setVolume, duration, played, onChange, onMouseDown, 
        onMouseUp, displayTime, title, onMouseOver, rewindPlayer, forwardPlayer, toggleFullScreen, changeRate,
        playbackRate
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

                <button className="playback-rate active">
                    <IoSettingsOutline/>
                    <div className="playback-rate__options">
                        {[2.0, 1.5, 1.0, 0.5].map((rate, index) => {
                            return <div 
                                key={index} 
                                className={`${rate === playbackRate ? "active" : ""}`}
                                onClick={changeRate.bind(null, rate)}
                            >
                                {rate.toFixed(1)}
                            </div>
                        })}
                    </div>
                </button>

                <button className="fullscreen" onClick={toggleFullScreen}>
                    <AiOutlineFullscreen/>
                </button>
            </div>
        </div>
    </Fragment>
};

export default forwardRef(PlayerControls);