import { configure } from '@storybook/react';
import "../static/main.scss";
import "ress";

// automatically import all files ending in *.stories.js
configure(require.context('../sample', true, /stories\.tsx$/), module);
