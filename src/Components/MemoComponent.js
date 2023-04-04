import React from "react";

const MemoComponent = ({ name }) => {
  console.log("Memo Component renders");
  return <div>MemoComponent {name}</div>;
};

export default React.memo(MemoComponent);
