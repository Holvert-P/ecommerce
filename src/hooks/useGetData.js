import axios from "axios";
import { useEffect, useState } from "react";

const useGetData = (API) => {
  const [products, setProducts] = useState([""]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(API);
    setProducts(response.data);
  };

  return products;
};
export default useGetData;
