import React from "react";
import { styled } from "linaria/react";
import { ToastComponent } from "react-hooks-toasting";

interface ColorfulProps {
  name: string;
  color: string;
}

const StyledDiv = styled.div`
  color: #333333;
  max-width: 330px;
  white-space: nowrap;
  position: absolute;
  border-radius: 5px;
  cursor: pointer;
  padding: 8px 10px;
  text-overflow: ellipsis;
  overflow: hidden;
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

const StyledSpan = styled.span`
  font-style: italic;
  font-weight: bolder;
`;

export const ColorfulToastItem: ToastComponent<ColorfulProps> = ({
  body,
  status,
  remove,
  position
}) => (
  <StyledDiv
    onClick={remove}
    className={status}
    style={{ top: position * 50, backgroundColor: body.color }}
  >
    Hello! My name is <StyledSpan>{body.name}</StyledSpan>
  </StyledDiv>
);
