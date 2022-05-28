import React, { useState, Suspense } from "react";
import Navbar from "../components/Navbar";
import CurrentPage from "./CurrentPage";

const LazyConverter = React.lazy(() => import("./Converter"));

const Home = () => {
  const [currentPage, setCurrentPage] = useState(true);
  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage ? (
        <CurrentPage />
      ) : (
        <Suspense fallback={<div> ... Loading </div>}>
          <LazyConverter />
        </Suspense>
      )}
    </div>
  );
};

export default Home;
