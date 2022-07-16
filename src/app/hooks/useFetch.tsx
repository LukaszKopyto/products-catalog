import { useEffect, useReducer, useRef } from 'react';
import axios from 'axios';
import { ActionType, StateTypes } from './useFetch.types';

export const useFetch = (url: string) => {
  const cache: any = useRef({});

  const initialState: StateTypes = {
    status: 'IDLE',
    error: null,
    data: [],
  };

  const fetchReducer = (state: StateTypes, action: ActionType) => {
    switch (action.type) {
      case 'FETCHING':
        return { ...initialState, status: 'FETCHING' };
      case 'FETCHED':
        return { ...initialState, status: 'FETCHED', data: action.payload };
      case 'ERROR':
        console.error(action.payload);
        return { ...initialState, status: 'ERROR', error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      dispatch({ type: 'FETCHING' });
      if (cache.current[url]) {
        const cachedData = cache.current[url];
        dispatch({ type: 'FETCHED', payload: cachedData });
        return;
      }
      try {
        const response = await axios.get(url);
        cache.current[url] = response.data;
        dispatch({ type: 'FETCHED', payload: response.data });
      } catch (error) {
        if (error instanceof Error) {
          dispatch({ type: 'ERROR', payload: error });
        }
        dispatch({ type: 'ERROR', payload: String(error) });
      }
    };

    fetchData();
  }, [url]);

  const { status, data, error } = state;

  return { status, data, error };
};
