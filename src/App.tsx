import { useEffect, useState } from "react";
import fetch from "axios";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Wrapper from "./components/Wrapper";
import PhotoGallery from "./components/PhotoGallery";
import MapContainer from "./components/MapContainer";
import Footer from "./components/Footer";
import CharacteristicTable, { Row as CharacteristicRow } from "./components/CharacteristicTable";
import Tile from "./components/Tile";
import { PricingRow } from "./components/PricingTable";
import ToHome from "./components/ArrowTop";

import MediaSection from "./components/MediaSection";
import DealerSection from "./components/DealerSection";

export type Photo = {
  img: string
  title: string
  content: string
}

function App() {
  const [ photos, setPhotos ] = useState<Photo[]>([]);
  const [ characteristics, setCharacteristics ] = useState<CharacteristicRow[]>([]);
  const [ printerPricing, setPrinterPricing ] = useState<PricingRow[]>([]);
  const [ inksPricing, setInksPricing ] = useState<PricingRow[]>([]);

  useEffect(() => {
    async function getData() {

      return await fetch.all([
        fetch.get("https://printer-project-mock-server.herokuapp.com/photos")
          .then(res => res.data),

        fetch.get<CharacteristicRow[]>("https://printer-project-mock-server.herokuapp.com/characteristics")
          .then(res => res.data),

        fetch.get<PricingRow[]>("https://printer-project-mock-server.herokuapp.com/pricing")
          .then(res => res.data),
      ]);

    } 

    getData()
      .then(data => {
        setPhotos(data[0].photos);
        setCharacteristics(data[1].characteristics);
        setPrinterPricing(data[2].pricing.printer);
        setInksPricing(data[2].pricing.inks);
      })
  }, []);

  return (
    <div>
      <Header/>
      <Hero>
          <div>
            <h1>EcoTank L8180</h1>
            <p>Фотопринтер EcoTank формату A3+</p>
          </div>
          <img src="https://i.ibb.co/fnkK9Y5/printer.png" alt=""/>
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
      <MediaSection />
      <div id="characteristics"></div>
      <Tile><h2>Характеристики</h2></Tile>
      <Wrapper>
        <CharacteristicTable table={characteristics}/>
      </Wrapper>
      <DealerSection printerPricing={printerPricing} inksPricing={inksPricing}/>
      <div id="service-centres"></div>
      <Tile><h2>Сервісні центри в Києві</h2></Tile>
      {/* <Wrapper>
        <MapContainer/>
      </Wrapper> */}
      <Footer/>
    </div>
  );
}

export default App;
