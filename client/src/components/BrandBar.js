import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Card, Col } from "react-bootstrap";

const BrandBar = observer(() => {
   const { devices } = useContext(Context)
   return (
      <Col className={"Shop__BrandBar__row"}>
         {devices.brands.map(brand =>
            <Card
               key={brand.id}
               className={'Shop__BrandBar__item'}
               onClick={() => devices.setSelectedBrand(brand)}
               border={brand.id === devices.selectedBrand.id ? 'danger' : 'light'}>
               {brand.name}
            </Card>
         )}
      </Col>
   );
});

export default BrandBar;