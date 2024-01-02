import { Link } from "../exporter";

const Sidebar = () => {
  const sidebarMenu = [
    {
      icon: "/ongoing.svg",
      path:"/ongoing"
    },
    {
      icon: "/completed.svg",
      path:"/completed"
    },
    {
      icon: "/watchList.svg",
      path: "/bookmark",
    },
  ];
  return (
    <div className="flex md:column gap-5 md:fixed top-32 left-5">
      <Link to={"/"} className="icon-button">
        <img src="/HomePage.svg" alt="Homepage" />
      </Link>
      <div className="icon-button h-1 p-0 bg-dark-tosca/50 hidden md:inline-block"></div>
      {sidebarMenu.map((ele, i) => (
        <Link to={ele.path} key={i} className="icon-button">
          <img src={ele.icon} alt="Homepage" />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
