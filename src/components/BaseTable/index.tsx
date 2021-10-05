/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";

const CSS = css`
    --border-color: #f4f4f4;
    --text-color:  #444;
    border-left: .05em solid var(--border-color);
    border-right: .05em solid var(--border-color);
    border-bottom: .05em solid var(--border-color);
    color: var(--text-color);

    > .table__header
    {
        text-align: center;
        font-weight: bold;
        border-top: .05em solid var(--border-color);
        border-bottom: .05em solid var(--border-color);
        padding: .8em;
    }

    > [aria-labelledby=table__row]
    {
        display: flex;
        font-weight: lighter;

        > div
        {
            flex: 1;
            padding: .8em;
        }

        > div + div
        {
            border-left: .05em solid var(--border-color);
        }
    }

    > [aria-labelledby=table__row] + [aria-labelledby=table__row]
    {
        border-top: .05em solid var(--border-color);
    }
`;

type TableRowProps = {
    children: React.ReactNode
    rowName?: string
};

export const TableRow = ({ children, rowName = "table__row" }: TableRowProps) => {
    return <div className={rowName} aria-labelledby="table__row">
        {children}
    </div>
};

type TableHeaderProps = {
    children: React.ReactNode
    css?: React.CSSProperties
};

export const TableHeader = ({ children, css = {} }: TableHeaderProps) => {
    return <div css={{ ...css }} className="table__header">{children}</div>
};

type Props = {
    children: React.ReactNode
}

const Table = ({ children }: Props) => {
    return <div css={CSS} className="table">
        {children}
    </div>
};

export default Table;