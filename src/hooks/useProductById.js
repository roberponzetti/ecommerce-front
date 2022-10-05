import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductByIdDataService } from "../firebase";
import { loadProductById } from "../redux/state/product";

export const useProductById = (id) => {

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const getProductById = useCallback(async () => {
    setIsLoading(true);
    const data = await getProductByIdDataService(id);
    setIsLoading(false);

    dispatch(loadProductById(data));

  }, [dispatch, id]);

  useEffect(() => {
    getProductById();
  }, [dispatch, getProductById]);

  return {
    isLoading
  }
};
