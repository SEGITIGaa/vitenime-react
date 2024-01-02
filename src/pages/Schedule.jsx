import {
  Layouts,
  React,
  useEffect,
  Link,
  useState,
  axios,
  Loader,
} from "../exporter";

const Schedule = () => {
  const [jadwal, setJadwal] = useState([]);
  useEffect(() => {
    getJadwal();
  }, []);
  async function getJadwal() {
    const response = await axios.get(
      "https://animepi.aimanfadillah.repl.co/jadwal"
    );
    setJadwal(response.data);
  }
  return (
    <Layouts useNavbar={false} name={"Jadwal update"}>
      <div className="container">
        {jadwal.length != 0 ? (
          <div className="column gap-10 pl-5">
            {jadwal.map((dt, i) => (
              <div key={i} className=" border-0 border-l-2 border-dark-tosca pl-4">
                <h1 className="text-white text-2xl font-medium mb-5">{dt.hari}</h1>
                <div className="column gap-1">

                {dt.anime.map((anime, index) => (
                  <Link
                    key={index}
                    to={`/anime/${anime.slug}`}
                    className="text-light-tosca/70 text-sm bg-neutral-950/50 rounded-lg hover:scale-105 hover:text-light-tosca px-3 py-2 ml-6 w-3/4 md:w-1/2 transition-all duration-300"
                  >
                    {anime.judul}
                  </Link>
                ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </Layouts>
  );
};

export default Schedule;
