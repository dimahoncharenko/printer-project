/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const CSS = css`

@media (min-width: 600px) {
    display: grid;
    max-width: 1500px;
    margin: 0 auto;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(250px, 500px);
    grid-template-areas:". save"
                        "color ."
                        ". flexibility"
                        "compability ."
                        ". smart-panel"
                        "heat-free .";
    }

    .showcase__item
    {
        display: flex;
        padding: .5em 1.5em;
        justify-content: center;
        flex-direction: column;
        height: 300px;

        @media (min-width: 600px) {
            height: 100%;
        }
    }

    .showcase__item.gray
    {
        background-color: rgb(112,112,112);
        color: white;
    }
    .showcase__item.black
    {
        background-color: black;
        color: white;
    }

    .showcase__item > h3
    {
        font-size: 1rem;
        margin-bottom: 0;
        
        @media (min-width: 600px) {
            font-size: 2rem;
        }
    }

    .showcase__item > p
    {
        text-align: justify;
        font-size: .8rem;

        @media (min-width: 600px) {
            font-size: 1rem;
        }
    }

    .save-money {
        grid-area: save;
        background-image: url("/images/save-money.jpg");
    }
    .color-system {
        grid-area: color;
        background-image: url("/images/new-colour-system.jpg");
        color: white;
    }
    .flexibility {
        grid-area: flexibility;
        background-image: url("/images/modern-flexibility.jpg");
        color: white;
    }
    .compability {
        grid-area: compability;
        background-image: url("/images/media-compatibility.jpg");
    }
    .smart-panel {
        grid-area: smart-panel;
        background-image: url("/images/smart-panel.jpg");
        color: white;
    }
    .heat-free {
        grid-area: heat-free;
        background-image: url("/images/heat-free.jpg");
        color: white;
    }

    @media (max-width: 799px) {
        grid-template-columns: 1fr;
        grid-auto-rows: minmax(250px, 500px);
        grid-template-areas: "."
                             "save"
                             "."
                             "color"
                             "."
                             "flexibility"
                             "."
                             "compability"
                             "."
                             "smart-panel"
                             "."
                             "heat-free";
    }
`;

const Showcase = () => {
    return (
        <div css={CSS} className="showcase">
                <div className="showcase__item gray wow animate__animated animate__backInUp">
                    <h3>Економія часу і грошей</h3>
                    <p>
                    L8180 - це економічний принтер, який дозволяє друкувати до 2300 високоякісних фотографій з одним набором чорнильних пляшок.                                                                     
                    </p>
                </div>
                <div className="showcase__item save-money wow animate__animated animate__backInUp"></div>
                <div className="showcase__item wow animate__animated animate__backInUp">
                    <h3>Нова 6-кольорова чорнильна система</h3>
                    <p>
                        Фарби Epson Claria ET Premium виробляють високоякісні, тривалі фотографії без кордонів розміром до A3+. 
                        Чорне фото та нові фото-сірі фарби дозволяють легко досягти видатних чорно-білих фотографій, тоді як 
                        пігментна чорна фарба забезпечує чіткий текст при друку двосторонніх документів на звичайному папері, 
                        що робить цей принтер фантастичним вибором для кожного завдання у вашому домі.                                                  
                    </p>
                </div>
                <div className="showcase__item color-system wow animate__animated animate__backInUp"></div>
                <div className="showcase__item black wow animate__animated animate__backInUp">
                    <h3>Сучасна гнучкість</h3>
                    <p>
                        Принтер для сучасного користувача EcoTank L8180 дозволяє друкувати, сканувати та більше безпосередньо з телефону або планшета за допомогою програми Epson Smart Panel                                                               
                    </p>
                </div>
                <div className="showcase__item flexibility wow animate__animated animate__backInUp"></div>
                <div className="showcase__item gray wow animate__animated animate__backInUp">
                    <h3>Художня медіа сумісність</h3>
                    <p>
                        Надзвичайно гнучкий, L8180 не тільки дозволяє друкувати безпосередньо на відповідних CD та DVD-дисках, 
                        але також може зберігати розмір фотографій та папір формату А4 у передніх лотках, що гарантує, що принтер завжди 
                        завантажений і готовий до роботи. Задній лоток дозволяє друкувати на папері формату А3+, а також на таких носіях, 
                        як папір для ремесел та картках, тоді як пряма подача паперу формату А3+ означає, що ви можете друкувати на носіях 
                        товщиною до 1,3 мм і довжиною 2 м, що дає вам можливість бути максимально креативним і художній, як вам подобається!
                    </p>
                </div>
                <div className="showcase__item compability wow animate__animated animate__backInUp"></div>
                <div className="showcase__item wow animate__animated animate__backInUp">
                    <h3>Додаток Epson Smart Panel</h3>
                    <p>
                    Додаток Epson Smart Panel дозволяє керувати принтером зі свого смартфона або планшета
                    </p>
                </div>
                <div className="showcase__item smart-panel wow animate__animated animate__backInUp"></div>
                <div className="showcase__item black wow animate__animated animate__backInUp">
                    <h3>Технологія без нагріву</h3>
                    <p>
                        Завдяки перспективній технології без нагрівання Micro Piezo ви можете насолоджуватися 
                        послідовним високошвидкісним друком із значно зменшеним споживанням енергії та меншою потребою 
                        у запчастинах. Заощаджуйте час і гроші, а також врятуйте планету!
                    </p>
                </div>
                <div className="showcase__item heat-free wow animate__animated animate__backInUp"></div>
        </div>
    );
};

export default Showcase;