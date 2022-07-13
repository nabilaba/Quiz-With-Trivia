import { Routes, Route } from "react-router-dom";
import Homepage from "./router/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
