import React, { useEffect, useState } from "react";
import fetch from "axios";

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

export type Photo = {
  img: string
  title: string
  content: string
}

function App() {
  const [ photos, setPhotos ] = useState<Photo[]>([]);
  const [ characteristics, setCharacteristics ] = useState<CharacteristicRow[]>([]);
  const [ pricing, setPricing ] = useState<PricingRow[]>([]);

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
        setPricing(data[2].pricing);
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
