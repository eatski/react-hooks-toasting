/* eslint-disable react/jsx-key */
import { PropsToastReceives } from "./core";
import React from "react";

export type ToastComponent<T> = React.FC<PropsToastReceives<T>>;

export const renderToastArray = <T extends unknown>(
  Component: ToastComponent<T>
) => (propsArray: PropsToastReceives<T>[]): JSX.Element => (
  <>
    {propsArray.map(props => (
      <Component {...props}></Component>
    ))}
  </>
);
