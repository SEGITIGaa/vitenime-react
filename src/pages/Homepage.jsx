import { Layouts, useEffect, InfiniteScroll, Link, useState, axios, Loader } from "../exporter";

const Homepage = () => {
  const [state, setState] = useState({
    animes: [],
    page: 1,
    request: "type=ongoing",
    hasMore: true,
  });

  useEffect(() => {
    getAnimes(true);
  }, [state.request]);

  async function getAnimes(reset = false, query = state.request) {
    const page = reset ? 1 : state.page;
    const response = await axios.get(`https://animepi.aimanfadillah.repl.co/anime?page=${page}&${query}`);
    const newAnimes = reset ? response.data : [...state.animes, ...response.data];
    const hasMore = response.data.length > 0;

    setState((prevState) => ({
      ...prevState,
      animes: newAnimes,
      page: reset ? 2 : prevState.page + 1,
      hasMore: hasMore,
    }));
  }

  return (
    <Layouts name={'Kumpulan anime'} getAnimes={getAnimes} setRequest={(request) => setState({ ...state, request })}>
      <InfiniteScroll
        className="isc"
        hasMore={state.hasMore}
        next={() => getAnimes(false)}
        dataLength={state.animes.length}
        loader={<Loader />}
      >
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
  );
};

export default Homepage;
