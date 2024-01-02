import { Layouts, React, axios, useEffect, useState, useParams, StreamServices, DownloadLink, Episodes, Link } from '../exporter'

const EpisodeDetails = () => {
    const [episode,setEpisode] = useState();
    const [anime, setAnime] = useState();
    const [iframe,setIframe] = useState();
    const [nonce,setNonce] = useState();
    const [showEpisode,setShowEpisode] = useState(false);
    const download = ["d360pmp4","d480pmp4","d720pmp4","d1080pmp4","d480pmkv","d720pmkv","d1080pmkv"]
    const episodeSlug = useParams().episode
    const animeSlug = useParams().anime;

    useEffect(() => {
      getNonce();
      getEpisode();
      getAnime();
    }, [episodeSlug, animeSlug]);

    async function getNonce () {
        const response = await axios.get("https://animepi.aimanfadillah.repl.co/nonce");
        setNonce(response.data);
    }

    async function getEpisode () {
        const response = await axios.get(`https://animepi.aimanfadillah.repl.co/episode/${episodeSlug}`);
        setEpisode(response.data);
        setIframe(response.data.iframe)
    }
    
    async function getAnime() {
        const response = await axios.get(
          `https://animepi.aimanfadillah.repl.co/anime/${animeSlug}`
        );
        setAnime(response.data);
      }
      function HandleShowedEpisode() {
        setShowEpisode(!showEpisode)
      }
  return (
    <Layouts useNavbar={false}>
      {episode ? 
        <>
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:items-center justify-between">
            <div className="flex flex-col gap-3 w-full md:w-2/3"> 
                <StreamServices episode={episode} nonce={nonce} setIframe={setIframe}/>
                <iframe allowFullScreen={true} src={iframe} className="rounded-lg border border-dark-tosca md:h-96"></iframe>
                <h3 className='text-white font-medium text-lg'>{episode.judul}</h3>
            </div>
            <div onClick={() => HandleShowedEpisode()} className="text-dark-tosca bg-neutral-900 rounded px-4 py-2 md:hidden ">lihat episode lainnya</div>
            {showEpisode == true && (
              <Episodes anime={anime} slug={animeSlug} className={"relative h-max md:w-1/4"}/>
            )}
              <Episodes anime={anime} slug={animeSlug} className={"relative h-max w-1/4 hidden md:flex"}/>
        </div>
            <div className="icon-button w-2/3 h-1 p-0.5 bg-neutral-950"></div>
            <DownloadLink episode={episode} download={download}/>
        </>
        : ""}
    </Layouts>
  )
}

export default EpisodeDetails
