/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";

import Wrapper from "./Wrapper";

type Props = {
    children: React.ReactNode
}

function Hero({ children }: Props) {
    return <div css={CSS} className="hero">
        <Wrapper>
            <div className="hero__content">
                {children}
            </div>
        </Wrapper>
    </div>
};  

const CSS = css`
    background-image: url("/images/hero.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    color: gray;
    padding: 2em 1em;

    @media (min-width: 600px) {
        padding: 5em 1em;
    }

    @media (min-width: 1200px) {
        padding: 16em 1em;
    }

    .hero__content {
        display: flex;
        align-items: center;
        flex-direction: column;

        @media (min-width: 900px) {
            flex-direction: row;
        }
    }

    .hero__content h1 {
        font-weight: lighter;
        font-size: 2.5rem;
        margin: 0;
        line-height: 1.2em;

        @media (min-width: 600px) {
            font-size: 4.5rem;
        }
    }

    .hero__content p {
        font-size: 1rem;

        @media (min-width: 600px) {
            font-size: 1.5rem;
        }
    }

    .hero__content > img
    {
        height: 9em;
        margin: 0;

        @media (min-width: 600px) {
            margin-left: 1.5em;
            height: 15em;
        }
    }
`;

export default Hero;