import React from "react";
import Hero from "./Hero";
import ErrorBoundary from "./ErrorBoundary";
const Error = () => {
  return (
    <div>
      <ErrorBoundary>
        <Hero name="amar" />
      </ErrorBoundary>
 
      <ErrorBoundary>
        <Hero name="akbar" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero name="antony" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero name="bad" />
      </ErrorBoundary>
    </div>
  );
};

export default Error;
