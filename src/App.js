import React from "react";
import { isMobile } from "react-device-detect"; // https://www.npmjs.com/package/react-device-detect
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { DndProvider } from "react-dnd";
import Example from "./components/Example";

const App = () => {
  const backend = isMobile ? TouchBackend : HTML5Backend;

  React.useEffect(() => {
    window.scrollTo(2500, 2500);
  }, []);

  return (
    <div>
      <DndProvider backend={backend}>
        <Example />
      </DndProvider>
    </div>
  );
};

export default App;
