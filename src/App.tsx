import Header from "./components/Header";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Player from "./components/Player";
import Wrapper from "./components/Wrapper";
import PhotoGallery from "./components/PhotoGallery";
import MapContainer from "./components/MapContainer";
import Footer from "./components/Footer";
import CharacteristicTable, { Row as CharacteristicRow } from "./components/CharacteristicTable";
import Tile from "./components/Tile";
import PricingTable, { PricingRow } from "./components/PricingTable";
import ToHome from "./components/ArrowTop";

import printer from "./images/printer.png";
import slide1 from "./images/slide1.jpg";
import slide3 from "./images/slide3.jpg";
import slide4 from "./images/slide4.jpg";
import slide5 from "./images/slide5.jpg";
import slide6 from "./images/slide6.jpg";
import slide7 from "./images/slide7.jpg";
import slide8 from "./images/slide8.jpg";

export type Photo = {
  img: string
  title: string
  content: string
}

const characteristics: CharacteristicRow[] = [
  { 
    title: "Основні", 
    cells: [
      ["Формат пристрою", "А3"],
      ["Технологія друку", "струменева"],
      ["Кольоровість", "кольоровий"],
      ["ЖК дисплей", "кольоровий, сенсорний - 10,9 см"]
    ] 
  },
  { 
    title: "Друк", 
    cells: [
      ["Швидкість чорно-білого друку", "16 листів/хв"],
      ["Швидкість кольорового друку", "12 листів/хв"],
      ["Макс. роздільна здатність, dpi", "5760x1440"],
    ] 
  },
  {
    title: "Копіювання",
    cells: [
      ["Роздільна здатність копіювання", "1200x4800 dpi"],
      ["Кількість копій за цикл", "1-99"]
    ]
  },
  {
    title: "Сканування",
    cells: [
      ["Тип сканера", "планшетний"],
      ["Роздільна здатність сканера", "1200х4800 dpi"],
      ["Макс. розмір сканованого об'єкта", "216x297 мм"],
    ]
  },
  {
    title: "Лотки",
    cells: [
      ["Подача паперу", "100 листів"],
      ["Лотки подачі", "1 лист"],
      ["Лоток видачі", "50 листів"],
    ]
  },
  {
    title: "Інтерфейси",
    cells: [
      ["Провідні інтерфейси", "Підключення до мережі (Ethernet); USB"],
      ["Безпровідні інтерфейси", "Wi-Fi"]  
    ]
  },
  {
    title: "Додатково",
    cells: [
      ["Підтримка ОС", "Windows 8; Mac OS X v10.10; Mac OS X v10.14; Windows 7; Mac OS X v10.12; Windows 8.1; Mac OS X v10.13; Windows 10; Mac OS X v10.11"]
    ]
  },
  {
    title: "Фізичні характеристики",
    cells: [
      ["Колір", "чорний"],
      ["Споживана потужність", "17 Вт"],
      ["Габарити (ШхДхВ)", "523х379х169 мм"],
      ["Вага", "11.1 кг"],
      ["Гарантійний термін", "12 місяців"],
    ]
  },
  
];

const photos: Photo[] = [
  {
    img: slide1,
    title: "Представляємо принтери EcoTank",
    content: "Кольоровий друк сторінок за допомогою EcoTank коштує недорого. Принтери EcoTank використовують технологію Heat-Free, щоб забезпечити передові переваги для клієнтів над лазерною та тепловою струменевою технологією та, для повного спокою, користуватися трирічною гарантією, коли ви реєструєте свій EcoTank у Epson."
  }, 
  {
    img: slide3,
    title: "Що таке EcoTank?",
    content: "Принтер EcoTank принципово відрізняється від більшості принтерів - замість картриджів він має великий чорнильний бак, який ви заповнюєте чорнилом з пляшок. З самого початку у вас достатньо чорнила для друку до 14 000 сторінок - це означає, що як гроші, так і час заощаджуються, оскільки ви не часто змінюєте картриджі. Налаштування просте, заправка баку не викликає безладу і також надійна."
  }, 
  {
    img: slide4,
    title: "Надійний друк без безладу",
    content: "Кожен принтер оснащений технологією друкуючої головки Epson Micro Piezo, яка забезпечує неперевершену довговічність, якість і надійність. Чорнильниця надвисокої місткості повністю інтегрована в принтер, тому ви можете насолоджуватися надійним друком без безладу або клопоту інших систем заправки. Унікальна технологія швидкого поповнення чорнила Epson, зі спеціально розробленими герметичними ковпачками та фільтрами, забезпечує мінімальні втрати чорнила."
  }, 
  {
    img: slide5,
    title: "Відмінна колірна гамма",
    content: "Новітня технологія нанесення паперового покриття застосовується, щоб гарантувати роботу з найсучаснішими фарбами Epson UltraChrome, щоб відтворити найширшу колірну гаму."
  }, 
  {
    img: slide6,
    title: "Резистентність до шкідливих факторів мікроклімату",
    content: "Продукція принтера Epson призначена для використання в різних середовищах. Під час нормальних операцій продукти піддаються взаємодії та дотику людей."
  }, 
  {
    img: slide7,
    title: "Epson та Windows 10",
    content: "Epson прагне підтримувати Windows 10 і постійно розробляє програми та драйвери пристроїв відповідно до нових глобальних стандартів Microsoft. Windows 10 буде підтримувати деякі продукти Epson прямо з коробки, крім того, Epson випустила ряд сумісних драйверів і програмного забезпечення для Windows 10."
  }, 
  {
    img: slide8,
    title: "Друк з мобільних пристроїв і багато іншого",
    content: "Завдяки лінійці компактних мультипакетів Epson з Wi-Fi, друк з мобільних телефонів може бути швидким і легким. Більше не потрібно прив'язуватися до столу – надсилайте товари для друку з планшета або смартфона за допомогою Wi-Fi та ряду безкоштовних мобільних додатків для друку."
  }];

  const pricing: PricingRow[] = [
    {
      price: "17 880 грн.",
      link: "https://konotop.prom.ua/ua/p1440802220-bfp-epson-l8180.html?&primelead=MS4wMw",
      logoUrl: "https://konotop.prom.ua/cloud-cgi/static/uaprom-static/js/build/portal-portable/images/logo_prom-3K4N3.svg"
    },
    {
      price: "19 479 грн.",
      link: "https://www.lds.com.ua/uk/mfu-a3-epson-l8180-fabrika-pechati-c-wi-fi-c11cj21403/",
      logoUrl: "https://www.lds.com.ua/images/logo_LDS.png"
    },
    {
      price: "19 479 грн.",
      link: "https://megaprint.kiev.ua/bfp-a3-epson-l8180-fabrika-druku-z-wi-fi/",
      logoUrl: "https://megaprint.kiev.ua/content/images/2/200x26l90nn0/18790293426215.webp"
    },
    {
      price: "29 250 грн.",
      link: "https://click24.in.ua/p/1265564035-epson-ecotank-l8180/?utm_source=nadavi&utm_medium=cpc",
      logoUrl: "https://images.zakupka.com/i3/firms/27/10766/10766494/click24-biz_42bb44d567fa70a_400x120.png"
    },
    {
      price: "18 686 грн.",
      link: "https://rozetka.com.ua/epson-c11cj21403/p314140141/",
      logoUrl: "https://xl-static.rozetka.com.ua/assets/img/design/logo_n.svg"
    },
    {
      price: "19 459 грн.",
      link: "https://brain.com.ua/ukr/Bagatofunkcionalniy_pristriy_Epson_L8180_Fabrika_pechati_c_WI-FI_C11CJ21403-p789594.html",
      logoUrl: "https://brain.com.ua/static/retail/images/brain-logo-gray.svg"
    },
    {
      price: "Договірна",
      link: "https://vct1.com/?/product/46341/bfp-epson-l8180-c11cj21504/",
      logoUrl: "https://vct1.com/img/logo.png"
    },
  ];

function App() {
  return (
    <div>
      <Header/>
      <Hero>
          <div>
            <h1>EcoTank L8180</h1>
            <p>Фотопринтер EcoTank формату A3+</p>
          </div>
          <img src={printer} alt=""/>
      </Hero>
      <ToHome/>
      <div id="review"></div>
      <Tile><h2>Загальний огляд</h2></Tile>
      <Wrapper>
        <PhotoGallery photos={photos}/>
      </Wrapper>
      <div id="abilities"></div>
      <Tile><h2>Можливості</h2></Tile>
      <Showcase/>
      <div style={{ marginTop: "1em" }} id="media"></div>
      <Tile><h2>Медіа</h2></Tile>
      <Wrapper>
        <Player title="ECOTANK L8180" />
      </Wrapper>
      <div id="characteristics"></div>
      <Tile><h2>Характеристики</h2></Tile>
      <Wrapper>
        <CharacteristicTable table={characteristics}/>
      </Wrapper>
      <div id="dillers"></div>
      <Tile><h2>Дилери</h2></Tile>
      <Wrapper>
        <PricingTable header="Дилери" pricingTable={pricing}/>
      </Wrapper>
      <div id="service-centres"></div>
      <Tile><h2>Сервісні центри в Києві</h2></Tile>
      <Wrapper>
        <MapContainer/>
      </Wrapper>
      <Footer/>
    </div>
  );
}

export default App;
