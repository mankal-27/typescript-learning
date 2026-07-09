import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ModulePage from "./pages/ModulePage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/module/:slug" element={<ModulePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
