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
import { getSuppliers } from "api";
import { getProducts } from "api";
import { FormProduct } from "components/FormProduct/form";
import { FormSupplier } from "components/FormSupplier/form";
import { getToken } from "functions";
import { useSetProducts } from "hooks";
import { useSetStatsFormSupplier } from "hooks";
import { useSetSuppliers } from "hooks";
import { useSetStatsFormProduct } from "hooks";
import { useGetValueUser } from "hooks";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

function ProductsList() {
  const token = getToken();
  const [products, setProducts] = useSetProducts();
  const [suppliers, setSuppliers] = useSetSuppliers();
  const [stateForm, setStateForm] = useSetStatsFormProduct();
  const [stateFormSupplier, setStateFormSupplier] = useSetStatsFormSupplier();
  const user = useGetValueUser();
  const navigateTo = useNavigate();

  useEffect(() => {
    async function loadData() {
      const productsFromDB = await getProducts(token);
      const suppliersFromDB = await getSuppliers(token);
      console.log(productsFromDB);
      setSuppliers(suppliersFromDB);
      setProducts(productsFromDB);
    }
    loadData();
  }, [stateForm, stateFormSupplier]);

  const handleActiveForm = () => {
    if (stateForm == false) setStateForm(true);
    else setStateForm(false);
  };
  const handleActiveFormSupplier = () => {
    if (stateFormSupplier == false) setStateFormSupplier(true);
    else setStateFormSupplier(false);
  };
  console.log("products", products);
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Productos</CardTitle>
                {user.rol == "admin" ? (
                  <Link className="text-center" onClick={handleActiveForm}>
                    {stateForm == true ? "Close" : "Add product"}
                  </Link>
                ) : null}

                {stateForm == true ? <FormProduct /> : null}
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Product</th>
                      <th>Supplier</th>
                      <th>Stock</th>
                      <th className="text-center">categorie</th>
                      <th className="text-center">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products[0] ? (
                      products?.map((prod) => {
                        return (
                          <tr
                            key={prod.id}
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              navigateTo("/admin/product/" + prod.id)
                            }
                          >
                            <td>{prod.title}</td>
                            <td>{prod.supplierName}</td>
                            <td>{prod.stock}</td>
                            <td className="text-center">
                              {prod.categoriesName}
                            </td>
                            <td className="text-center">${prod.price}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td>No hay productos</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Suppliers</CardTitle>
                <p className="category">Here is a subtitle for this table</p>
                {user.rol == "admin" ? (
                  <Link
                    className="text-center"
                    onClick={handleActiveFormSupplier}
                  >
                    {stateFormSupplier == true ? "Close" : "Add supplier"}
                  </Link>
                ) : null}

                {stateFormSupplier == true ? <FormSupplier /> : null}
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Cellphone</th>
                      <th className="text-center">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {suppliers?.map((supplier) => {
                      return (
                        <tr
                          key={supplier.id}
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            navigateTo("/admin/supplier/" + supplier.id)
                          }
                        >
                          <td>{supplier.name}</td>
                          <td>{supplier.description}</td>
                          <td>{supplier.cellphone}</td>
                          <td className="text-center">{supplier.email}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ProductsList;
