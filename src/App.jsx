import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import FormAction from "./components/FormAction/FormAction";
import ControlledField from "./components/ControlledField/ControlledField";
import HookForm from "./components/ControlledField/HookForm/HookForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>explore react form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledField></ControlledField> */}
      <HookForm></HookForm>
    </>
  );
}

export default App;
