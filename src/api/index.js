const BASE_URL = "http://localhost:3000";
export async function getProducts() {
  const res = await fetch(BASE_URL + "/products", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization:
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6ImFkcmlhbi50YWcudmlsbGVnYXNAZ21haWwuY29tIiwicm9sIjoiYWRtaW4ifSwiaWF0IjoxNjk2NDQxODE5fQ.ma-pHObRcFEWba8HlylrJqsKvuPpHYDUduEXrSZNcuI",
    },
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("dataaaaaa", json);
  return json;
}

export async function getDataUser() {
  const res = await fetch(BASE_URL + "/me", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization:
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6ImFkcmlhbi50YWcudmlsbGVnYXNAZ21haWwuY29tIiwicm9sIjoiYWRtaW4ifSwiaWF0IjoxNjk2NDQxODE5fQ.ma-pHObRcFEWba8HlylrJqsKvuPpHYDUduEXrSZNcuI",
    },
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("dataaaaaa", json);

  return json;
}

export async function updateDataUser(data) {
  const res = await fetch(BASE_URL + "/update-user", {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization:
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJlbWFpbCI6Im90cm9AZ21haWwuY29tIiwicm9sIjoiY2xpZW50In0sImlhdCI6MTY5NjQ0MTkzMn0.hFIKPh-BlwCwkLrVZVVv7ze1eOfYvdnVZbwv-4XvOW4",
    },
    body: JSON.stringify(data),
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("dataaaaaa", json);
  return json;
}

export async function createProduct(dataBody) {
  console.log("data body en api", dataBody);
  const res = await fetch(BASE_URL + "/create-product", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization:
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6ImFkcmlhbi50YWcudmlsbGVnYXNAZ21haWwuY29tIiwicm9sIjoiYWRtaW4ifSwiaWF0IjoxNjk2NDQxODE5fQ.ma-pHObRcFEWba8HlylrJqsKvuPpHYDUduEXrSZNcuI",
    },
    body: JSON.stringify(dataBody),
  });
  // console.log("response", res);
  const json = await res.json();
  console.log("dataaaaaa", json);

  return json;
}
