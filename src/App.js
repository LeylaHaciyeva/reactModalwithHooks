import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="app">
      <button className="open-btn" onClick={() => setOpen(true)}>Click me</button>
      {open ? <Modal open={open} setOpen={setOpen} /> : null}
    </div>
  );
}
export default App;
