import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { Layout } from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/rest-countries-api" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":name" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
