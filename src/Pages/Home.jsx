import React from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
function Home() {
  return (
    <div>
      <Sidebar />
      <div className="ml-[80px]">
        <Main />
      </div>
    </div>
  );
}

export default Home;
