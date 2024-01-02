import { Layouts, Link, axios, useEffect, useState } from "../exporter";

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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
        {genres.map((ele, i) => (
          <Link key={i} to={`/genre/${ele.slug}`} className="text-dark-tosca hover:text-light-tosca bg-neutral-900 hover:scale-105 transition-all duration-300 hover:bg-neutral-950/60 rounded px-4 py-2">
            {ele.judul}
          </Link>
        ))}
      </div>
    </Layouts>
  );
};

export default Genres;
