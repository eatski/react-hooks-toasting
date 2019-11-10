import { useState } from "react";
import { useNumberKeyGenerator, sleep } from "../util";
import {
  removeByKey,
  ToastObjectNoPosition,
  changeStatusFn,
  updatePosition
} from "./functions";
import { ToastObject, ToastStatus } from "./interface";

export type PropsToastReceives<T> = {
  remove(): void;
} & ToastObject<T>;

export interface ToastingInner<T> {
  dispatch(body: T): void;
  toastPropsArray: PropsToastReceives<T>[];
}

export interface ToastingConfig {
  exitingMS: number;
  displayMS: number;
}

const TINY_MS = 15;

export type ToastItemComponent<T> = React.FC<PropsToastReceives<T>>;

export const useToastingInner = <T = string>({
  exitingMS,
  displayMS
}: ToastingConfig): ToastingInner<T> => {
  const [toastObjects, setToastObjects] = useState<ToastObject<T>[]>([]);
  const getKey = useNumberKeyGenerator();
  const changeStatus = (key: string, status: ToastStatus): void =>
    setToastObjects(prev => updatePosition(changeStatusFn(status, key)(prev)));
  const removeToast = async (key: string) => {
    changeStatus(key, "exiting");
    await sleep(exitingMS);
    setToastObjects(removeByKey(key));
  };
  const createNew = (body: T): ToastObjectNoPosition<T> => {
    const key = "react-toasting-" + getKey();
    return {
      body,
      status: "entering",
      key,
      position: null
    };
  };

  const addToast = async (body: T) => {
    const created = createNew(body);
    setToastObjects(prev => updatePosition([created, ...prev]));
    await sleep(TINY_MS);
    changeStatus(created.key, "entered");
    await sleep(displayMS);
    removeToast(created.key);
  };
  return {
    toastPropsArray: toastObjects.map(e => ({
      ...e,
      remove: () => removeToast(e.key)
    })),
    dispatch(body) {
      addToast(body);
    }
  };
};
