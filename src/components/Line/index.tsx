/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useReducer } from "react";
import { jsx, css, SerializedStyles } from "@emotion/react";

import Tile from "../Tile";

export const ACTIONS = {
    CHANGE_CURRENT: "CHANGE_CURRENT" as const
}

const initialState = 1;

type Action = { type: typeof ACTIONS["CHANGE_CURRENT"], payload: number };

export const defaultReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ACTIONS.CHANGE_CURRENT:
            return action.payload;
        default:
            return state;
    }
}

export const useCurrent = (reducer = defaultReducer) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const changeCurrent = (index: number) => dispatch({ type: "CHANGE_CURRENT", payload: index });

    return { state, changeCurrent };
};

const tileStyles = css`
    background-color: lightgray;
    padding: 0;

    .line
    {
        display: flex;
        width: min(1120px, 100vw);
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

type Props = {
    children: React.ReactNode
    customStyles?: SerializedStyles[]
}

const Line = ({ children, customStyles = [] }: Props) => {
    return <Tile customStyles={[tileStyles, ...customStyles]}>
    <div className="line">
        {children}
    </div>
    </Tile>
};

export default Line;