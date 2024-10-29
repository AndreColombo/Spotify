import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./Pages/Home.jsx";
import Search from "./Pages/Search.jsx";
import DownloadSpotify from "./Pages/DownloadSpotify.jsx";
import Playlist from "./Pages/Playlist.jsx";
import Section from "./Pages/Section.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="download" element={<DownloadSpotify />} />
          <Route path="/playlist/:_id" element={<Playlist />} />
          <Route path="/section/:_id" element={<Section />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
