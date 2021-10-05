/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment, useRef, useCallback } from "react";
import screenfull from "screenfull";
import { jsx, css } from "@emotion/react";

import { Photo } from "../../App";

const CSS = css`
    position: relative;

    > img
    {
        width: 100%;
        min-height: 100px;

        @media (min-width: 799px) {
            min-height: 420px;
        }
    }
`;

type Props = {
    photo: Photo
}

const CurrentSlide = ({ photo }: Props) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleDblClick = useCallback((e) => {
        if (screenfull.isEnabled && wrapperRef.current) {
            screenfull.toggle(wrapperRef.current);
        }
    }, []);

    return <Fragment>
        <div ref={wrapperRef} css={CSS}> 
            {photo && <img src={photo.img} onDoubleClick={handleDblClick} alt=""/>}
        </div>
    </Fragment>
};

export default CurrentSlide;