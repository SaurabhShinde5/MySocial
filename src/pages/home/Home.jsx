import "./_home.scss";

import { Topnav, Sidebar, Rightbar, Feed } from "../../components";

const Home = () => {
  return (
    <>
      <Topnav />
      <div className="home__container">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
