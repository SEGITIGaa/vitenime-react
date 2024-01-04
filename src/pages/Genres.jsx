import { Layouts, Link, axios, useEffect, useState, Loader } from "../exporter";

const Genres = () => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    getGenres();
  }, []);

  async function getGenres() {
    const response = await axios.get(
      "https://animepi.aimanfadillah.repl.co/genre"
    );
    setGenres(response.data);
  }

  return (
    <Layouts useNavbar={false} name={"Genre"}>
      {genres ? (
        <div className="genre-grid">
          {genres.map((ele, i) => (
            <Link key={i} to={`/genre/${ele.slug}`} className="genre">
              {ele.judul}
            </Link>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </Layouts>
  );
};

export default Genres;
