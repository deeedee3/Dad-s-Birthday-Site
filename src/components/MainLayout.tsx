import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import MusicPlayer from "./MusicPlayer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <MusicPlayer />
    </div>
  );
};

export default MainLayout;
