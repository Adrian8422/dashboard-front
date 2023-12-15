/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { getProducts } from "api";
import { FormProduct } from "components/FormProduct/form";
import { DetailProduct } from "components/DetailProduct";

import { useSetProducts } from "hooks";
import { useSetStatsFormProduct } from "hooks";
import { useGetValueRolUser } from "hooks";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// reactstrap components

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import { useSetProduct } from "hooks";
import { DetailSupplier } from "components/DetailSupplier";

function Supplier() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Supplier</CardTitle>

                <DetailSupplier />
              </CardHeader>
              <CardBody></CardBody>
            </Card>
          </Col>
          {/* <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Table on Plain Background</CardTitle>
                <p className="category">Here is a subtitle for this table</p>
              </CardHeader>
            </Card>
          </Col> */}
        </Row>
      </div>
    </>
  );
}

export default Supplier;
