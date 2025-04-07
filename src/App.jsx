import Navigation from "./components/Navigation";
import Intro from "./components/Intro";

export default function App() {
  return (
    <div className="flex">
      <Navigation />
      <div className="w-full pl-[150px]">
        <Intro />
      </div>
    </div>
  );
}
