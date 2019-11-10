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
