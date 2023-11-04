import axios from "axios";

const $product = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const getProducts = async (): Promise<IProduct[]> => {
  const response = await $product.get("/products");
  return response.data;
};

export const getCategories = async (): Promise<string[]> => {
  const response = await $product.get("/products/categories");
  return response.data;
};

export const getProduct = async (id: number): Promise<IProduct> => {
  const response = await $product.get(`/products/${id}`);
  return response.data;
};

export const getProductOnCategory = async (
  category: string
): Promise<IProduct[]> => {
  // console.log(category)
  const res = await $product.get(`/products/category/${category}`);
  // console.log(res)
  return res?.data;
};
