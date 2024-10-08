import { useState } from "react";
import Header from "./components/Header";
import Logos from "./components/Logos";
import Posters from "./components/Posters";
import Festival from "./components/Festival";
import Brochure from "./components/Brochure";
import VisitingCard from "./components/VisitingCard";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Logos />
      <Posters />
      <Festival />
      <Brochure />
      <VisitingCard />
    </>
  );
}

export default App;
