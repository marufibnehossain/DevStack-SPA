import { Suspense } from "react";
import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import Stacks from "./Components/Stacks";
import type { IStack } from "./types/StackType";

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
      <Suspense fallback={<div>Loading...</div>}>
        <Stacks promise={stackPromise} />
      </Suspense>
    </>
  )
}

export default App
