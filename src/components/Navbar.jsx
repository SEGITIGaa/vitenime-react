import { Link, React } from "../exporter";

const Navbar = ({ setRequest, getAnimes }) => {
  const menu = [
    {
      icon: "/filter.svg",
      name: "genre",
      path: "/genre",
    },
    {
      icon: "/history.svg",
      name: "jadwal rilis",
      path: "/schedule",
    },
  ];
  return (
    <div className="flex md:flex-row flex-col gap-3 items-center justify-start w-full">
      <div className="flex w-full md:w-max gap-2">
        {menu.map((ele, i) => (
          <Link to={ele.path} key={i} className="nav-button w-1/2 md:w-max">
            {ele.name}
            <img src={ele.icon} alt="" className="h-4 w-4" />
          </Link>
        ))}
      </div>
      <form
        className="w-full md:w-1/3"
        onSubmit={(e) => {
          e.preventDefault();
          const value = e.target.querySelector("input").value;
          setRequest(`search=${value}`);
          getAnimes(true, `search=${value}`);
        }}
      >
        <div className="input-group">
          <input
            type="search"
            name=""
            id=""
            placeholder="cari anime di sinii...."
            className="bg-dark-tosca/50 rounded-xl px-4 py-2 placeholder w-full outline-none text-light-tosca text-sm"
          />
        </div>
      </form>
    </div>
  );
};

export default Navbar;
