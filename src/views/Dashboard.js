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
import React, { useEffect, useState } from "react";
import addIcon from "../assets/customIcons/icons8-add-50.png";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";
import { getProducts } from "api";
import { getToken } from "functions";
import { useGetProducts } from "hooks";
import { useSetTasks } from "hooks";
import { getTasks } from "api";

import { useSetStatusFormTask } from "hooks";
import { useNavigate } from "react-router-dom";
import { FormTask } from "components/FormTask";
import { deleteTaskId } from "api";
import { deleteManyTask } from "api";

function Dashboard(props) {
  const [selectedTasks, setSelectedTasks] = useState({});
  const navigateTo = useNavigate();
  const [tasks, setTasks] = useSetTasks();
  const [statusButtonDelete, setStatusButtonDelete] = useState(false);
  const token = getToken();
  const [bigChartData, setbigChartData] = React.useState("data1");
  const [products, setProducts] = useState([]);
  const [stateFormTask, setStateFormTask] = useSetStatusFormTask();

  useEffect(() => {
    async function loadData() {
      const productsFromDB = await getProducts(token);
      const tasksFromDB = await getTasks(token);
      if (!Object.values(selectedTasks).some((isSelected) => isSelected)) {
        setSelectedTasks({});
      }
      setTasks(tasksFromDB);
      console.log(productsFromDB);
      setProducts(productsFromDB);
    }
    loadData();
  }, [stateFormTask, statusButtonDelete]);
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  const handleCheckboxChange = (taskId) => {
    setSelectedTasks((prevSelectedTasks) => ({
      ...prevSelectedTasks,
      [taskId]: !prevSelectedTasks[taskId],
    }));
  };
  const hasSelectedTasks = Object.values(selectedTasks).some(
    (isSelected) => isSelected
  );
  const handleDeleteClick = async () => {
    // Obtén un array de objetos con el número de ID y el booleano de selección
    const selectedItemsArray = Object.entries(selectedTasks).map(
      ([id, isSelected]) => ({
        id: parseInt(id, 10), // Convierte el id a número
        isSelected,
      })
    );
    const IdsItemToDelete = selectedItemsArray
      .filter((item) => item.isSelected === true)
      .map((item) => item.id);
    console.log("IDS TO DELETE", IdsItemToDelete);

    if (statusButtonDelete == false) setStatusButtonDelete(true);
    else setStatusButtonDelete(false);
    await deleteManyTask(token, IdsItemToDelete);
    alert("Deleted");

    // selectedItemsArray.forEach(async (item) => {
    //   if (item.isSelected == true) {
    // await deleteTaskId(token, item.id);
    // console.log("ITEMS", item);
    ////ver COMO ACTUALIZAR PARA QUE SE CARGUEN LAS TASKS ACTUALIZADAS YA QUE FUERON BORRADAS ALGUNAS, TAMBIEN MODIFICAR PARA QUE NO HAGA MUCHAS PETICIONES, SINO QUE DIRECTAMENTE BORRE CON UN ARRAY DE ID Y CON UNA SOLA PETICION BORRE LAS TAREAS SELECCIONADAS
  };
  // });
  // selectedItemsArray.

  // console.log("Eliminar tareas:", selectedItemsArray);

  // Implementa la lógica de eliminación aquí usando selectedItemsArray
  // };

  const activeFormTask = () => {
    if (stateFormTask == false) setStateFormTask(true);
    else setStateFormTask(false);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Total Shipments</h5>
                    <CardTitle tag="h2">Performance</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data1",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("data1")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Accounts
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data2",
                        })}
                        onClick={() => setBgChartData("data2")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Purchases
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data3",
                        })}
                        onClick={() => setBgChartData("data3")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Sessions
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Total Shipments</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Daily Sales</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                  3,500€
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Completed Tasks</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> 12,100K
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="12">
            <Card id="tasks" className="card-tasks">
              <CardHeader>
                <h6 className="title d-inline">Tasks(5)</h6>
                <p className="card-category d-inline"> today</p>
                <UncontrolledDropdown style={{ display: "flex" }}>
                  {hasSelectedTasks && (
                    <p
                      onClick={handleDeleteClick}
                      style={{ color: "red", marginRight: "25px" }}
                    >
                      Delete
                    </p>
                  )}
                  <div style={{ display: "flex", width: "20px" }}>
                    <img
                      onClick={activeFormTask}
                      style={{ height: "20px" }}
                      src={addIcon}
                      alt="Icono personalizado"
                    />
                  </div>
                  <DropdownToggle
                    caret
                    className="btn-icon"
                    color="link"
                    data-toggle="dropdown"
                    type="button"
                  >
                    <i className="tim-icons icon-settings-gear-63" />
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Something else
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  {stateFormTask == false ? null : <FormTask />}
                  <Table>
                    <tbody>
                      {
                        /* ///////////////////////// AQUIIIIIIII MAPEAR */

                        tasks?.map((task) => {
                          return (
                            <tr key={task.id}>
                              <td>
                                <FormGroup check>
                                  <Label check>
                                    <Input
                                      defaultValue={task.done}
                                      type="checkbox"
                                      checked={selectedTasks[task.id] || false}
                                      onChange={() =>
                                        handleCheckboxChange(task.id)
                                      }
                                    />
                                    <span className="form-check-sign">
                                      <span className="check" />
                                    </span>
                                  </Label>
                                </FormGroup>
                              </td>
                              <td>
                                <p className="title">{task.title}</p>
                                <p className="text-muted">{task.description}</p>
                              </td>
                              <td className="td-actions text-right">
                                <Button
                                  color="link"
                                  id="tooltip636901683"
                                  title=""
                                  type="button"
                                  onClick={() =>
                                    navigateTo("/admin/task/" + task.id)
                                  }
                                >
                                  <i className="tim-icons icon-pencil" />
                                </Button>
                                <UncontrolledTooltip
                                  delay={0}
                                  target="tooltip636901683"
                                  placement="right"
                                >
                                  Edit Task
                                </UncontrolledTooltip>
                              </td>
                            </tr>
                          );
                        })
                      }
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Products</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Product</th>
                      <th>Supplier</th>
                      <th>Stock</th>
                      <th className="text-center">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products?.map((prod) => {
                      return (
                        <tr key={prod.id}>
                          <td>{prod.title}</td>
                          <td>{prod.supplierName}</td>
                          <td>{prod.stock}</td>
                          <td className="text-center">${prod.price}</td>
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

export default Dashboard;
