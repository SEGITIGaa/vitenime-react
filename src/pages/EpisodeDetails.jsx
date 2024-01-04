import { Layouts, React, axios, useEffect, useState, useParams, StreamServices, DownloadLink, Episodes, Loader } from '../exporter';

const EpisodeDetails = () => {
  const [episode, setEpisode] = useState();
  const [iframe, setIframe] = useState();
  const [nonce, setNonce] = useState();
  const [showEpisode, setShowEpisode] = useState(false);
  const download = ["d360pmp4", "d480pmp4", "d720pmp4", "d1080pmp4", "d480pmkv", "d720pmkv", "d1080pmkv"];
  const episodeSlug = useParams().episode;

  useEffect(() => {
    getNonce();
    getEpisode();
  }, [episodeSlug]);

  async function getNonce() {
    const response = await axios.get("https://animepi.glitch.me/nonce");
    setNonce(response.data);
  }

  async function getEpisode() {
    const response = await axios.get(`https://animepi.glitch.me/episode/${episodeSlug}`);
    setEpisode(response.data);
    setIframe(response.data.iframe);
  }

  function HandleShowedEpisode() {
    setShowEpisode(!showEpisode);
  }

  return (
    <Layouts useNavbar={false}>
      {episode ? (
        <>
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:items-center justify-between">
            <div className="flex flex-col gap-3 w-full md:w-2/3">
              <StreamServices episode={episode} nonce={nonce} setIframe={setIframe} />
              <iframe allowFullScreen={true} src={iframe} className="episode-frame"></iframe>
              <h3 className='episodes-title'>{episode.judul}</h3>
            </div>
            <div onClick={() => HandleShowedEpisode()} className="text-dark font-semibold flex items-center justify-between bg-semidark-tosca rounded px-4 py-2 md:hidden">
              {showEpisode === true ?'sembunyikan episode lainnya':'lihat episode lainnya'}
              <img src="/Expand.svg" alt="" className={showEpisode === true ?'w-5 h-5 -rotate-180':'w-5 h-5'}/>
            </div>
            {showEpisode === true && (
                <Episodes className="relative h-max" />
            )}
            <div className="md:w-1/4">
                <Episodes className="relative h-max hidden md:flex" />
              </div>
          </div>
          <div className="icon-button md:w-2/3 h-1 p-0.5 bg-neutral-950"></div>
          <DownloadLink episode={episode} download={download} />
        </>
      ) : (
        <Loader />
      )}
    </Layouts>
  );
};

export default EpisodeDetails;
