import { Layouts, useEffect, InfiniteScroll, Link, useState, Loader, axios } from "../exporter";

const OngoingAnime = () => {
    const [state, setState] = useState ({
        animes:[],
        hasMore:true,
        page:1,
        request:"type=ongoing",
    })

  useEffect(() => {
    getAnimes();
  }, [state.request]);

  async function getAnimes(reset = false, query = state.request) {
    reset ? setState({ ...state, animes: [], page: 1 }) : "";
    const response = await axios.get(`https://animepi.aimanfadillah.repl.co/anime?page=${reset ? 1 : state.page}&${query}`);
    response.data.length > 0 ? setState((prevState) => ({ ...prevState, hasMore: true })) : setState((prevState) => ({ ...prevState, hasMore: false }));
    setState((prevState) => ({ ...prevState, animes: reset ? response.data : [...prevState.animes, ...response.data], page: reset ? 2 : prevState.page + 1 }));
  }

  return (
    <Layouts name={'Ongoing anime'} getAnimes={getAnimes} setRequest={(request) => setState({ ...state, request})}>
      <InfiniteScroll
        className="isc"
        hasMore={state.hasMore}
        next={getAnimes}
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

export default OngoingAnime;
