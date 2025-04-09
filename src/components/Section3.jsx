import SadRizal from "/sad_rizal.png";
import HappyRizal from "/happy_rizal.png";
import DividedLists from "./ui/DividedLists";
import { Good, Bad } from "./ui/Highlights";

const dis_adv = [
  {
    title: "Based on the Motivation for Nationalism in Education",
    adv: [
      <>
        the contemporary efforts to emphasize Filipino identity in education,
        such as the inclusion of Philippine history and his own writings in
        school curricula, mandated by <Good>Republic Act No. 1425</Good>.
      </>,
      <>
        the subjects like{" "}
        <Good>
          Araling Panlipunan and Filipino Values Education that have been
          instrumental in fostering historical awareness and cultural
          consciousness among students, in which he would appreciate
        </Good>
        . The Araling Panlipunan curriculum aims to cultivate historical
        awareness and cultural consciousness by teaching students about local
        history, values of unity, and tolerance through emphasis in
        strengthening Filipino identity and promoting responsible citizenship
        through understanding historical and social issues.
      </>,
    ],
    dis: [
      <>
        the{" "}
        <Bad>
          persistent inequalities limiting educational access in remote
          provinces and marginalized urban areas
        </Bad>
        . Schools in these regions often face overcrowding, insufficient
        teaching materials, and a lack of trained educators. The rural-urban
        education inequality gap is a major contributor to overall education
        inequality, while within provinces, the primary issue is inequality in
        rural areas. This underscores the need for improved educational
        provision in rural areas. Notably, Tawi-Tawi is the only province that
        has seen an increase in both rural and urban educational inequalities.
      </>,
      <>
        the <Bad>educational disparities</Bad>, seeing them as modern
        manifestations of the colonial-era discrimination he opposed. He would
        passionately advocate for equitable educational opportunities to empower
        marginalized sectors. Although the Philippine education system has made
        progress through curricular reforms, enduring challenges still impede
        improvement. Recent initiatives aim to reinforce national identity and
        cultural heritage by integrating historical perspectives into the
        curriculum, yet significant gaps in resource allocation and
        infrastructure persist—especially in rural and marginalized areas.
        Therefore, a comprehensive reevaluation of policy measures is essential
        to address these disparities, as equitable educational opportunities are
        crucial for the nation's development.
      </>,
    ],
  },
  {
    title: "Based on the Perspective of Education",
    adv: [
      <>
        the significant progress in public education accessibility due to
        policies like the{" "}
        <Good>
          Universal Access to Quality Tertiary Education Act (RA 10931)
        </Good>
        , which provides free higher education in state universities and
        colleges.
      </>,
    ],
    dis: [
      <>
        the potential{" "}
        <Bad>
          politicization or government propaganda within the education system
        </Bad>
        . Rizal would likely critique instances where curricula might overly
        align with political agendas or historical narratives that suppress
        critical thought and autonomy, emphasizing the need for education to
        encourage independent and analytical thinking rather than passive
        acceptance. Educational reforms are driven by neoliberal and political
        agendas, which shaped the educational system. These changes often
        emphasize market-oriented skills and standardized curricula—measures
        that can limit opportunities for independent inquiry and critical
        thought, potentially aligning with concerns about government propaganda
        influencing classroom instruction.
      </>,
    ],
  },
  {
    title: "Based on the Contributions to Educational Reform",
    adv: [
      <>
        the <Good>educational reforms, such as the K-12 program</Good>,
        recognizing its intent to align Philippine education with international
        standards and its goal of holistic student development, as well as a
        step towards accessible quality education.
      </>,
    ],
    dis: [
      <>
        the continued{" "}
        <Bad>heavy reliance on rote memorization and standardized testing</Bad>{" "}
        exemplified by high-stakes exams such as the National Achievement Test
        (NAT), which often limit creativity and discourage genuine intellectual
        engagement.
      </>,
    ],
  },
];

export default function Section3() {
  return (
    <div className="m-8 space-y-8">
      <div>
        <h1 className="font-[PlayfairDisplay] text-[2rem] tracking-wide">
          If Rizal Returned: A Reflection on Modern Education
        </h1>
        <p>
          Rizal's reaction and perspective on the current state of education in
          the Philippines.
        </p>
      </div>
      <p className="text-justify px-10">
        If José Rizal were alive today, he would likely express a{" "}
        <strong>mix of hope and disappointment</strong> in the current state of
        the Philippine education system. Rizal's advocacy for education as a
        tool for national development and liberation would resonate with ongoing
        efforts toward educational reforms, but he would also be deeply critical
        of persistent challenges that continue to hinder progress.
      </p>
      <div>
        <div className="flex">
          <div className="space-y-4  basis-1/2">
            <h2 className="text-[1.5rem] italic text-center">
              Rizal Will be <strong>Happy</strong> about:
            </h2>
            <div className="flex justify-center">
              <img src={HappyRizal} className="max-h-[400px]" />
            </div>
          </div>
          <div className="space-y-4 basis-1/2 px-10">
            <h2 className="text-[1.5rem] italic text-center">
              Rizal Will be <strong>Sad</strong> about:
            </h2>
            <div className="flex justify-center">
              <img src={SadRizal} className="max-h-[400px]" />
            </div>
          </div>
        </div>
        {dis_adv.map((item, index) => {
          return (
            <DividedLists
              key={index}
              title={item.title}
              adv={item.adv}
              dis={item.dis}
            />
          );
        })}
      </div>
      <div className="mt-8 space-y-4 flex flex-col items-center">
        <h2 className="font-bold text-[1.5rem] my-6 text-center">
          Summary: Power of Education
        </h2>
        <div className="space-y-4 max-w-[550px] text-justify">
          <p>
            In conclusion, José Rizal's vision for education as a foundation for
            national progress remains deeply relevant today. While current
            reforms and initiatives reflect his ideals of fostering Filipino
            identity and accessible education, the enduring challenges of
            inequality, politicization, and limited critical engagement
            highlight the need for continued reform.
          </p>
          <p>
            Addressing these gaps requires not only structural changes but also
            a renewed commitment to Rizal's values—patriotism, critical
            thinking, and social responsibility. By upholding these principles,
            the Philippine education system can move closer to Rizal's dream of
            an empowered, enlightened, and united nation.
          </p>
        </div>
      </div>
    </div>
  );
}
