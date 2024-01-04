import {
  Layouts,
  React,
  useEffect,
  useParams,
  axios,
  Episodes,
  useState,
  Loader,
  BatchDownload,
} from "../exporter";

const AnimeDetails = () => {
  const [anime, setAnime] = useState();
  const animeSlug = useParams().anime;
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    getAnime();
    checkBookmarkStatus();
  }, [animeSlug]);

  async function getAnime() {
    const response = await axios.get(
      `https://animepi.aimanfadillah.repl.co/anime/${animeSlug}`
    );
    setAnime(response.data);
  }

  function checkBookmarkStatus() {
    const bookmarkedAnimes =
      JSON.parse(localStorage.getItem("bookmarkedAnimes")) || [];
    const isAnimeBookmarked = bookmarkedAnimes.some(
      (bookmark) => bookmark.slug === animeSlug
    );
    setIsBookmarked(isAnimeBookmarked);
  }

  function handleBookmark() {
    const bookmarkedAnimes =
      JSON.parse(localStorage.getItem("bookmarkedAnimes")) || [];
    const isAnimeBookmarked = bookmarkedAnimes.some(
      (bookmark) => bookmark.slug === animeSlug
    );

    if (isAnimeBookmarked) {
      const updatedBookmarks = bookmarkedAnimes.filter(
        (bookmark) => bookmark.slug !== animeSlug
      );
      localStorage.setItem(
        "bookmarkedAnimes",
        JSON.stringify(updatedBookmarks)
      );
    } else {
      const newBookmark = {
        slug: animeSlug,
        judul: anime.judul,
        gambar: anime.gambar,
      };
      const updatedBookmarks = [newBookmark, ...bookmarkedAnimes];
      localStorage.setItem(
        "bookmarkedAnimes",
        JSON.stringify(updatedBookmarks)
      );
    }

    checkBookmarkStatus();
  }

  const produser = anime ? anime.produser.split(": ")[1] : "";
  const studio = anime ? anime.studio.split(": ")[1] : "";
  const namaJapan = anime ? anime.namaJapan.split(": ")[1] : "";
  const rilis = anime ? anime.rilis.split(": ")[1] : "";
  const status = anime ? anime.status.split(": ")[1] : "";
  const skor = anime ? anime.skor.split(": ")[1] : "";
  const genre = anime ? anime.genre.split(": ")[1] : "";
  const tipe = anime ? anime.tipe.split(": ")[1] : "";
  const durasi = anime ? anime.durasi.split(": ")[1] : "";

  const animeInformation = [
    {
      about: "Durasi episode : ",
      content: durasi,
    },
    {
      about: "Produser : ",
      content: produser,
    },
    {
      about: "Tipe : ",
      content: tipe,
    },
  ];
  return (
    <Layouts name={""} useNavbar={false}>
      {anime ? (
        <div className="column gap-4 md:gap-14">
          <div className="flex w-full justify-between md:justify-normal md:gap-24">
            <img src={anime.gambar} className="anime-img" alt={anime.judul} />
            <div className="column gap-2 md:gap-4 w-3/4 pl-3 md:pl-0 md:w-2/3 justify-end pb-5">
              <h5 className="text-white font-medium text-xs">By {studio}</h5>
              <h1 className="anime-title">{anime.judul}</h1>
              <h5 className="anime-title-jp">JP : {namaJapan}</h5>
              <div className="anime-info-container">
                {rilis}
                <span className="text-white-semibold">|</span>
                {status}
                <span className="text-white-semibold">|</span>
                {skor}
              </div>
              <div className="anime-genre-container">
                <h5 className="text-tosca-medium">{genre}</h5>
                <button className={isBookmarked ? "bookmarked" : "unbookmark"} onClick={handleBookmark}>
                  {isBookmarked ? "Batalkan" : "Tonton nanti"}
                </button>
              </div>
            </div>
          </div>
          <div className="column md:flex-row w-full gap-10 md:gap-24">
            <div className="column gap-2 md:w-52">
              {animeInformation.map((ele, i) => (
                <p key={i} className="text-tosca-medium">
                  <span className="font-semibold tracking-widest">
                    {ele.about}
                  </span>
                  {ele.content}
                </p>
              ))}
            </div>
            <div className="column w-full md:w-2/3 gap-2">
              {anime.lengkap.judul && (
                <BatchDownload anime={anime} animeSlug={animeSlug} />
              )}
              <Episodes
                anime={anime}
                slug={animeSlug}
                className={"relative h-max"}
              />
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </Layouts>
  );
};

export default AnimeDetails;
