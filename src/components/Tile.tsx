/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";

type Props = {
    css?: React.CSSProperties
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
            fontSize: 1.4rem;
        }
`;

const Tile = ({ children, css }: Props) => {
    return <div css={CSS} style={css} className="tile">
        {children}
    </div>
};

export default Tile;