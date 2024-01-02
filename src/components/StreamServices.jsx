

const StreamServices = ({episode, nonce, setIframe}) => {
    async function getIframe (content) {
        const response = await axios.get(`https://animepi.aimanfadillah.repl.co/getIframe?nonce=${nonce}&content=${content}`)
        const inframeSrc =  (new DOMParser().parseFromString(response.data,"text/html")).querySelector("iframe").getAttribute("src");
        setIframe(inframeSrc);
    }
  return (
    <select onChange={(e) => getIframe(e.target.value)} className="nav-button outline-none px-2 w-full md:w-1/3">
    {episode.mirror.m360p.map((dt,index) => 
        <option key={index} value={dt.content} className='opt'>layanan streaming : {dt.nama} 360P</option>
    )}
    {episode.mirror.m480p.map((dt,index) => 
        <option key={index} value={dt.content} className='opt'>layanan streaming : {dt.nama} 480p</option>
    )}
    {episode.mirror.m720p.map((dt,index) => 
        <option key={index} value={dt.content} className='opt'>layanan streaming : {dt.nama} 720p</option>
    )}
</select>
  )
}

export default StreamServices
