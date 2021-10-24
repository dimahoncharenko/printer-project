/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, SerializedStyles } from "@emotion/react";
import React from "react";

type Props = {
    customStyles?: SerializedStyles[]
    children?: React.ReactNode
};

const CSS = css`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: orangered;
        color: white;
        padding: 1em 0em;
        font-size: 1rem;

        @media (min-width: 600px) {
            font-size: 1.2rem;
        }
`;

const Tile = ({ children, customStyles = [] }: Props) => {
    return <div css={[CSS, ...customStyles]} className="tile">
        {children}
    </div>
};

export default Tile;