import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";

export default function AppRouter(params) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="\" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
