export const cartLoader = async () => {
  //const response = await fetch("/mockDBs/productsApiCopy.json");
  const response = await fetch("/mockDBs/productsApiCopyWithVariants.json");
  console.log("in response", response);
  const data = await response.json();
  return data;
};

// utils/loader.js
export const shippingLoader = async () => {
  const response = await fetch("/mockDBs/shipping.json");
  console.log("in response", response);
  const data = await response.json();
  return data;
};

// export const apiLoader = async () => {
//   const myHeaders = new Headers();
//   myHeaders.append("X-Token", "684s68f4s6e84s6e84fs68e4f8g46");
//   myHeaders.append(
//     "Cart",
//     "$2y$10$z1T683Io4eDo0XvaktXsjuX.Rar8BiOXh7ytQ8EJw8jurOd4xLeNK"
//   );
//   myHeaders.append(
//     "Cookie",
//     "PHPSESSID=367bb4878414501598aafd964f2bc0d6; _nss=1"
//   );

//   const requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//   };

//   const response = await fetch(
//     "https://e764-2001-1ae9-0-3d00-4bee-885-c3a7-9c21.ngrok-free.app/frontapi/v1/cart/products",
//     requestOptions
//   );

//   if (!response.ok) {
//     const errorText = await response.text();
//     console.error("Error response:", response.status, errorText);
//     throw new Error("Request failed with status " + response.status);
//   }

//   const data = await response.json();
//   return data;
// };

export const apiLoader = async () => {
  console.log("before");
  const response = await fetch(
    "https://crappie-enormous-noticeably.ngrok-free.app/frontapi/v1/cart/products",
    {
      method: "GET",
      headers: {
        "X-Token": "684s68f4s6e84s6e84fs68e4f8g46",
        //prettier-ignore
        "Cart": "$2y$10$5DEM8nkRegzpTjjW.sumAOKNLnO3vJlwcFXgmhsEjaMKYD1nz5Ktu",
        accept: "*/*",
      },
      mode: "cors",
    }
  );
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
