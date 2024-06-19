export const cartLoader = async () => {
  //const response = await fetch("/mockDBs/productsApiCopy.json");
  const response = await fetch("/mockDBs/productsApiCopyWithVariants.json");
  console.log("in response", response);
  const data = await response.json();
  return data;
};

// utils/loader.js
export const shippingLoader = async () => {
  //const response = await fetch("/mockDBs/shipping.json");
  const response = await fetch("/mockDBs/shippingApiCopy.json");

  console.log("in response", response);
  const data = await response.json();
  return data;
};

export const apiLoader = async () => {
  console.log("before");
  const apiUrl = "https://test.zanapo.cz/frontapi/v1/cart/products";
  const cartKey =
    "$2y$10$6Xh/.SPE4jO.bmKlPb5UiOjiRtIkccnSV41V6i3C/NSmz.1xm8U8O";

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "X-Token": "684s68f4s6e84s6e84fs68e4f8g46",
      //prettier-ignore
      "Cart": cartKey,
      accept: "*/*",
    },
    mode: "cors",
  });
  // console.log("in apiloader", response.json());

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Error response:", response.status, errorText);
    throw new Error("Request failed with status " + response.status);
  }

  const data = await response.json();
  //console.log("in apiloader", response.json());
  return data;
};
