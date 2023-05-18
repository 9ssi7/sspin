# Super SPIN

Context-friendly, extensible and flex spin component for React

## Installation

```bash
npm install sspin
```

or

```bash
yarn add sspin
```

## Examples

### Basic Usage

```jsx
import React from 'react';
import Spin from 'sspin';
import "sspin/dist/index.css";

const App = () => {
  return (
    <div>
      <Spin.WithContext value={true}>
        my content
        </Spin.WithContext>
    </div>
  );
};

export default App;
```

### With Use Context

```jsx
// parent.jsx
import React from 'react';
import Spin from 'sspin';
import "sspin/dist/index.css";

const Parent = () => {
  return (
    <div>
      <Spin.WithContext value={true}>
        <Child />
      </Spin.WithContext>
    </div>
  );
};

export default Parent;

// child.jsx
import React from 'react';
import { SpinContext } from 'sspin';

const Child = () => {
  const { setSpin } = React.useContext(SpinContext);

  React.useEffect(() => {
    setTimeout(() => {
      setSpin(false); // hide spin from parent
    }, 1000);
  }, [])

  return (
    <div>
        hello world!
    </div>
  );
};
```

### Custom Spinner

```jsx
import React from 'react';
import Spin from 'sspin';
import "sspin/dist/index.css";

const App = () => {
  return (
    <div>
      <Spin.WithContext value={true} spinner={<span>my spinner</span>}>
        content
      </Spin.WithContext>
    </div>
  );
};

export default App;
```

or

```jsx
import React from 'react';
import Spin from 'sspin';
import "sspin/dist/index.css";

const App = () => {
  return (
    <div>
      <Spin loading={true} spinner={<span>my spinner</span>}>
        content
      </Spin.WithContext>
    </div>
  );
};

export default App;
```

### Customize The Style

```css
/* index.css */
.sspin {
    --color-primary: #1890ff;
}
```
