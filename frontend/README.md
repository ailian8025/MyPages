
## TODO
- mock API
- mini login form for submit


## Tips for dev
- Using the tailwind css
```html
<main className="flex items-center justify-center pt-16 pb-4">

    {resources.map(({ href, text, icon }) => (
                <li key={href}>
                  <a
                    className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                    {text}
                  </a>
                </li>
              ))}
```
- how to use react-state
```js
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
```

## QA
> React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object. Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. at renderElement (C:\Code\MyPages\my-pages\node_modules\react-dom\cjs\react-dom-server.node.development.js:5490:15) at


The Button component from Material UI must be imported correctly. Your current import is:
```js
import Button from "@mui/material/Button";
```
This is correct, but if the issue persists, try importing it like this:
```js
import { Button } from "@mui/material";
```