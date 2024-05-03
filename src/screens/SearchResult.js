import React from "react";
import Header from "../components/Header";

import GridProductSearch from "../components/GridProductSearch";

export default function SearchResult() {
  return (
    <>
      <Header />
      <div className="container  " style={{ paddingTop: "10px" }}>
        <GridProductSearch />
      </div>
    </>
  );
}
