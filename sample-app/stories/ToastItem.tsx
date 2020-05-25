import React from "react";
import { styled } from "linaria/react";
import { ToastComponent } from "react-hooks-toasting";

const ToastSimpleDiv = styled.div`
  color: #333333;
  max-width: 330px;
  white-space: nowrap;
  position: absolute;
  border-radius: 5px;
  cursor: pointer;
  padding: 8px 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  background-color: #66ff99;
  transition: right 500ms linear, opacity 1000ms, top 500ms;
  &.entering {
    right: -300px;
    opacity: 0;
  }
  &.exiting {
    right: -300px;
    opacity: 0;
  }
  &.entered {
    right: 0;
    opacity: 1;
  }
`;

export const SimpleToastItem: ToastComponent = ({
  body,
  status,
  remove,
  position
}) => (
  <ToastSimpleDiv
    onClick={remove}
    className={status}
    style={{ top: position * 50 }}
  >
    {body}
  </ToastSimpleDiv>
);

interface ColorfulProps {
  name: string;
  color: string;
}

// export const ColorfulToastItem: ToastComponent<ColorfulProps> = ({
//   body,
//   status,
//   remove,
//   position
// }) => (
//   <div
//     onClick={remove}
//     className={`toast colorful ${status}`}
//     style={{ top: position * 50, backgroundColor: body.color }}
//   >
//     Hello! My name is <span className="name">{body.name}</span>
//   </div>
// );
