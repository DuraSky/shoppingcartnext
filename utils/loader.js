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

//const baseUrl = "https://crappie-enormous-noticeably.ngrok-free.app";
const baseUrl = "http://878-api-pro-kosik-11960.test.zanapo.cz";
const endPoint = "/frontapi/v1/cart/products";
//const cartKey = "$2y$10$5DEM8nkRegzpTjjW.sumAOKNLnO3vJlwcFXgmhsEjaMKYD1nz5Ktu";
const cartKey = "$2y$10$6Xh/.SPE4jO.bmKlPb5UiOjiRtIkccnSV41V6i3C/NSmz.1xm8U8O";

export const apiLoader = async () => {
  console.log("before");

  const response = await fetch(baseUrl + endPoint, {
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

export const apiLoaderShippingUpdate = async ({ cartChanged, cart }) => {
  if (cartChanged) {
    try {
      const response = await fetch(baseUrl + endPoint, {
        method: "POST",
        headers: {
          "X-Token": "684s68f4s6e84s6e84fs68e4f8g46",
          Cart: cartKey,
          accept: "*/*",
        },
        mode: "cors",

        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Failed to update shipping options");
      }

      const updatedShipping = await response.json();
      return updatedShipping;
    } catch (error) {
      console.error("Error updating shipping options:", error);
      throw error;
    }
  }
};

export const apiLoaderUpdateCartItem = async (updatedItem) => {
  const response = await fetch(baseUrl + endPoint, {
    method: "PUT",
    headers: {
      "X-Token": "684s68f4s6e84s6e84fs68e4f8g46",
      Cart: cartKey,
      accept: "*/*",
    },
    mode: "cors",

    body: JSON.stringify(updatedItem),
  });

  if (!response.ok) {
    throw new Error("Failed to update cart item");
  }

  const data = await response.json();
  console.log("getting back this from the API ", data);
  return data;
};
