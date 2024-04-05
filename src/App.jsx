import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRoutes from "./router/userRouter";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<UserRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

