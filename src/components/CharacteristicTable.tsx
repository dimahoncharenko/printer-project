import React, { Fragment } from "react";
import BaseTable, { TableHeader, TableRow } from "./BaseTable";

export type Row = {
    title: string
    cells: Array<string[]>
}

type Props = {
    table: Row[]
}

const CharacteristicTable = ({ table }: Props) => {
    return <BaseTable>
        {table && table.map((row, i) => {
            return <Fragment key={i}>
                <TableHeader>{row.title}</TableHeader>
                {row.cells.map((cell, rowIndex) => {
                    return <TableRow key={rowIndex}>
                        {cell.map((item, index) => {
                            return <div key={index}>{item}</div>
                        })}
                    </TableRow>
                })}
            </Fragment>;
        })}
    </BaseTable>
};

export default CharacteristicTable;