import React from "react";
import ClickCounterTwo from "./ClickCounterTwo";
import HoverCountTwo from "./HoverCountTwo";
import CounterRender from "./CounterRender";

const RenderProps = () => {
  return (
    <div>
      {/* <ClickCounterTwo />
      <HoverCountTwo /> */}
      {/* <CounterRender name="rudra" /> */}
      {/* <CounterRender render={() => "Vishwas"} /> */}
      {/* <CounterRender
        render={(isLoggedIn) => (isLoggedIn ? "Vishwas" : "Guest")}
      /> */}
      <CounterRender
        render={(count, increment) => (
          <ClickCounterTwo count={count} increment={increment} />
        )}
      />
      <CounterRender
        render={(count, increment) => (
          <HoverCountTwo count={count} increment={increment} />
        )}
      />
    </div>
  );
};

export default RenderProps;
