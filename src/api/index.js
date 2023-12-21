import { getToken } from "functions";
import { savedToken } from "functions";

// const BASE_URL = "http://localhost:3000";
const BASE_URL = "https://dashboard-back-0dzj.onrender.com";

const token = getToken();

export async function signup(data) {
  const res = await fetch(BASE_URL + "/signup", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  // console.log("response", res);
  const json = await res.json();

  return json;
}
export async function signin(email, code) {
  const res = await fetch(BASE_URL + "/signin", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, code }),
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("logieo", json);
  if (json.token) {
    await savedToken(json.token);

    const user = await getDataUser(json.token);

    console.log("see data user");

    return user;
  }
  return json;
}

// continuar con el endpoint de arriba kigun
export async function getProducts(token) {
  const res = await fetch(BASE_URL + "/products", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("a ver si estan los products", json);
  return json;
}

// SECTION SUPPLIER

export async function getSuppliers(token) {
  const res = await fetch(BASE_URL + "/suppliers", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("a ver si estan los suppliers", json);
  return json;
}

export async function getSupplierId(token, id) {
  const res = await fetch(BASE_URL + "/supplier/" + id, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("product", json);

  return json;
}

export async function createSupplier(token, dataBody) {
  console.log("data body en api", dataBody);
  const res = await fetch(BASE_URL + "/create-supplier", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify(dataBody),
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("dataaaaaa", json);

  return json;
}

export async function updateSupplier(token, id, dataBody) {
  console.log("data body en api", dataBody);
  const res = await fetch(BASE_URL + "/update-supplier/" + id, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify(dataBody),
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("dataaaaaa", json);

  return json;
}

////////////////////////////////////////////////////////////////////////
export async function getDataUser(token) {
  const res = await fetch(BASE_URL + "/me", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("dataaaaaa", json);

  return json;
}

export async function updateDataUser(token, data) {
  const res = await fetch(BASE_URL + "/update-user", {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("dataaaaaa", json);
  return json;
}

export async function createProduct(token, dataBody) {
  console.log("data body en api", dataBody);
  const res = await fetch(BASE_URL + "/create-product", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify(dataBody),
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("dataaaaaa", json);

  return json;
}
export async function getProductId(token, id) {
  const res = await fetch(BASE_URL + "/product/" + id, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("product", json);

  return json;
}
export async function updateProduct(token, id, dataBody) {
  console.log("data body en api", dataBody);
  const res = await fetch(BASE_URL + "/update-product/" + id, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify(dataBody),
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("dataaaaaa", json);

  return json;
}

export async function getSalesPerMonth(token) {
  const res = await fetch(BASE_URL + "/sales", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("dataaaaaa", json);

  return json;
}

export async function getSalesPerDay(token) {
  const res = await fetch(BASE_URL + "/sales-per-day", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("dataaaaaa per dayyy api", json);

  return json;
}

//////// TASKS  ////////

export async function getTasks(token) {
  const res = await fetch(BASE_URL + "/tasks", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("dataaaaaa per dayyy api", json);

  return json;
}
export async function createTask(token, dataBody) {
  console.log("data body en api", dataBody);
  const res = await fetch(BASE_URL + "/create-task", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify(dataBody),
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("dataaaaaa", json);

  return json;
}

export async function getTaskId(token, id) {
  const res = await fetch(BASE_URL + "/task/" + id, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("product", json);

  return json;
}

export async function updateTask(token, id, dataBody) {
  const res = await fetch(BASE_URL + "/update-task/" + id, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify(dataBody),
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("dataaaaaa", json);

  return json;
}

export async function deleteTaskId(token, id) {
  const res = await fetch(BASE_URL + "/delete-task/" + id, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("product", json);

  return json;
}
export async function deleteManyTask(token, arrayIds) {
  const res = await fetch(BASE_URL + "/delete-tasks/", {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify({ arrayIds }),
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("product", json);

  return json;
}

export async function getNotifications(token) {
  const res = await fetch(BASE_URL + "/notifications", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("notifications", json);

  return json;
}
