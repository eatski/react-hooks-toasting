import {
  useToastingInner,
  ToastingConfig,
  PropsToastReceives as _PropsToastReceives
} from "./core";
import { renderToastArray, ToastComponent as _ToastComponent } from "./render";

export interface Toasting<T = string> {
  renderToast(): JSX.Element;
  dispatch(body: T): void;
}

export type ToastComponent<T = string> = _ToastComponent<T>;

export type PropsToastReceives<T = string> = _PropsToastReceives<T>;

export const useToasting = <T = string>(
  render: ToastComponent<T>,
  config: ToastingConfig
): Toasting<T> => {
  const _render = renderToastArray(render);
  const { dispatch, toastPropsArray } = useToastingInner<T>(config);
  return {
    renderToast() {
      return _render(toastPropsArray);
    },
    dispatch
  };
};
