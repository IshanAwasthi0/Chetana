import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";

export default function Home() {
  return (
    <>
      <Sidebar/>
      <div className="flex flex-col items-center w-screen h-screen ">
        <Searchbar/>
      </div>   
    </>
  );
}
