import React from "react";

const DownloadLink = ({download, episode}) => {
  return (
    <div className="flex flex-col gap-3 md:w-2/3">
      <h1 className="text-white text-sm font-semibold">Download</h1>
      <div className="rounded-lg overflow-hidden">
        {download.map(
          (type, index) =>
            episode.download[type].length > 0 && (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center gap-3 bg-neutral-800 px-3 py-2"
              >
                <h1 className="resolution">
                  {`${type.split("p")[0].replace("d", " ")}P `}
                  <span className="resolution text-xs inline-flex">
                    {type.includes("mp4") ? "MP4" : "MKV"}
                  </span>
                </h1>
                <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
                  {episode.download[type].map((dt, index) => (
                    <a key={index} target="blank" href={dt.href} className="link">
                      {dt.nama}
                    </a>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default DownloadLink;
