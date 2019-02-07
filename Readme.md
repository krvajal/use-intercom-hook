## useIntercom hook

![minified](https://badgen.net/bundlephobia/min/react)
![license](https://badgen.net/badge/license/MIT/blue)
A React Hook to add Intercom to your site

### Installation

```
$ npm install use-intercom-hook
```

or

```
$ yarn add use-intercom-hook
```

### Example Usage

```jsx
import React from "react";
import ReactDOM from "react-dom";
import useIntercom from "use-intercom-hook";

const appId = "INSERT_YOUR_APP_ID";
function App() {
  useIntercom(appId);
  return <div>Hello there</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

View on [CodeSandbox](https://codesandbox.io/s/50kln0z35l)

#### License

MIT
