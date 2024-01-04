import "./App.css";
import React from "react";
import { useCallback } from "react";
import axios from "axios";
import App from "./App.jsx";
import Layouts from "./Layouts/Layouts";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";

// components
import Navbar from "./components/Navbar.jsx";
import Loader from "./components/Loader.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Episodes from "./components/Episodes.jsx";
import StreamServices from "./components/StreamServices.jsx";
import DownloadLink from "./components/DownloadLink.jsx";
import BatchDownload from "./components/BatchDownload.jsx";

// pages
import Homepage from "./pages/Homepage";
import AnimeDetails from "./pages/AnimeDetails.jsx";
import EpisodeDetails from "./pages/EpisodeDetails";
import CompleteAnimes from "./pages/CompleteAnimes.jsx";
import Genres from "./pages/Genres.jsx";
import Schedule from "./pages/Schedule.jsx";
import AnimeWithGenre from "./pages/AnimeWithGenre.jsx";
import Bookmark from "./pages/Bookmark.jsx";
import Batch from "./pages/Batch.jsx";

export {
  Route,
  Router,
  Routes,
  useState,
  useEffect,
  useParams,
  useCallback,
  useLocation,
  useNavigate,
  axios,
  Layouts,
  Loader,
  Batch,
  Schedule,
  Bookmark,
  Homepage,
  AnimeDetails,
  EpisodeDetails,
  BatchDownload,
  CompleteAnimes,
  AnimeWithGenre,
  Genres,
  App,
  ReactDOM,
  React,
  StreamServices,
  DownloadLink,
  Episodes,
  Sidebar,
  Navbar,
  InfiniteScroll,
  Link,
};
