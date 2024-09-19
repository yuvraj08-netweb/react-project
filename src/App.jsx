import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import View from "./Pages/View";
import Edit from "./Pages/Edit";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
