import { Link, useEffect, useLocation, useParams, useState,axios } from "../exporter";

const Episodes = ({ className }) => {
  const location = useLocation();
  const { anime: animeSlug } = useParams();
  const [anime, setAnime] = useState({ episodes: [] }); // Initialize with an empty object
  useEffect(() => {
    const getAnime = async () => {
      try {
        const response = await axios.get(
          `https://web-anime-psi.vercel.app/anime/${animeSlug}`
        );
        setAnime(response.data);
      } catch (error) {
        console.error("Error fetching anime:", error);
      }
    };

    getAnime();
  }, [animeSlug]); // Adjust the dependency array

  return (
    <div className={className}>
      <div className="episodes-container">
        {anime.episodes.map((episode, index) => (
          <Link to={`/anime/${animeSlug}/episode/${episode.slug}`} key={index} className={`episode ${ location.pathname === `/anime/${animeSlug}/episode/${episode.slug}` ? 'bg-dark-tosca' : '' }`}>
            <div className="column gap-2">
              <p className="episodes-title">
                Episode {anime.episodes.length - index}
              </p>
              <p  className={`episodes-date ${location.pathname === `/anime/${animeSlug}/episode/${episode.slug}` ? 'text-semidark-tosca' : 'text-white/70'}`}>
                {episode.tanggal}
              </p>
            </div>
            <img src="https://img.icons8.com/fluency-systems-filled/96/ffffff/sort-right.png" alt="" className="w-5 h-5" />
          </Link>
        ))}
      </div>
      <div className="gradient"></div>
    </div>
  );
};

export default Episodes;
