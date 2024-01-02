import { Router, Route, Routes, Homepage, AnimeDetails, EpisodeDetails, CompleteAnimes, OngoingAnime, Genres, AnimeWithGenre, Bookmark, Schedule,} from "./exporter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/ongoing" element={<OngoingAnime/>}/>
        <Route path="/completed" element={<CompleteAnimes/>}/>
        <Route path="/genre" element={<Genres/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/bookmark" element={<Bookmark/>}/>
        <Route path="/genre/:genre" element={<AnimeWithGenre/>}/>
        <Route path="/anime/:anime" element={<AnimeDetails/>}/>
        <Route path="/anime/:anime/episode/:episode" element={<EpisodeDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
