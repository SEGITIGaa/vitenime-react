import {
  Layouts,
  axios,
  useParams,
  useState,
  useEffect,
  Loader,
} from "../exporter";

const API_URL = "https://animepi.aimanfadillah.repl.co";

const Batch = () => {
  const [lengkap, setLengkap] = useState([]);
  const { slug } = useParams();
  const download = ["d360pmp4", "d480pmp4", "d720pmp4"];

  useEffect(() => {
    const getLengkap = async () => {
      try {
        const response = await axios.get(`${API_URL}/lengkap/${slug}`);
        setLengkap(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getLengkap();
  }, [slug]);

  const swapFirstAndLast = (array) => {
    if (array.length < 2) return array;

    const newArray = [...array];
    const lastItem = newArray.pop();
    newArray.unshift(lastItem);

    return newArray;
  };

  return (
    <Layouts useNavbar={false} name={"Download Batch"}>
      {lengkap ? (
        <>
          {swapFirstAndLast(lengkap).map((dt, index) => (
            <div
              className={`col-md-${
                dt.judul.includes("Episode") ? "6" : "7"
              } mt-3`}
              key={`${slug}-${index}`}
            >
              <div className="flex flex-col gap-3 md:w-2/3 ml-5">
                <h1 className="text-white text-lg">
                  {dt.judul.includes("Episode") ? `Episode ${index}` : "Batch"}
                </h1>
                <div className="rounded-lg overflow-hidden">
                  {download.map((type, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row  md:items-center gap-3 bg-neutral-800 px-3 py-2"
                    >
                      <h1 className="resolution">
                        {`${type.split("p")[0].replace("d", " ")}P `}
                        <span className="resolution text-xs inline-flex">
                          {type.includes("mp4") ? "MP4" : "MKV"}
                        </span>
                      </h1>
                      <div className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6">
                        {dt.download[type].map(
                          (downloadItem, downloadIndex) => (
                            <a
                              key={downloadIndex}
                              target="blank"
                              href={downloadItem.href}
                              className="link"
                            >
                              {downloadItem.nama}
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <Loader />
      )}
    </Layouts>
  );
};

export default Batch;
