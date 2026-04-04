const PRODUCT_API = "http://localhost:9090/api/products";

export const getAllProducts = async () => {
  const response = await fetch(PRODUCT_API);
  return await response.json();
};
