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

utilizar la data de los usuarios trael la funcion de api */

import { getUsers } from "api";
import { getSuppliers } from "api";
import { getProducts } from "api";
import { FormProduct } from "components/FormProduct/form";
import { FormSupplier } from "components/FormSupplier/form";
import { getToken } from "functions";
import { useSetUsers } from "hooks";
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

function UsersList() {
  const token = getToken();

  const [users, setUsers] = useSetUsers();

  const user = useGetValueUser();
  const navigateTo = useNavigate();

  useEffect(() => {
    async function loadData() {
      const usersFromDB = await getUsers(token);

      setUsers(usersFromDB);
    }
    loadData();
  }, [navigateTo]);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Users</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Email</th>
                      <th>Nombre</th>
                      <th>Rol</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users?.map((user) => {
                      return (
                        <tr
                          key={user.id}
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            navigateTo("/admin/useruct/" + user.id)
                          }
                        >
                          <td>{user.email}</td>
                          <td>{user.name}</td>
                          <td>{user.rol}</td>
                          {/* <td>{user.stock}</td>
                          <td className="text-center">{user.categoriesName}</td>
                          <td className="text-center">${user.price}</td> */}
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

export default UsersList;
