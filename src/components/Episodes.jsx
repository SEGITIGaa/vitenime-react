import { Link, useLocation } from "../exporter";

const Episodes = ({ anime, className, slug }) => {
  const location = useLocation();

  return (
    <div className={className}>
      <div className="flex flex-col gap-2 max-h-96 overflow-y-scroll w-full relative pb-10">
        {anime.episodes.map((episode, index) => (
          <Link
            to={`/anime/${slug}/episode/${episode.slug}`}
            key={index}
            className={`episode ${
              location.pathname === `/anime/${slug}/episode/${episode.slug}`
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
