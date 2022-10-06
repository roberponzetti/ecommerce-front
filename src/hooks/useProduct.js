import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsDataService } from "../firebase";
import { loadProducts } from "../redux/state/product";

export const useProduct = () => {
  const dispatch = useDispatch();

  const getProducts = useCallback(async () => {
    const data = await getProductsDataService();

    dispatch(loadProducts(data));
  }, [dispatch]);

  useEffect(() => {
    getProducts();
  }, [dispatch, getProducts]);
};
