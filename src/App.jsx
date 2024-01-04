import { Router, Route, Routes, Homepage, AnimeDetails, EpisodeDetails, CompleteAnimes, Genres, AnimeWithGenre, Bookmark, Schedule, Batch,} from "./exporter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/genre" element={<Genres/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/bookmark" element={<Bookmark/>}/>
        <Route path="/batch/:anime/:slug" element={<Batch/>}/>
        <Route path="/completed" element={<CompleteAnimes/>}/>
        <Route path="/anime/:anime" element={<AnimeDetails/>}/>
        <Route path="/genre/:genre" element={<AnimeWithGenre/>}/>
        <Route path="/anime/:anime/episode/:episode" element={<EpisodeDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
