/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useCallback, lazy, Suspense } from "react";
import { jsx, css } from "@emotion/react";
import Loader from "react-loader-spinner";

import Tile from "./Tile";
import Wrapper from "./Wrapper";
import { PricingRow } from "./PricingTable";
import Line, { useCurrent } from "./Line";

type Props = {
    printerPricing: PricingRow[]
    inksPricing: PricingRow[]
}

const PrinterPricing = lazy(() => import("./Products/PrinterPricing"));
const InksPricing = lazy(() => import("./Products/InksPricing"));

const categories = [{ index: 1, title: "Принтер" }, { index: 2, title: "Фарби" }];

const DillersSection = ({ printerPricing, inksPricing }: Props) => {
    const { state, changeCurrent } = useCurrent();

    const renderTable = useCallback((index: number) => {
        switch (index) {
            case 2:
                return <InksPricing inks={inksPricing}/>
            default:
                return <PrinterPricing printers={printerPricing}/>
        }
    }, [printerPricing, inksPricing]);

    return <React.Fragment>
        <div id="dillers"></div>
        <Tile><h2>Дилери</h2></Tile>
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
                {renderTable(state)}
            </Suspense>
        </Wrapper>
    </React.Fragment>
};

export default DillersSection;