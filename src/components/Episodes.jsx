import { Link, useEffect, useLocation, useParams, useState } from "../exporter";
import axios from "axios"; // Import axios library

const Episodes = ({ className }) => {
  const location = useLocation();
  const { anime: animeSlug } = useParams();
  const [anime, setAnime] = useState({ episodes: [] }); // Initialize with an empty object

  useEffect(() => {
    const getAnime = async () => {
      try {
        const response = await axios.get(
          `https://animepi.aimanfadillah.repl.co/anime/${animeSlug}`
        );
        setAnime(response.data);
      } catch (error) {
        console.error("Error fetching anime:", error);
        // Handle error (e.g., setAnime with a default value or show an error message)
      }
    };

    getAnime();
  }, [animeSlug]); // Adjust the dependency array

  return (
    <div className={className}>
      <div className="flex flex-col gap-2 max-h-96 overflow-y-scroll w-full relative pb-10">
        {anime.episodes.map((episode, index) => (
          <Link
            to={`/anime/${animeSlug}/episode/${episode.slug}`}
            key={index}
            className={`episode ${
              location.pathname === `/anime/${animeSlug}/episode/${episode.slug}`
                ? 'bg-dark-tosca'
                : ''
            }`}
          >
            <div className="flex flex-col gap-2">
              <p className="text-black font-bold text-lg">
                Episode {anime.episodes.length - index}
              </p>
              <p className="text-xs text-light-tosca/50 font-medium">
                {episode.tanggal}
              </p>
            </div>
            <img src="/arrow-black.svg" alt="" className="h-5" />
          </Link>
        ))}
      </div>
      <div className="h-10 bg-gradient-to-t from-black to-transparent -bottom-1 w-full absolute"></div>
    </div>
  );
};

export default Episodes;
