/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useState } from "react";

import Wrapper from "./Wrapper";

const CSS = css`
    background-color: orangered;
    position: relative;

    .header__content 
    {
        display: flex;
        padding: .5em 1em;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 799px) {
            .logo img
            {
                width: 50px;
            }
        }

        .nav
        {
            > .burger-toggle
            {
                display: block;
                width: 3em;
                height: 3em;
                overflow: hidden;
                text-indent: -10em;
                background-color: transparent;
                position: relative;
                cursor: pointer;
                border: none;

                &::after
                {
                    position: absolute;
                    content: "\\2261";
                    font-size: 2.5rem;
                    top: -10%;
                    left: 15%;
                    text-indent: 0em;
                    color: white;
                }
            }

            > .nav__list
            {
                display: none;
                position: absolute;
                left: 0;
                background-color: rgb(112,112,112);
                width: 100%;
                top: 100%;
            }

            &.is-open > .nav__list
            {
                display: block;
            }

            .menu
            {
                text-align: center;
                margin: 0;
                padding-left: 0;
                list-style: none;
                border-top: .05em solid lightgray;
                border-bottom: .05em solid lightgray;
                white-space: nowrap;

                > li
                {
                    width: 100%;
                }

                > li + li
                {
                    margin-top: .3em;
                    border-top: .05em solid lightgray;
                }

                > li > a
                {
                    display: block;
                    padding: .2em .4em;
                    text-decoration: none;
                    color: white;
                    font-size: 1rem;
                }
            }

            @media (min-width: 799px) {
                .burger-toggle
                {
                    display: none;
                }

                > .nav__list
                {
                    display: block;
                    position: static;
                    background-color: transparent;
                }

                .nav__list .menu
                {
                    display: flex;
                    align-items: center;
                    border: 0;
                    text-align: initial;

                    > li + li
                    {
                        margin-top: 0;
                        margin-left: 1em;
                    }

                    > li
                    {
                        border: 0;
                    }
                }
            }
        }
    }
`;

const Header = () => {
    const [toggle, setToggle] = useState(false);

    return <header css={CSS} className="header">
        <Wrapper>
            <div className="header__content"> 
                <div className="logo">
                    <a href="/">
                        <img src="/images/logo.webp" width="80" alt="Logo"/>
                    </a>
                </div>
                <nav className={`nav ${toggle ? "is-open" : ""}`}>
                    <button className="burger-toggle" onClick={setToggle.bind(null, !toggle)}>Показати меню</button>
                    <div className="nav__list">
                        <ul className="menu">
                            <li>
                                <a href="#review">Загальний огляд</a>
                            </li>
                            <li>
                                <a href="#abilities">Можливості</a>
                            </li>
                            <li>
                                <a href="#media">Медіа</a>
                            </li>
                            <li>
                                <a href="#characteristics">Характеристики</a>
                            </li>
                            <li>
                                <a href="#dillers">Дилери</a>
                            </li>
                            <li>
                                <a href="#service-centres">Сервісні центри в Києві</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </Wrapper>
    </header>
};

export default Header;