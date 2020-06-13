import React from "react";
import { styled } from "linaria/react";
import { ToastComponent } from "react-hooks-toasting";

const StyledDiv = styled.div`
  /** positioning */
  position: fixed;
  margin-top: 30px;
  right: 0px;
  /** animation */
  transition: transform 500ms, opacity 1000ms, top 500ms;
  &.entering,
  &.exiting {
    transform: translateX(400px);
    opacity: 0;
  }
  &.entered {
    transform: translateX(-2vw);
    opacity: 1;
  }
  /** others */
  color: #333333;
  max-width: 330px;
  white-space: nowrap;
  border-radius: 5px;
  cursor: pointer;
  padding: 8px 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  background-color: #66ff99;
`;

export const SimpleToastItem: ToastComponent = ({
  body,
  status,
  remove,
  position
}) => (
  <StyledDiv onClick={remove} className={status} style={{ top: position * 50 }}>
    {body}
  </StyledDiv>
);
