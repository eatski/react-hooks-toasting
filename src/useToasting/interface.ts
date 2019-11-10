export type ToastStatus = "entered" | "exiting" | "entering";

export interface ToastObject<T> {
  body: T;
  key: string;
  status: ToastStatus;
  position: number;
}
