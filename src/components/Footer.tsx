/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import Wrapper from "./Wrapper";

const CSS = css`
    background-color: orangered;
    padding: .3em .5em;

    .footer__content
    {
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            text-decoration: none;
        }

        > .section_1 > .logo
        {
            color: white;
            font-size: 1rem;

            @media (min-width: 600px) {
                font-size: 1.5rem;
            }
        }

        > .section_2 > ul
        {
            list-style: none;
            display: grid;
            margin: 0;
            padding: 0;
            gap: .2em;
            font-size: .8rem;

            @media (min-width: 600px) {
                font-size: 1rem;
                gap: .4em;
            }

            a {
                color: white;
            }
        }

        > .section_3 > p
        {
            color: white;
            margin: 0;
            font-size: .9rem;

            @media (min-width: 600px) {
                font-size: 1.2rem;
                line-height: 1.5;
            }
        }
    }
`;

const Footer = () => {
    return <footer css={CSS} className="footer">
        <Wrapper>
            <div className="footer__content">
                <div className="section_1">
                    <a className="logo" href="/">EcoTank L8180</a>
                </div>
                <div className="section_2">
                    <ul>
                        <li><span><a href="#review">Загальний огляд</a></span></li>
                        <li><span><a href="#abilities">Можливості</a></span></li>
                        <li><span><a href="#media">Медіа</a></span></li>
                        <li><span><a href="#characteristics">Характеристики</a></span></li>
                        <li><span><a href="#dillers">Дилери</a></span></li>
                        <li><span><a href="#service-centres">Сервісні центри в Києві</a></span></li>
                    </ul>
                </div>
                <div className="section_3">
                    <p>Виконав студент 43ПОкт</p>
                    <p>Гончаренко Дмитро</p>
                </div>
            </div>
        </Wrapper>
    </footer>
};

export default Footer;