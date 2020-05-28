import { useRef } from "react";

export interface KeyGenerator {
  (): string;
}

export const useNumberKeyGenerator = (): KeyGenerator => {
  const key = useRef(0);
  return () => {
    const { current } = key;
    key.current = current + 1;
    return current.toString();
  };
};

export const sleep = (ms: number) =>
  new Promise<void>(res => {
    setTimeout(() => res(), ms);
  });

interface Listener<T> {
  (arg: T): void;
}
export const createDispatcher = <T>() => {
  const map = new Map<symbol, Listener<T>>();
  return {
    listen(listener: Listener<T>) {
      const key = Symbol();
      map.set(Symbol(), listener);
      return () => {
        map.delete(key);
      };
    },
    dispatch(arg: T) {
      map.forEach(listener => {
        listener(arg);
      });
    }
  };
};
