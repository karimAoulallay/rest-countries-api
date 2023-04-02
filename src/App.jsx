import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Router basename="/res-countries-api">
      <Routes>
        <Route path="/rest-countries-api" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":name" element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
