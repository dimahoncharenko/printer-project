/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useRef } from "react";
import { jsx, css } from "@emotion/react";
import { BsArrowUp } from "react-icons/bs";

const CSS = css`
    opacity: 0;
    visibility: hidden;
    position: fixed;
    bottom: 1em;
    right: 1em;
    padding: .7em;
    background-color: white;
    border-radius: 50%;
    transition: opacity .2s linear;

    &.active
    {
        opacity: 1;
        visibility: visible;
    }

    > a
    {
        display: block;
        width: 1.5em;
        height: 1.5em;
        text-decoration: none;
    }
`;


const ArrowTop = () => {
    const arrowRef = useRef<HTMLDivElement>(null);

    const onScroll = () => {
        if (arrowRef.current) {
            if (arrowRef.current.classList.contains("active") && window.scrollY < 1000) {
                arrowRef.current.classList.remove("active");
            }

            if (window.scrollY >= 1000) {
                arrowRef.current.classList.add("active");
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, []);

    return <div css={CSS} ref={arrowRef} className="to-home">
        <a href="/#"><BsArrowUp style={{ fontSize: "1.5rem" }}/></a>
    </div>
};

export default ArrowTop;