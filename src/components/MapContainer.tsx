import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

type Center = {
    street: string
    company: string
    workSchedule: string
    coordinates: [number, number]
    logo: string
    phone: string
}

const centres: Center[] = [
  {
      street: "Вул. Княжий Затон 2/30",
      company: "Ремонт принтеров",
      workSchedule: "Пн-Пт: 10-19 \nСб-Нд: вихідний",
      logo: "https://serviceclub.com.ua/services/fcff7410ac86bf16ad1f11b74937311c.png.pagespeed.ce.BdvvIDpyuJ.png",
      coordinates: [50.4029068, 30.6261845],
      phone: "(067) 251-00-45"
  },
  {
      street: "Вул. Білоруська, 40",
      company: "Ремонт принтеров",
      workSchedule: "Пн-Пт: 10-19 \nСб-Нд: вихідний",
      logo: "https://serviceclub.com.ua/services/fcff7410ac86bf16ad1f11b74937311c.png.pagespeed.ce.BdvvIDpyuJ.png",
      coordinates: [50.4657072, 30.4707327],
      phone: "(067) 251-00-45"
  },
  {
      street: "Вул. Антонова 12",
      company: "Теле Європа-Сервіс",
      workSchedule: "Пн-Пт: 10-18.30 \nСб: 10-16 \nНд: вихідний",
      logo: "https://serviceclub.com.ua/services/d7caea61ae87c3169633224a023fa8f0.png.pagespeed.ce.4CNqsya-o-.png",
      coordinates: [50.4331589, 30.4493026],
      phone: "(097) 332-33-02"
  },
  {
      street: "Софіївська Борщагівка, вул. Райдужна 86",
      company: "Сервісний центр Nine-Lives",
      workSchedule: "Пн-Пт: 10-18 \nСб: 10-15 \nНд: вихідний",
      logo: "https://serviceclub.com.ua/services/198c3aacb0a1ee540208096c0f7e23e6.png.pagespeed.ce.1TMjouOSqR.png",
      coordinates: [50.4061115,30.3299153],
      phone: "(099) 307-15-66"
  },
  {
      street: "Вул. Жмеринська 30/8 офіс 7",
      company: "Сервісний центр SERVICEmobile",
      workSchedule: "Пн-Пт: 10-19 \nСб: 12-17 \nНд: вихідний",
      logo: "https://serviceclub.com.ua/services/e5521eacc85319b0f5fd101dd9f7ffc4.jpg.pagespeed.ce.soMUqKVs8-.jpg",
      coordinates: [50.4392623, 30.3762967],
      phone: "(066) 704-11-80"
  },
  {
      street: "Вул. Поречкова 189",
      company: "Сервісний центр Сервіс Солушнс",
      workSchedule: "Пн-Пт: 10-18 \nСб-Нд: вихідний",
      logo: "https://serviceclub.com.ua/services/c6774ee951a33dc203cfe49d8fc8e8f0.png.pagespeed.ce.WCcG7kITZ6.png",
      coordinates: [50.4840478, 30.4032697],
      phone: "(095) 351-11-55"
  },
  {
      street: "Біла Церква, вул. Шевченка 87",
      company: "Сервісний центр Ф1 Сервіс",
      workSchedule: "Пн-Пт: 09-18 \nСб-Нд: вихідний",
      logo: "https://serviceclub.com.ua/services/7946b89d425aafd5ae3494f281cd0019.png.pagespeed.ce.jNqSxRki7K.png",
      coordinates: [49.7869064, 30.1264924],
      phone: "(067) 322-35-43"
  },
  {
      street: "Вул. Райдужна 25Б",
      company: "Сервісний центр Крок-ТТЦ",
      workSchedule: "Пн-Пт: 9-20 \nСб: 10-18 \nНд: вихідний",
      logo: "https://serviceclub.com.ua/services/036fe287d84c788bfd1e33f8678f07c5.png.pagespeed.ce.MzNu3pqHOt.png",
      coordinates: [50.4838582, 30.5866264],
      phone: "0(800) 50-45-04"
  },
  {
      street: "Вул. Ревуцького, 6",
      company: "Сервісний центр Крок-ТТЦ",
      workSchedule: "Пн-Пт: 9-20 \nСб: 10-18 \nНд: вихідний",
      logo: "https://serviceclub.com.ua/services/036fe287d84c788bfd1e33f8678f07c5.png.pagespeed.ce.MzNu3pqHOt.png",
      coordinates: [50.4155702, 30.6405087],
      phone: "0(800) 50-45-04"
  },
  {
      street: "Вул. Русанівська набережна, 8",
      company: "Сервісний центр Крок-ТТЦ",
      workSchedule: "Пн-Пт: 9-20 \nСб: 10-18 \nНд: вихідний",
      logo: "https://serviceclub.com.ua/services/036fe287d84c788bfd1e33f8678f07c5.png.pagespeed.ce.MzNu3pqHOt.png",
      coordinates: [50.4369312, 30.5905985],
      phone: "0(800) 50-45-04"
  }
];

const MapComponent = () => {
    return <MapContainer style={{ margin: "1em 0em" }} center={[50.4029068, 30.6261845]} zoom={11} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {centres.map((centre, i) => {
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