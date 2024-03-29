import { InfiniteScroll, Layouts, useCallback, useEffect, useState, Loader, axios, Link, useParams } from "../exporter"

const AnimeWithGenre = () => {
  const genreSlug = useParams().genre
  const [state, setState] = useState({
    animes: [],
    page: 1,
    request: "",
    hasMore: true,
  });
  useEffect(() => {
    getCompletedAnimes();
  }, [state.request]);

  const getCompletedAnimes = useCallback(async (reset = false, query = `genre=${genreSlug}`) => {
    reset ? setState({ animes: [], page: 1, request: "type=complete", hasMore: true }) : "";
    const response = await axios.get(`https://web-anime-psi.vercel.app/anime?page=${reset ? 1 : state.page}&${query}`);
    response.data.length > 0 ? setState((prevState) => ({ ...prevState, hasMore: true })) : setState((prevState) => ({ ...prevState, hasMore: false }));
    setState((prevState) => ({ ...prevState, animes: reset ? response.data : [...prevState.animes, ...response.data], page: reset ? 2 : prevState.page + 1 }));
  }, [state.page, state.request]);
  return (
    <Layouts name={`Kumpulan anime ${genreSlug}`} getAnimes={getCompletedAnimes} setRequest={(request) => setState({ ...state, request})}>
    <InfiniteScroll className="isc" hasMore={state.hasMore} next={getCompletedAnimes} dataLength={state.animes.length} loader={<Loader />}>
        {state.animes.map((anime, index) => (
          <Link to={`/anime/${anime.slug}`} className="column gap-3" key={index}>
            <div className="card group">
              <img src={anime.gambar} className="card-img" alt={anime.judul} />
                <div className="text-container">
                    <h1 className="card-title">
                        {anime.judul.length > 28 ? `${anime.judul.substring(0, 28)}...` : anime.judul}
                    </h1>
                    <h1 className="card-sub">{anime.eps} Eps</h1>
                </div>
            </div>
          </Link>
        ))}
      </InfiniteScroll>
  </Layouts>
  )
}

export default AnimeWithGenre
