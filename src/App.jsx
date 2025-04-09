import Navigation from "./components/ui/Navigation";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import SectionDiv from "./components/ui/SectionDiv";

export default function App() {
  return (
    <div className="flex">
      <Navigation />
      <div className="w-full pl-[150px]">
        <Section1 />
        <SectionDiv />
        <Section2 />
        <SectionDiv />
        <Section3 />
        <SectionDiv />
        <Section4 />
      </div>
    </div>
  );
}
