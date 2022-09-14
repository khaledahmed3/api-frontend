import axios from "axios";
import { useState } from "react";

const useAxios = (query) => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (params) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8001/api/v1/${query}`,
        params
      );
      setResponse(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const postData = async (params) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `http://localhost:8001/api/v1/${query}`,
        params
      );
      setResponse(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchData: (params) => fetchData(params),
    postData: (params) => postData(params),
    response,
    loading,
    error,
  };
};

export default useAxios;
