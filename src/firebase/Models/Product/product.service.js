import { Product } from "./product";

const NAME_COLLECTION = "product"

export const getProductsDataService = async () => {
    try {
      const product = new Product(NAME_COLLECTION);
      return await product.getProducts();
    } catch (error) {
      console.error(error.message);
    }
};

export const getProductByIdDataService = async (id) => {
    try {
      const product = new Product(NAME_COLLECTION);
      return await product.getProductById(id);
    } catch (error) {
      console.error(error.message);
    }
};