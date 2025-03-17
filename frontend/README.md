
> React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object. Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. at renderElement (C:\Code\MyPages\my-pages\node_modules\react-dom\cjs\react-dom-server.node.development.js:5490:15) at


The Button component from Material UI must be imported correctly. Your current import is:
```js
import Button from "@mui/material/Button";
```
This is correct, but if the issue persists, try importing it like this:
```js
import { Button } from "@mui/material";
```