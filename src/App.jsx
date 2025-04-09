import Navigation from "./components/ui/Navigation";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import SectionDiv from "./components/ui/SectionDiv";

export default function App() {
  return (
    <div className="flex">
      <Navigation />
      <div className="w-full pl-[150px]">
        <Section1 />
        <SectionDiv />
        <Section2 />
      </div>
    </div>
  );
}
