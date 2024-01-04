import { Link } from "../exporter";

const Sidebar = () => {
  const sidebarMenu = [
    {
      icon: "/watchList.svg",
      path: "/bookmark",
      name: "Daftar tontonan",
    },
    {
      icon: "/completed.svg",
      path:"/completed",
      name:"Rilis penuh"
    },
   
  ];
  return (
    <div className="flex gap-1 md:column md:gap-5 md:fixed top-32 left-5 w-full md:w-max">
      <Link to={"/"} className="icon-button w-1/4 md:w-12">
        <img src="/HomePage.svg" alt="Homepage" />
      </Link>
      <div className="icon-button h-1 bg-dark-tosca/50 hidden md:inline-block"></div>
      {sidebarMenu.map((ele, i) => (
        <Link to={ele.path} key={i} className="icon-button">
          <img src={ele.icon} alt={ele.name} className="icon"/>
          <p className="text-sm font-bold w-2/3 md:hidden">{ele.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
