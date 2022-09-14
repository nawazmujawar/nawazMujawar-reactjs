import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import FavoritePage from "./pages/Favortie/FavoritePage";
import NewProduct from "./pages/NewProduct/NewProduct";

const App: FC = () => {
  return (
    <Router>
      <Header />
      <hr />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/newProduct" element={<NewProduct />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/product/:id" element={<DetailProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
