/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";

type Props = {
    children: React.ReactNode
}

const Wrapper = ({children}: Props) => {
    return <div css={{ margin: "0 auto", maxWidth: "70em" }} className="wow animate__backInUp">
        {children}
    </div>
};

export default Wrapper;