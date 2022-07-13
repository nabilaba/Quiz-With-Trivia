import { Routes, Route } from "react-router-dom";
import Homepage from "./router/Homepage";
import Dashboard from "./router/Dashboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
