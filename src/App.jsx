import { Routes, Route } from "react-router-dom";
import Homepage from "./router/Homepage";
import Dashboard from "./router/Dashboard";
import Home from "./router/Dashboard/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
