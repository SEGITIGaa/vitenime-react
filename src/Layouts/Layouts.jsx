import { Sidebar, React, Navbar } from "../exporter";

const Layouts = ({children, name, useNavbar, getAnimes, setRequest}) => {
  return (
    <div className="h-full w-full bg-neutral-950 flex flex-col md:flex-row px-0 md:px-4 items-center p-4 gap-4">
      <Sidebar />
      <div className="bg-black min-h-screen h-full w-full bg-patern md:bg-fixed bg-contain bg-right-top bg-no-repeat overflow-y-auto rounded-3xl flex flex-col px-4 md:px-8 py-12 gap-8 md:ml-20">
        {useNavbar === false ? "" : <Navbar getAnimes={getAnimes} setRequest={setRequest}/>}
        <h1 className="text-white text-4xl font-bold">{name}</h1>
        {children}
      </div>
    </div>
  );
};

export default Layouts;
