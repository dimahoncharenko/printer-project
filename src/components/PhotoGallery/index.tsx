/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment, useState, useCallback } from "react";
import { jsx, css } from "@emotion/react";

import CurrentSlide from "./CurrentSlide";
import SlideGrid from "./SlideGrid";
import { Photo } from "../../App";

const CSS = css`
    display: flex;
    padding: 1em 0em;

    @media (min-width: 600px) {
        padding: 2em 0em;
    }

    > div
    {
        flex: 1;
    }

    > .photo-gallery__right
    {
        padding: 1em;

        > h1
        {
            margin: 0;
            font-size: 1rem;
            text-align: center;
        }

        > p
        {
            text-align: justify;
            font-size: .8rem;
        }

        @media (min-width: 799px) {
            padding: 3em 1.5em;

            > h1
            {
                font-size: 3rem;
                line-height: 3.5rem;
            }

            > p
            {
                font-size: 1.4rem;
            }
        }
    }
`;

type Props = {
    photos: Photo[]
}

const PhotoGallery = ({ photos = [] }: Props) => {
    const [currentSlide, setCurrentSlide] = useState(0);    

    const changeSlide = useCallback((key: number) => {
        setCurrentSlide(key);
    }, []);

    return <Fragment>
        <div css={CSS} className="photo-gallery wow animate__animated animate__backInUp">
            <div className="photo-gallery__left">
                <CurrentSlide photo={photos[currentSlide]}/>
                <SlideGrid gridElems={photos} setCurrentSlide={changeSlide}/>
            </div>
            <div className="photo-gallery__right">
                <h1>{photos[currentSlide] && photos[currentSlide].title}</h1>
                <p>{photos[currentSlide] && photos[currentSlide].content}</p>
            </div>
        </div>
    </Fragment>
};

export default PhotoGallery;