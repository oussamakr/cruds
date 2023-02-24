import React, { createContext, useState } from "react";

export const Mycontext = createContext(null);

export const Mycontextprovider = () => {
  const [onstyle, setOnstyle] = useState("none");

  const files = { onstyle, setOnstyle };

  return <Mycontext.Provider value={files}></Mycontext.Provider>;
};
