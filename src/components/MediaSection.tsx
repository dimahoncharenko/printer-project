/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useCallback } from "react";
import { jsx, css } from "@emotion/react";

import Wrapper from "./Wrapper";
import Player from "./Player";
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
                return <Player title="REFILLMENT ECOTANK" url="refillment.mp4" />
            case 3:
                return <Player title="TEST ECOTANK" url="test.mp4" />
            default:
                return <Player title="ECOTANK L8180" url="printer-showcase.mp4" />
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
                {renderPlayer(current)}
            </Wrapper>
        </React.Fragment>
    );
};

export default MediaSection;