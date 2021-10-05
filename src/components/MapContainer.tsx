import React, { useEffect, useState } from "react";
import fetch from "axios";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

type Center = {
    street: string
    company: string
    workSchedule: string
    coordinates: [number, number]
    logo: string
    phone: string
}

const MapComponent = () => {
    const [centres, setCentres] = useState<Center[]>([]);

    useEffect(() => {
        async function getCentres() {
            await fetch("http://localhost:3000/centres")
                .then(res => res.data.centres)
                .then(setCentres)
                .catch(console.log);
        }

        getCentres();
    }, []);

    return <MapContainer style={{ margin: "1em 0em" }} center={[50.4029068, 30.6261845]} zoom={11} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {centres && centres.map((centre, i) => {
        return <Marker key={i} position={centre.coordinates}>
        <Popup>
          <img src={centre.logo} width={80} alt={centre.company}/>
          <h2>{centre.company}</h2>
          <p>{centre.street}</p>
          <p>{centre.phone}</p>
          <p>{centre.workSchedule}</p>
        </Popup>
      </Marker>
    })}

  </MapContainer>
};

export default MapComponent;