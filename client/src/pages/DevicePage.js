import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from "react-bootstrap";
import bigstar from '../assets/bigstar.png'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from "../http/DeviceAPI";
import './DevicePage.css'

const DevicePage = () => {
   const [device, setDevice] = useState({ info: [] })
   const { id } = useParams()

   useEffect(() => {
      fetchOneDevice(id).then(data => setDevice(data))
   }, [])

   return (
      <Container className={'DevicePage'}>
         <Row className={'DevicePage__container'}>
            <Col >
               <Image width={300} height={300} src={'http://localhost:4000/' + device.img} />
            </Col>
            <Col >
               <Row className={'DevicePage__row'}>
                  <h2>{device.name}</h2>
                  <div className={'DevicePage__rating'}
                     style={{ background: `url(${bigstar}) no-repeat center center`, backgroundSize: 'cover' }}
                  >
                     {device.rating}
                  </div>
               </Row>
            </Col>
         </Row>
         <Row className={'DevicePage_discription'}>
            <h2>Характеристики:</h2>
            {device.info.map(info =>
               <Row key={info.id}
                  className={'DevicePage_discription__text'}
                  style={{ background: info.id % 2 === 0 ? 'lightgray' : 'transparent' }}>
                  {info.title}: {info.description}
               </Row>
            )}
         </Row>
      </Container>
   );
};

export default DevicePage;