import React from "react";
import { LeftSide, RightSide, Middle } from "./components";

const App = () => {
  return (
    <div className="md:mx-[4rem] h-[90vh] mx-[6rem] sm:mx[2rem] my-10 flex flex-row gap-7 justify-center">
      <div>
        <LeftSide />
      </div>
      <div>
        <Middle />
      </div>
      <div>
        <RightSide />
      </div>
    </div>
  );
};

export default App;
