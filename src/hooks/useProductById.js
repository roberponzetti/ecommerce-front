import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductByIdDataService } from "../firebase";
import { loadProductById } from "../redux/state/product";

export const useProductById = (id) => {
  const dispatch = useDispatch();

  const getProductById = useCallback(async () => {
    const data = await getProductByIdDataService(id);
    dispatch(loadProductById(data));
  }, [dispatch, id]);

  useEffect(() => {
    getProductById();
  }, [dispatch, getProductById]);
};
