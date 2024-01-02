import { Layouts, React, Link, useEffect, useState } from "../exporter";

const Bookmark = () => {
  const [bookmarkedAnimes, setBookmarkedAnimes] = useState([]);
  console.log(bookmarkedAnimes);

  useEffect(() => {
    // Ambil data bookmark dari localStorage
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarkedAnimes")) || [];
    setBookmarkedAnimes(storedBookmarks);
  }, []);

  return (
    <Layouts name={"Bookmark saya"} useNavbar={false}>
      <div className="isc">
        {bookmarkedAnimes.map((anime, index) => (
          <Link to={`/anime/${anime.slug}`} className="column gap-3" key={index}>
            <div className="card group">
              <img src={anime.gambar} className="card-img" alt={anime.judul} />
              <div className="text-container">
                <h1 className="card-title">
                  {anime.judul.length > 28 ? `${anime.judul.substring(0, 28)}...` : anime.judul}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layouts>
  );
};

export default Bookmark;
