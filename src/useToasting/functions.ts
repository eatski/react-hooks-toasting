import { ToastObject, ToastStatus } from "./interface";

export const removeByKey = (key: string) => <T>(
  toasts: ToastObject<T>[]
): ToastObject<T>[] => toasts.filter(e => e.key !== key);

export const changeStatusFn = (status: ToastStatus, key: string) => <T>(
  toasts: ToastObject<T>[]
) => toasts.map(e => (e.key === key ? { ...e, status } : e));

export type ToastObjectNoPosition<T> = Omit<ToastObject<T>, "position"> & {
  position: number | null;
};

export const updatePosition = <T>(
  toasts: ToastObjectNoPosition<T>[]
): ToastObject<T>[] => {
  interface Accumulator {
    result: ToastObject<T>[];
    numberOfExiting: number;
  }
  return toasts.reduce<Accumulator>(
    (prev, cur, index) => ({
      result: [
        ...prev.result,
        {
          ...cur,
          position:
            cur.status === "exiting" && cur.position !== null
              ? cur.position
              : index - prev.numberOfExiting
        }
      ],
      numberOfExiting: prev.numberOfExiting + (cur.status === "exiting" ? 1 : 0)
    }),
    {
      result: [],
      numberOfExiting: 0
    }
  ).result;
};
