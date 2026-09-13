import { Suspense } from "react";
import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import Stacks from "./Components/Stacks";
import type { IStack } from "./types/stackType";
import Footer from "./Components/Footer";

const stackFetch = async (): Promise<IStack[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const stackPromise = stackFetch();
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<div className='text-center text-lg sm:mb-20 mb-10'>Loading...</div>}>
        <Stacks promise={stackPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
