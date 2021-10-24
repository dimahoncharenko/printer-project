/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useCallback, Suspense, lazy } from "react";
import { jsx, css } from "@emotion/react";

import Wrapper from "./Wrapper";
import Tile from "./Tile";

const tileStyles = css`
    background-color: lightgray;
    padding: 0;

    .line
    {
        display: flex;
        width: min(50em, 100vw - 2em);
        justify-content: space-between;

        > div
        {
            flex: 1;
            text-align: center;
            cursor: pointer;
            padding: 1em;
            text-shadow: 0em 0em .2em gray;
            text-transform: uppercase;
            font-weight: bolder;

            &:hover
            {
                background-color: #999999;
            }

            &.active
            {
                background-color: #999999; 
            }
        }
    }
`;

const Refillment = lazy(() => import("./Players/Refillment"));
const Testing = lazy(() => import("./Players/Testing"));
const Showcase = lazy(() => import("./Players/Showcase"));

const categories = [
    { index: 1, title: "Огляд" },
    { index: 2, title: "Заправка" },
    { index: 3, title: "Тест" },
];

const MediaSection = () => {
    const [current, setCurrent] = useState(1);

    const renderPlayer = useCallback((index: number) => {
        switch(index) {
            case 2:
                return <Refillment />
            case 3:
                return <Testing />
            default:
                return <Showcase />
        }
    }, []);

    return (
        <React.Fragment>
            <div style={{ marginTop: "1em" }} id="media"></div>
            <Tile><h2>Медіа</h2></Tile>
            <Tile customStyles={tileStyles}>
                <div className="line">
                    {categories.map(({ index, title }) => <div 
                            className={current === index ? "active" : ""}
                            key={index}
                            onClick={setCurrent.bind(null, index)}
                        >
                            {title}
                        </div>
                    )}
                </div>
            </Tile>
            <Wrapper>
                <Suspense fallback={<div css={css`text-align: center;`}>Loading...</div>}>
                    {renderPlayer(current)}
                </Suspense>
            </Wrapper>
        </React.Fragment>
    );
};

export default MediaSection;