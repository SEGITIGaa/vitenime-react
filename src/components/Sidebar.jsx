import { Link } from "../exporter";

const Sidebar = () => {
  const sidebarMenu = [
    {
      icon: "https://img.icons8.com/fluency-systems-filled/100/2c3333/cinema-film-play.png",
      path: "/bookmark",
      name: "Daftar tontonan",
    },
    {
      icon: "https://img.icons8.com/fluency-systems-filled/100/2c3333/checked-checkbox.png",
      path:"/completed",
      name:"Rilis penuh"
    },
   
  ];
  return (
    <div className="flex gap-1 md:column md:gap-5 md:fixed top-32 left-5 w-full md:w-max">
      <Link to={"/"} className="icon-button w-1/4 md:w-12">
        <img src="https://img.icons8.com/fluency-systems-filled/96/2c3333/dashboard-layout.png" alt="Homepage" />
      </Link>
      <div className="icon-button h-1 p-0 bg-dark-tosca/50 hidden md:inline-block"></div>
      {sidebarMenu.map((ele, i) => (
        <Link to={ele.path} key={i} className="icon-button">
          <img src={ele.icon} alt={ele.name} className="icon md:h-max md:w-max"/>
          <p className="text-sm font-bold w-2/3 md:hidden">{ele.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
