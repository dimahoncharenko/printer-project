/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useCallback, Suspense, lazy } from "react";
import { jsx, css } from "@emotion/react";
import Loader from "react-loader-spinner";

import Wrapper from "./Wrapper";
import Tile from "./Tile";
import Line, { useCurrent } from "./Line";

const Refillment = lazy(() => import("./Players/Refillment"));
const Cleaning = lazy(() => import("./Players/Cleaning"));
const Showcase = lazy(() => import("./Players/Showcase"));

const categories = [
    { index: 1, title: "Огляд" },
    { index: 2, title: "Заправка" },
    { index: 3, title: "Чистка друкуючої головки" },
];

const MediaSection = () => {
    const { state, changeCurrent } = useCurrent();

    const renderPlayer = useCallback((index: number) => {
        switch(index) {
            case 2:
                return <Refillment />
            case 3:
                return <Cleaning />
            default:
                return <Showcase />
        }
    }, []);

    return (
        <React.Fragment>
            <div style={{ marginTop: "1em" }} id="media"></div>
            <Tile><h2>Медіа</h2></Tile>
            <Line>
                {categories.map(({ index, title }) => <div 
                    className={state === index ? "active" : ""}
                    key={index}
                    onClick={changeCurrent.bind(null, index)}
                        >
                            {title}
                    </div>
                )}
            </Line>
            <Wrapper>
                <Suspense fallback={<div css={css`display: flex; justify-content: center;`}><Loader color="gray" timeout={1000} type="ThreeDots" /></div>}>
                    {renderPlayer(state)}
                </Suspense>
            </Wrapper>
        </React.Fragment>
    );
};

export default MediaSection;