import { Routes, Route } from "react-router-dom";
import useGlobalState from "./globalstate";
import Homepage from "./router/Homepage";
import Dashboard from "./router/Dashboard";
import Home from "./router/Dashboard/Home";
function App() {
  const { isLoggedIn } = useGlobalState();
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {isLoggedIn && (
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;
