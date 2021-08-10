import React, { useContext, useEffect } from 'react';
import './Shop.css'
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { fetchBrands, fetchDevices, fetchTypes } from "../http/DeviceAPI";
import { Context } from '..';
import Pages from '../components/Pages';

const Shop = observer(() => {
   const { devices } = useContext(Context)

   useEffect(() => {
      fetchTypes().then(data => devices.setTypes(data))
      fetchBrands().then(data => devices.setBrands(data))
      fetchDevices(null, null, 1, 2).then(data => {
         devices.setDevices(data.rows)
         devices.setTotalCount(data.count)
      })
   }, [])

   useEffect(() => {
      fetchDevices(devices.selectedType.id, devices.selectedBrand.id, devices.page, 4).then(data => {
         devices.setDevices(data.rows)
         devices.setTotalCount(data.count)
      })
   }, [devices.page, devices.selectedType, devices.selectedBrand,])

   return (
      <Container className={"Shop__Container"}>
         <Row className={"Shop__Row"}>
            <Col className={"Shop__BrandBar"}>
               <BrandBar />
               <DeviceList />
               <Pages />
            </Col>
         </Row>
      </Container>
   );
});

export default Shop;