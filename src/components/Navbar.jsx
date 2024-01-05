import { Link, React, Sidebar } from "../exporter";

const Navbar = ({ setRequest, getAnimes }) => {
  const menu = [
    {
      icon: "https://img.icons8.com/fluency-systems-regular/100/ffffff/mail-filter.png",
      path: "/genre",
    },
    {
      icon: "https://img.icons8.com/fluency-systems-regular/100/ffffff/month-view--v1.png",
      path: "/schedule",
    },
  ];
  return (
    <div className="column gap-3">
      <div className="flex md:flex-row flex-col gap-3 items-center justify-between w-full">
        <form
          className="w-full md:w-1/3 order-2 md:order-1"
          onSubmit={(e) => {
            e.preventDefault();
            const value = e.target.querySelector("input").value;
            setRequest(`search=${value}`);
            getAnimes(true, `search=${value}`);
          }}
        >
          <input
            type="search"
            name=""
            id=""
            placeholder="cari anime di sinii...."
            className="bg-dark rounded px-4 py-3 md:py-2 placeholder w-full outline-none text-light-tosca text-sm"
          />
        </form>
        <div className="flex w-full justify-between md:w-max gap-2 order-1 md:order-2">
          <img src="/Assets/vitenime.png" alt="" className="md:hidden w-1/3" />
          <div className="flex items-center gap-2">
            {menu.map((ele, i) => (
              <Link
                to={ele.path}
                key={i}
                className="text-light-tosca transition-all duration-300 bg-neutral-800/70 rounded-full flex gap-3 items-center justify-center hover:bg-neutral-900/60 p-2 w-12 h-12"
              >
                <img src={ele.icon} alt="" className="w-8 h-8" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Sidebar/>
    </div>
  );
};

export default Navbar;
