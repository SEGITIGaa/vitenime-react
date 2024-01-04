import { Link } from "../exporter";

const BatchDownload = ({anime, animeSlug}) => {

  return (
      <Link to={`/batch/${animeSlug}/${anime.lengkap.slug}`} className="episode bg-semidark-tosca">
      <div className="flex flex-col gap-2">
        <p className="text-dark font-semibold text-lg column gap-2">Download batch <span className="text-xs">semua episode</span></p>
      </div>
      <img src="/arrow-black.svg" alt="" className="h-5" />
    </Link>
  );
};

export default BatchDownload;
