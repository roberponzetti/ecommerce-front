import { useState } from "react";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsDataService } from "../firebase";
import { loadProducts } from "../redux/state/product";

export const useProduct = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = useCallback(async () => {
    setIsLoading(true);
    const data = await getProductsDataService();
    dispatch(loadProducts(data));
    setIsLoading(false)
  }, [dispatch]);

  useEffect(() => {
    getProducts();
  }, [dispatch, getProducts]);

  return {
    isLoading
  }
};
