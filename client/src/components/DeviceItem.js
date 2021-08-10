import React from 'react';
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from "../assets/star.png";
import { useHistory } from "react-router-dom"
import { DEVICE_ROUTE } from "../utils/const";


const DeviceItem = ({ devices }) => {
   const history = useHistory()
   console.log(history)
   return (
      <Col md={3} onClick={() => history.push(DEVICE_ROUTE + '/' + devices.id)}>
         <Card className={"Shop__Device__card"}>
            <Image className={"Shop__Device__img"} height={300} src={'http://localhost:4000/' + devices.img} />
            <div className={"Shop__Device__content"}>
               <div className={"Shop__Device__text"}>
                  Рейтинг
               </div>
               <div className={"Shop__Device__subcontent"}>
                  <div className={"Shop__Device__rating"}>
                     {devices.rating}
                  </div>
                  <div className={"Shop__Device__star"}>
                     <Image height={15} width={15} src={star} />
                  </div>
               </div>
            </div>
            <div>
               {devices.name}
            </div>

         </Card>
      </Col>
   );
};

export default DeviceItem;