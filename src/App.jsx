import Navigation from "./components/ui/Navigation";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import SectionDiv from "./components/ui/SectionDiv";
import References from "./components/References";
import { useRef } from "react";

export default function App() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  return (
    <div className="flex">
      <Navigation
        sectionRefs={[section1Ref, section2Ref, section3Ref, section4Ref]}
      />
      <div className="w-full pl-[150px]">
        <Section1 ref={section1Ref} />
        <SectionDiv />
        <Section2 ref={section2Ref} />
        <SectionDiv />
        <Section3 ref={section3Ref} />
        <SectionDiv />
        <Section4 ref={section4Ref} />
        <SectionDiv />
        <References />
      </div>
    </div>
  );
}
