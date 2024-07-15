export const dbLoader = async () => {
  //const response = await fetch("/mockDBs/productsApiCopy.json");
  const response = await fetch("/mockDBs/productsApiCopyWithVariants.json");
  console.log("in response", response);
  const data = await response.json();
  return data;
};

export const shippingLoader = async () => {
  //const response = await fetch("/mockDBs/shipping.json");
  const response = await fetch("/mockDBs/shippingApiCopy.json");

  console.log("in response", response);
  const data = await response.json();
  return data;
};

//const baseUrl = "https://crappie-enormous-noticeably.ngrok-free.app";
const endPoint = "/api/v1/cart/products";
//const endPoint = "/api/v1/cart/products";
const cartKey = "$2y$10$5DEM8nkRegzpTjjW.sumAOKNLnO3vJlwcFXgmhsEjaMKYD1nz5Ktu";
//const cartKey = "$2y$10$6Xh/.SPE4jO.bmKlPb5UiOjiRtIkccnSV41V6i3C/NSmz.1xm8U8O";
//$2y$10$vTE940T2h2r2MmxxEjHuYuNEHF24PDOVs6RcfFiuRbpv.bKrxqcCq

export const apiLoader = async (cartKey) => {
  console.log("before");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${endPoint}`,
    {
      method: "GET",
      headers: {
        "X-Token": "684s68f4s6e84s6e84fs68e4f8g46",
        Cart: cartKey,
        accept: "*/*",
        Language: "cs",
        Currency: "CZK",
      },
      mode: "cors",
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Error response:", response.status, errorText);
    throw new Error("Request failed with status " + response.status);
  }

  const data = await response.json();
  return data;
};
// export const apiLoaderShippingUpdate = async ({ cartChanged, cart }) => {
//   if (cartChanged) {
//     try {
//       const response = await fetch(apiConfig.baseUrl + endPoint, {
//         method: "POST",
//         headers: {
//           "X-Token": "684s68f4s6e84s6e84fs68e4f8g46",
//           Cart: cartKey,
//           accept: "*/*",
//         },
//         mode: "cors",

//         body: JSON.stringify(cart),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to update shipping options");
//       }

//       const updatedShipping = await response.json();
//       return updatedShipping;
//     } catch (error) {
//       console.error("Error updating shipping options:", error);
//       throw error;
//     }
//   }
// };

export const apiLoaderUpdateCartItem = async (action, updatedItem, cartKey) => {
  let method;
  let body = JSON.stringify(updatedItem);

  switch (action) {
    case "UPDATE":
      method = "PUT";
      break;
    case "DELETE":
      method = "DELETE";
      body = JSON.stringify({ bpId: updatedItem.bpId });
      break;
    default:
      throw new Error("Unsupported action type");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${endPoint}`,
    {
      method: method,
      headers: {
        "X-Token": "684s68f4s6e84s6e84fs68e4f8g46",
        Cart: cartKey,
        accept: "*/*",
        Language: "cs",
        Currency: "CZK",
      },
      mode: "cors",
      body: body,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update cart item");
  }

  const data = await response.json();
  console.log("getting back this from the API ", data);
  return data;
};

export const checkDiscountCode = async (code, cartKey, method) => {
  console.log("in loader", code, cartKey, method);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/cart/voucher`,
    {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "X-Token": "684s68f4s6e84s6e84fs68e4f8g46",
        Cart: cartKey,
        accept: "*/*",
        Language: "cs",
        Currency: "CZK",
      },
      mode: "cors",
      body: JSON.stringify({ code }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Error response:", response.status, errorText);
    throw new Error("Request failed with status " + response.status);
  }

  const data = await response.json();
  return data;
};

export const sendUpdatedSurcharge = async (
  bpId,
  product_surcharge_product_id,
  checked,
  cartKey,
  prev_product_surcharge_product_id = null
) => {
  const body = JSON.stringify({
    bpId,
    product_surcharge_product_id,
    checked,
    prev_product_surcharge_product_id,
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/cart/surcharge`,
    {
      method: "POST",
      headers: {
        "X-Token": "684s68f4s6e84s6e84fs68e4f8g46",
        Cart: cartKey,
        accept: "*/*",
        Language: "cs",
        Currency: "CZK",
      },
      mode: "cors",
      body: body,
    }
  );
  console.log("inside body", body);

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Error response:", response.status, errorText);
    throw new Error("Request failed with status " + response.status);
  }

  const data = await response.json();
  return data;
};

export const updateShippingAndPriceMethods = async (
  package_id,
  delivery_payment_id
) => {
  const branch_key = "666"; //only temp solution

  const body = JSON.stringify({
    package_id,
    delivery_payment_id,
    branch_key,
  });

  const cartKey = localStorage.getItem("cart_key");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/cart/delivery-payments`,
    {
      method: "PUT",
      headers: {
        "X-Token": "684s68f4s6e84s6e84fs68e4f8g46",
        Cart: cartKey,
        accept: "*/*",
        Language: "cs",
        Currency: "CZK",
      },
      mode: "cors",
      body: body,
    }
  );
  console.log("inside body for shipping and price", body);

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Error response:", response.status, errorText);
    throw new Error("Request failed with status " + response.status);
  } else {
    console.log("shipping and payment set succesfully");
  }
};

export const sendOrder = async (personalData, cartKey) => {
  let body = JSON.stringify(personalData);
  //console.log("inside loader sending this", personalData, cartKey);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/cart/order`,
    {
      method: "POST",
      headers: {
        "X-Token": "684s68f4s6e84s6e84fs68e4f8g46",
        Cart: cartKey,
        accept: "*/*",
        Language: "cs",
        Currency: "CZK",
      },
      mode: "cors",
      body: body,
    }
  );
  console.log("inside body", body);

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Error response:", response.status, errorText);
    throw new Error("Request failed with status " + response.status);
  } else {
    console.log("Order sent succesfully");
  }
};
