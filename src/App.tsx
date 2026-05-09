import Keyboard from "./components/Keyboard";
import { useState } from "react";
import TextArea from "./components/TextArea";
import NavBar from "./components/NavBar";
const App = () => {
  const [text, setText] = useState<string>("");

  return (
    <div className="flex flex-col overflow-x-hidden bg-[#D2CBDB] gap-5 justify-center items-center h-screen overflow-y-hidden">
      <NavBar/>
      <TextArea text={text} />
      <Keyboard setText={setText} />
    </div>
  );
};

export default App;
