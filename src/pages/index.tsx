import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
import NotFound from "./notfound";
import Search from "./search";

import Home from "./home";

import Settings from "./settings";
import SettingsLanding from "./settings/Landing";
import Import from "./settings/import";
import Export from "./settings/export";

export default function Index() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="settings" element={<Settings />}>
          <Route index element={<SettingsLanding />} />
          <Route path="import" element={<Import />} />
          <Route path="export" element={<Export />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
