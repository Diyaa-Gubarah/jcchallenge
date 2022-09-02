import { shallowEqual, useDispatch, useSelector } from "react-redux";

import React from "react";

// Use throughout your app instead of plain `useDispatch`
export const useAppDispatch = () => {
  return useDispatch();
};

// Use throughout your app instead of plain `useSelector`
export const useAppShallowSelector = (selector) => {
  return useSelector(selector, shallowEqual);
};

export const useFetch = (url, options) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url, options]);

  return { response, error, isLoading };
};

export const useForm = (type) => {
  const [value, setValue] = React.useState("");

  const onChange = ({ target }) => {
    const { value } = target;
    setValue(value);
  };

  const resetField = () => {
    setValue("");
  };

  return {
    type,
    value,
    onChange,
    resetField,
  };
};
