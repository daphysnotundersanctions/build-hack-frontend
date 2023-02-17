import React from "react";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import './index.css'

function App() {
  const { editor, onReady } = useFabricJSEditor();
  const onAddRectangle = () => {
        editor.addRectangle();
  };
  const addNineRectangels = () => {
    [...Array(9).keys()].forEach(() => {
      onAddRectangle()
    })
    }
  return (
    <div className="App">
     <button onClick={addNineRectangels}>123</button>
     <FabricJSCanvas className="sample-canvas" onReady={onReady} />
    </div>
  )
}


export default App
