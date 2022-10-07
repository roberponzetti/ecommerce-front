import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductByIdDataService } from "../firebase";
import { loadProductById } from "../redux/state/product";

export const useProductById = (id) => {

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const getProductById = useCallback(async () => {

    setIsLoading(true);
    const { data, error } = await getProductByIdDataService(id);

    dispatch(loadProductById(data));
    setIsLoading(false)
  }, [dispatch, id]);

  useEffect(() => {
    getProductById();
  }, [dispatch, getProductById]);

  return {
    isLoading
  }
};
