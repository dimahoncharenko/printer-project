/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";

import BaseTable, { TableHeader, TableRow } from "./BaseTable";

const CSS = css`
    .table__header
    {
        font-size: 1rem;

        @media (min-width: 600px) {
            font-size: 1.5rem;
        }
    }

    .pricing-table__row 
    {
        align-items: center;

        .pricing-table__logo
        {
            display: none;
            flex: 0;
            padding: 1em;

            @media (min-width: 600px) {
                display: inline-block;
                flex: 0.2;
            }

            > img
            {
                max-width: 80%;
            }
        }

        .pricing-table__price
        {
            flex: 0.2;
            font-weight: bolder;
        }
    }

    .pricing-table__row:nth-of-type(even) 
    {
        background-color: #f5f5f5;
    }
`;

export type PricingRow = {
    price: string
    link: string
    logoUrl: string
} 

type Props = {
    pricingTable: PricingRow[]
    header: string
}

const PricingTable = ({ pricingTable, header }: Props) => {
    return <div css={CSS} className="pricing-table">
        <BaseTable>
            <TableHeader>{header}</TableHeader>
            {pricingTable && pricingTable.map(({ logoUrl, link, price }, index) => {
                return <TableRow rowName="pricing-table__row" key={index}>
                    <div className="pricing-table__logo"><img src={logoUrl} alt=""></img></div>
                    <div className="pricing-table__link"><a href={link} target="_blank" rel="noreferrer">{link}</a></div>
                    <div className="pricing-table__price">{price}</div>
                </TableRow>
            })}
        </BaseTable>
    </div>
};

export default PricingTable;

