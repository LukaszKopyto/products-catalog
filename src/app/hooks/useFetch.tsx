import { useEffect, useReducer, useRef } from 'react';
import axios from 'axios';
import { ActionType, StateTypes } from './useFetch.types';
import { Status } from './useFetch.enum';

export const useFetch = (url: string) => {
  const cache: any = useRef({});

  const initialState: StateTypes = {
    status: Status.idle,
    error: null,
    data: [],
  };

  const fetchReducer = (state: StateTypes, action: ActionType) => {
    switch (action.type) {
      case Status.fetching:
        return { ...initialState, status: Status.fetching };
      case Status.fetched:
        return {
          ...initialState,
          status: Status.fetched,
          data: action.payload,
        };
      case Status.error:
        console.error(action.payload);
        return { ...initialState, status: Status.error, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      dispatch({ type: Status.fetching });
      if (cache.current[url]) {
        const cachedData = cache.current[url];
        dispatch({ type: Status.fetched, payload: cachedData });
        return;
      }
      try {
        const response = await axios.get(url);
        cache.current[url] = response.data;
        dispatch({ type: Status.fetched, payload: response.data });
      } catch (error) {
        if (error instanceof Error) {
          dispatch({ type: Status.error, payload: error });
        }
        dispatch({ type: Status.error, payload: String(error) });
      }
    };

    fetchData();
  }, [url]);

  const { status, data, error } = state;

  return { status, data, error };
};
