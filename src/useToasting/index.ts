import {
  useToastingInner,
  ToastingConfig,
  PropsToastReceives as _PropsToastReceives
} from "./core";
import { renderToastArray, ToastComponent as _ToastComponent } from "./render";
import { createDispatcher } from "../util";
import { useEffect } from "react";

export interface UseToastingObject<T = string> {
  renderToast(): JSX.Element;
  dispatch(body: T): void;
}

export interface ToastingContainer<T = string> {
  Container: React.FC;
  dispatch(body: T): void;
}

export type ToastComponent<T = string> = _ToastComponent<T>;

export type PropsToastReceives<T = string> = _PropsToastReceives<T>;

export const useToasting = <T = string>(
  render: ToastComponent<T>,
  config: ToastingConfig
): UseToastingObject<T> => {
  const _render = renderToastArray(render);
  const { dispatch, toastPropsArray } = useToastingInner<T>(config);
  return {
    renderToast() {
      return _render(toastPropsArray);
    },
    dispatch
  };
};

export const createToastingContainer = <T = string>(
  Component: ToastComponent<T>,
  config: ToastingConfig
): ToastingContainer<T> => {
  const dispatcher = createDispatcher<T>();
  const render = renderToastArray(Component);
  const Container = () => {
    const { dispatch, toastPropsArray } = useToastingInner<T>(config);
    useEffect(() => dispatcher.listen(arg => dispatch(arg)), []);
    return render(toastPropsArray);
  };

  return {
    Container,
    dispatch(arg) {
      dispatcher.dispatch(arg);
    }
  };
};
