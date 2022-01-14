import { useState } from "react";
import { ELSE, IF } from "./lib";
import { ELSEIF } from "./lib/Controls";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <IF c={false}>
        <div>IF</div>
        <div>IF</div>
        <div>IF</div>
        <ELSEIF c={false} />
        <IF c={true}>
          <div>hello</div>
          <CustomComponent />
          <ELSEIF c={true} />
          <CustomComponent />
          <CustomComponent />
        </IF>
        <ELSEIF c={false} />
        <div>ELSE IF 2</div>
        <div>ELSE IF 2</div>
        <div>ELSE IF 2</div>
        <ELSE />
        <div>ELSE</div>
        <div>ELSE</div>
        <div>ELSE</div>
      </IF>
    </div>
  );
}

export default App;

const CustomComponent = () => {
  return <div>This is a custom CustomComponent</div>;
};
