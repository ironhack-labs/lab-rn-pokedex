import {AxiosError, AxiosRequestConfig, AxiosResponseTransformer} from 'axios';
import {pokemonAPI} from '../../api';
import {useEffect, useState} from 'react';

type UseFetchProps<T> = AxiosRequestConfig<T> & {
  onSuccess?: (response: T) => void;
};

export const useFetch = <ResponseData = any>({
  onSuccess,
  ...requestConfig
}: UseFetchProps<ResponseData>) => {
  const [state, setState] = useState<{
    loading: boolean;
    data: ResponseData | null;
    error: string | null;
  }>({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const transformResponse = (
          [
            ...(pokemonAPI.defaults
              .transformResponse as AxiosResponseTransformer[]),
            requestConfig?.transformResponse,
          ] as AxiosResponseTransformer[]
        ).filter(value => !!value);

        const response = await pokemonAPI.request({
          ...requestConfig,
          transformResponse,
        });
        onSuccess?.(response.data);
        setState(prevState => ({
          ...prevState,
          data: response.data,
          loading: false,
        }));
      } catch (err) {
        let message = 'something gone wrong';

        if (err instanceof Error || err instanceof AxiosError) {
          message = err.message;
        }

        setState(prevState => ({
          ...prevState,
          error: message,
          loading: false,
        }));
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
};
