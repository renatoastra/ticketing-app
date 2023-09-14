import axios from "axios";
import { useState } from "react";
import { useRequestProps } from "./useRequest";

export const useRequest = ({
  url,
  method,
  body,
  onSuccess,
}: useRequestProps) => {
  const [errors, setErrors] = useState(null);
  const doRequest = async (props = {}) => {
    try {
      setErrors(null);
      const response = await axios[method](url, {
        ...body,
        ...props,
      });
      if (onSuccess) {
        onSuccess(response.data);
      }
      return response.data;
    } catch (e) {
      //@ts-ignore
      setErrors(
        <div className="flex flex-col gap-2 font-mono  ">
          <ul>
            {errors.map((err) => (
              <li
                key={err.message}
                className="text-red-500"
              >
                {err.message}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };
  return { doRequest, errors };
};
