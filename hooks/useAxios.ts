import { useEffect, useState } from "react";
import axios from "axios";

interface DataI {
  name: string;
  salary: string;
  age: number;
  id: number;
}

interface AxiosI {
  url: string;
  data: DataI;
}

const useAxios = () => {
  const BASE_URL = "https://dummy.restapiexample.com/";

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [response, setResponse] = useState<object | null>(null);

  const postData = async (url: string, data: DataI) => {
    try {
      setLoading(true);
      const res = await axios.post(`${BASE_URL}${url}`, data);
      setResponse(res.data);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, response, postData };
};

export default useAxios;
