import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import View from "./Pages/View";
import Edit from "./Pages/Edit";
import NotFound from "./Pages/NotFound";
import Footer from "./components/Footer";
import Create from "./Pages/Create";


function App() {
  return (
    <div className="relative min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/create_user" element={<Create />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
