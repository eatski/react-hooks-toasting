# React Hooks Toasting

React Hooks Toasting is a library that uses React Hooks to control animation in toast display.

## DEMO

[Sample APP](https://sample-app-mahimahi.web.app/)

## Getting Started

### Prerequisites

To use this library, you need to install a version of React that can use Hooks.

```
npm i react@^16.8.0
```

### Installing

```
npm i react-hooks-toasting
```

## Usage
```tsx
import { SimpleToastItem } from "./components";

const SimpleMessage = () => {
  const { renderToast, dispatch } = useToasting(SimpleToastItem, {
    exitingMS: 1000,
    displayMS: 30000
  });
  /* Call 'dispatch' to show toast. */
  const toasting = () => dispatch("Toasting!! @" + new Date().toISOString());
  return (
    <div>
      <button className="add-btn" onClick={toasting}>
        Toasting!!
      </button>
      <div className="toast-wrapper">
        {renderToast() /* 'renderToast' is Function to render toast array. */}
      </div>
    </div>
  );
};
```

```tsx
// components.tsx
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
```


