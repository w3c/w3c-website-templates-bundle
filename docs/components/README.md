# Components

Examples of the individual components, the building blocks of your web pages.

In the CSS architecture, there are two directories relating to components. The **core components** directory handles the minimum required styles for all components. They are compiled into `core.css`, which is served to all browsers (along with `print.css`). 

The **advanced components** directory handles the styles for those few components that are enhanced in some way with JavaScript. They are compiled into a separate `advanced.css`, which is only served to browsers that [‘cut the mustard’](../README.md#css-compilation).