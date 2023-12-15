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
import { updateDataUser } from "api";
import { getDataUser } from "api";
import { getToken } from "functions";
import { useSetUser } from "hooks";
import { useGetValueUser } from "hooks";

import { useSetRolUser } from "hooks";
import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function UserProfile() {
  // const user = useGetValueUser();
  const [user, setUser] = useSetUser();
  const token = getToken();

  // AHORA LO HAGO ACA AL SETEO DEL ROL AL USER EN RECOIL PERO LUEGO HACERLA EN EL login

  // const [userRecoil, setUserRecoil] = useSetRolUser();
  useEffect(() => {
    async function loadData() {
      const data = await getDataUser(token);
      // setUserRecoil({ email: data.email, rol: data.rol });
      setUser(data);
    }
    loadData();
  }, []);

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const lastname = e.target.lastname.value;
    const data = { name, lastname };
    console.log("datata", data);
    const updateData = await updateDataUser(token, data);
    if (updateData) {
      const updatedData = await getDataUser(token);
      setUser(updatedData);

      alert("Updated succcessfully");
    }
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleUpdateUser}>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Company (disabled)</label>
                        <Input
                          defaultValue="Creative Code Inc."
                          disabled
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label></label>
                        <Input
                          defaultValue={user.email}
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input defaultValue={user.email} type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          name="name"
                          defaultValue={user.name}
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          name="lastname"
                          defaultValue={user.lastname}
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button className="btn-fill" color="primary" type="submit">
                    Save
                  </Button>
                </Form>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/emilyz.jpg")}
                    />
                    <h5 className="title">
                      {user.name ? user.name : user.email}
                    </h5>
                  </a>
                  <p className="description">{user.rol}</p>
                </div>
                <div className="card-description">
                  Do not be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </div>
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserProfile;
