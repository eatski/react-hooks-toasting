import React from "react";
import { ToastComponent } from "../src/useToasting";

export const SimpleToastItem: ToastComponent = ({
  body,
  status,
  remove,
  position
}) => (
  <div
    onClick={remove}
    className={`toast simple ${status}`}
    style={{ top: position * 50 }}
  >
    {body}
  </div>
);

interface ColorfulProps {
  name: string;
  color: string;
}

export const ColorfulToastItem: ToastComponent<ColorfulProps> = ({
  body,
  status,
  remove,
  position
}) => (
  <div
    onClick={remove}
    className={`toast colorful container ${status}`}
    style={{ top: position * 50, backgroundColor: body.color }}
  >
    Unread message from <span className="name">{body.name}</span>
  </div>
);
