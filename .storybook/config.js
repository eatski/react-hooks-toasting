import { configure } from '@storybook/react';
import "../static/main.css"

// automatically import all files ending in *.stories.js
configure(require.context('../sample', true, /\.tsx$/), module);
