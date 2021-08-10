
import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import DeviceItem from './DeviceItem';


const DeviceList = observer(() => {
   const { devices } = useContext(Context)

   return (
      <Row>
         {devices.devices.map(devices =>
            <DeviceItem key={devices.id} devices = {devices}/>
         )}
      </Row>
   );
});

export default DeviceList;