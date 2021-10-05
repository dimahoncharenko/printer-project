/** @jsxRuntime classic */
/** @jsx jsx */
import React, { MouseEventHandler } from "react";
import { jsx, css } from "@emotion/react";

const CSS = css`
    width: 175px;
    padding: .37em;
    cursor: pointer;
    position: relative;

    > img
    {
        width: 100%;
    }

    > span
    {
        position: absolute;
        bottom: 1em;
        left: calc(50% - 20px);
        color: white;
        text-shadow: .1em .1em .2em gray;
    }
`;

export type TBookmark = {
    img: string
    display: string
    currentTime: number
}

type Props = {
    display: string
    seekTo: MouseEventHandler<HTMLDivElement>
    img: string
}

const Bookmark = ({ display, seekTo, img }: Props) => {
    return <div css={CSS} className="bookmark" onClick={seekTo}>
        <img src={img} alt=""/>
        <span>{display}</span>
    </div>
};

export default Bookmark;