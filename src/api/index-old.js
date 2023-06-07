const BASE_URL = "https://www.vetandtech.com/api/";
// const BASE_URL = "https://dev.gervetusa.com/api/";
const IMAGE_BASE_URL = "https://www.vetandtech.com/";
// const BASE_URL = "http://127.0.0.1:8000/api/";
// const IMAGE_BASE_URL = "http://127.0.0.1:8000/";

//import { AsyncStorage } from "react-native";
import axios from "axios";
import { useSelector } from "react-redux";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});
// ---------------------------
async function getUser() {
  let value = await AsyncStorage.getItem("USER");
  if (value) {
    let data = await JSON.parse(value);
    console.log("user", data);
    return data;
  } else {
    console.log("null");
    return null;
  }
}
// -----------------------------
const getHomeData = async () => {
  let result = await instance.get(`home`);
  console.log(result);
  return result;
};

const getCategoryList = async (text) => {
  let result = await instance.get(`search?term=${text}`);
  return result;
};
const getDashboard = async (text) => {
  try {
    let result = await instance.get(`home`);
    return result;
  } catch (e) {
    return e;
  }
};
const getLeftMenu = async () => {
  try {
    let result = await instance.get("left-menu-categories");
    return result;
  } catch (e) {
    return e;
  }
};
const getDataSlug = async (slug) => {
  try {
    let result = await instance.get(slug);
    return result;
  } catch (e) {
    return e;
  }
};

const getHotSaleItems = async () => {
  try {
    let result = instance.get(`products/hot-selling`);
    return result;
  } catch (err) {
    return err;
  }
};

const SignupUser = async (myData) => {
  var formdata = new FormData();
  formdata.append("first_name", myData.first_name);
  formdata.append("last_name", myData.last_name);
  formdata.append("email", myData.email);
  formdata.append("password", myData.password);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };
  try {
    let result = await fetch(BASE_URL + "register", requestOptions);
    let data = await getPlanData(result);
    return data;
  } catch (e) {
    return e;
  }
};
const loginUser = async (myData) => {
  var formdata = new FormData();
  formdata.append("email", myData.email);
  formdata.append("password", myData.password);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };
  try {
    let result = await fetch(BASE_URL + "login", requestOptions);
    let data = await getPlanData(result);
    return data;
  } catch (e) {
    return e;
  }
};

const MyAddresses = async (userId) => {
  let token = await getUser();
  var axios = require("axios");
  var config = {
    method: "get",
    url: `${BASE_URL}dashboard/addresses?customer[id]=${token.user.id}`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token.success.token}`,
    },
  };

  try {
    let data = await axios(config);
    return data;
  } catch (e) {
    return e;
  }
};
const MyOrders = async (userId) => {
  let token = await getUser();

  var axios = require("axios");
  var config = {
    method: "get",
    url: `${BASE_URL}dashboard/orders?customer[id]=${token.user.id}`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token.success.token}`,
    },
  };

  try {
    let data = await axios(config);
    return data;
  } catch (e) {
    return e;
  }
};
const getCart = async (userId) => {
  let token = await getUser();
  var data = JSON.stringify({
    customer: {
      id: token.user.id,
    },
  });
  var config = {
    method: "post",
    url: BASE_URL + "cart",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token.success.token}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    let data = await axios(config);
    return data;
  } catch (e) {
    return e;
  }
};
const onAddToCart = async (data) => {
  let token = await getUser();
  var data = JSON.stringify(data);
  var config = {
    method: "post",
    url: BASE_URL + "add-cart",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token.success.token}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    let data = await axios(config);
    return data;
  } catch (e) {
    return e;
  }
};
const onUpdateCart = async (data) => {
  let token = await getUser();
  var data = JSON.stringify(data);
  var config = {
    method: "post",
    url: BASE_URL + "update-cart",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token.success.token}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    let data = await axios(config);
    return data;
  } catch (e) {
    return e;
  }
};
const deleteItem = async (data) => {
  let token = await getUser();
  var data = JSON.stringify(data);
  var config = {
    method: "post",
    url: BASE_URL + "delete-cart",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token.success.token}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    let data = await axios(config);
    return data;
  } catch (e) {
    return e;
  }
};
const deleteAddress = async (id) => {
  let token = await getUser();
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", `Bearer ${token.success.token}`);

  var formdata = new FormData();
  formdata.append("customer[id]", token.user.id);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  try {
    let reslut = await fetch(
      `${BASE_URL}dashboard/del/address/${id}`,
      requestOptions
    );
    let data = await reslut.text();
    let res = await JSON.parse(data);
    return res;
  } catch (e) {
    return e;
  }
};
const editAddress = async (d) => {
  let token = await getUser();

  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", `Bearer ${token.success.token}`);

  var formdata = new FormData();

  formdata.append("Address[id]", d.adderssId);
  formdata.append("customer[id]", token.user.id);
  formdata.append("first_name", d.first_name);
  formdata.append("last_name", d.last_name);
  formdata.append("company", d.company);
  formdata.append("address1", d.address1);
  formdata.append("address2", d.address2);
  formdata.append("city", d.city);
  formdata.append("country", d.country.value);
  formdata.append("state", d.state.value);
  formdata.append("zip", d.zip);
  formdata.append("phone", d.phone);
  formdata.append("vat", d.vat);
  formdata.append("default_billing", d.defaultBiling.value);
  formdata.append("default_shipping", d.defaultShip.value);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  try {
    let result = await fetch(`${BASE_URL}/dashboard/addresses`, requestOptions);
    let data = await result.text();
    let myData = await JSON.parse(data);
    return myData;
  } catch (e) {
    return e;
  }
};
const updateAddress = async (d) => {
  let token = await getUser();
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", "Bearer " + token.success.token);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    customer: {
      id: token.user.id,
    },
    first_name: d.firstName,
    last_name: d.lastName,
    company: d.company,
    address1: d.address1,
    address2: d.address2,
    city: d.city,
    country: d.country,
    state: d.state,
    zip: d.zip,
    phone: d.phone,
    vat: d.vat,
    default_billing: d.defaultBiling.value,
    default_shipping: d.defaultShip.value,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  try {
    let result = await fetch(BASE_URL + "dashboard/addresses", requestOptions);
    let data = await result.text();
    let myData = await JSON.parse(data);
    return myData;
  } catch (e) {
    return e;
  }
};

const AddCoupon = async (coupon) => {
  let token = await getUser();
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", `Bearer ${token.success.token}`);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    customer: {
      id: token.user.id,
    },
    coupon_code: coupon,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  try {
    let result = await fetch(`${BASE_URL}apply-coupon`, requestOptions);
    let data = await result.text();
    let myData = await JSON.parse(data);
    return myData;
  } catch (e) {
    return e;
  }
};
async function getShippingRates(data) {
  const { address, cart, coupon, total } = data;
  let token = await getUser();
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token.success.token}`);
  myHeaders.append("Accept", "application/json");

  var formdata = new FormData();
  cart.map((i) => formdata.append("qty[]", i.quantity));
  cart.map((i) => formdata.append("product_id[]", i.id));
  formdata.append("free_shipping_coupon", coupon);
  formdata.append("sub_total", `${total}`);
  formdata.append("first_name", token.user.first_name);
  formdata.append("last_name", token.user.last_name);
  formdata.append("phone", token.user.phone);
  formdata.append("email", token.user.email);
  formdata.append("address1", token.user.address1);
  formdata.append("address2", token.user.address2);
  formdata.append("country", address.country);
  formdata.append("state", address.state);
  formdata.append("city", address.city);
  formdata.append("zip", address.zip);
  formdata.append("notes", "Test");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };
  try {
    let result = await fetch(`${BASE_URL}get-shipping-rates`, requestOptions);
    let data = await result.text();
    let myData = await JSON.parse(data);
    return myData;
  } catch (e) {
    return e;
  }
  // fetch("https://dev.gervetusa.com/api/get-shipping-rates", requestOptions)
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log("error", error));
}
const SaveOrder = async (data) => {
  let token = await getUser();
  let d = { ...data, customer_id: token.user.id, email: token.user.email };
  var data = JSON.stringify(d);

  var config = {
    method: "post",
    url: `${BASE_URL}save-order`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token.success.token}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    let data = await axios(config);
    return data;
  } catch (e) {
    return e;
  }
};
const getOrderHistory = async () => {
  let { user, success } = await getUser();
  var data = "";

  var config = {
    method: "get",
    url: `${BASE_URL}dashboard/orders?customer[id]=${user.id}`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${success.token}`,
    },
    data: data,
  };
  try {
    let data = await axios(config);
    return data;
  } catch (e) {
    return e;
  }
};
const getPlanData = async (raw) => {
  let data = await raw.text();
  let planData = await JSON.parse(data);
  return planData;
};
export {
  getCategoryList,
  getDashboard,
  getLeftMenu,
  getDataSlug,
  SignupUser,
  loginUser,
  MyAddresses,
  getCart,
  getUser,
  onAddToCart,
  onUpdateCart,
  deleteItem,
  MyOrders,
  updateAddress,
  deleteAddress,
  editAddress,
  AddCoupon,
  getShippingRates,
  SaveOrder,
  getOrderHistory,
  getHomeData,
  getHotSaleItems,
  BASE_URL,
  IMAGE_BASE_URL,
};
