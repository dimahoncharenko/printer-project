/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment } from "react";
import { jsx, css } from "@emotion/react";

import { Photo } from "../../App";

type Props = {
    gridElems: Photo[]
    setCurrentSlide: (key: number) => void
};

const CSS = css`
    display: flex;
    flex-wrap: wrap;
    gap: .5em;

    > img
    {
        width: calc(33% - .5em);
        border-radius: .2em;
        cursor: pointer;

        @media (min-width: 600px) {
            width: calc(25% - .5em);
        }
    }
`;

const SlideGrid = ({ gridElems, setCurrentSlide }: Props) => {
    return <Fragment>
        <div css={CSS} className="slide-grid">
            {gridElems.length && gridElems.map((el, i) => {
                return <img onClick={setCurrentSlide.bind(null, i)} src={el.img} key={i} alt=""/>
            })} 
        </div>
    </Fragment>
};

export default SlideGrid;