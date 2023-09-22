import axios from "axios";
import { useState } from "react";

interface useRequestProps {
  url: string;
  method: "get" | "post" | "put" | "delete";
  body: any;
  onSuccess: (data: any) => void;
}

interface ErrorType {
  message: string;
}
[];

export const useRequest = ({
  url,
  method,
  body,
  onSuccess,
}: useRequestProps) => {
  const [errors, setErrors] = useState<ErrorType[]>();
  const doRequest = async (props = {}) => {
    try {
      setErrors([]);
      const response = await axios[method](url, {
        ...body,
        ...props,
      });
      if (onSuccess) {
        onSuccess(response.data);
        setErrors([]);
      }
      return response.data;
    } catch (e) {
      //@ts-ignore
      setErrors(e.response.data.errors);
    }
  };
  return { doRequest, errors };
};
