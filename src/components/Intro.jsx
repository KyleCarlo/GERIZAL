import UST from "/UST.png";
import ATENEO from "/ATENEO.png";
import Condition from "/Condition.png";
import Rizal from "/Rizal.png";

export default function Intro() {
  return (
    <>
      <div className="pt-8">
        <h1 className="font-[PlayfairDisplay] text-[2rem] tracking-wide">
          19th-Century Philippine Education: A System Under Control
        </h1>
        <p>
          The condition of education sector in the Philippines during the 19th
          Century.
        </p>
        <div className="m-8">
          <div className="flex mt-4">
            <div className="flex flex-col justify-center items-center basis-1/2 relative pr-10">
              <img src={UST} alt="UST" />
            </div>
            <div className="flex flex-col basis-1/2 justify-center pr-10 pb-10">
              <ul className="space-y-8 text-justify">
                <h2 className="font-bold text-[1.5rem] text-end">
                  Colonial Influence and Religious Power
                </h2>
                <li>
                  During the 19th century, education in the Philippines operated
                  under heavy religious and colonial control. Spanish friars ran
                  most schools and dictated what students learned.
                </li>
                <li>
                  In <strong>urban centers like Manila</strong>, elite schools
                  such as the{" "}
                  <span className="italic font-bold">
                    University of Santo Tomas
                  </span>
                  , and{" "}
                  <span className="italic font-bold">Ateneo de Manila</span>{" "}
                  offered formal educaition—mostly to sons of Spanish and
                  mestizo families.
                </li>
                <li>
                  In provincial areas, education was limited to parish schools
                  run by friars. These schools focused mainly on religious
                  instruction, especially Catholic catechism.
                </li>
                <li>
                  The government had little direct role. Religious orders set
                  the tone for how and what students learned.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center text-[1.1rem]">
            <p className="text-center max-w-[60%] my-7">
              This created a system where education was more about{" "}
              <strong>reinforcing colonial power and religious values</strong>{" "}
              than developing critical or practical skills.
            </p>
          </div>

          <div className="flex flex-row-reverse">
            <div className="flex flex-col items-center basis-1/2 relative pl-10 bottom-10">
              <img src={ATENEO} alt="ATENEO" />
            </div>
            <div className="flex flex-col basis-1/2 justify-center pl-10 relative">
              <ul className="space-y-8 text-justify pb-15">
                <h2 className="font-bold text-[1.5rem]">
                  Language as a Barrier
                </h2>
                <li>
                  Education was delivered <strong>in Spanish</strong>, a
                  language most native Filipinos didn't speak. No effort was
                  made to teach in local <strong>dialects</strong>. Students had
                  to <strong>learn Spanish first</strong> just to understand
                  basic lessons.
                </li>
                <li>
                  This barrier didn't just affect comprehension. It{" "}
                  <strong>reinforced class divisions</strong>, cutting off
                  education access for those not fluent in the colonizer's
                  language. Many Filipinos were left behind before they even had
                  the chance to learn.
                </li>
              </ul>
            </div>
          </div>
          <h2 className="font-bold text-[1.5rem] mt-[-15px] mb-6 text-center">
            Who Got Educated—and Who Didn't
          </h2>
          <div className="flex gap-15 px-10">
            <ul className="space-y-2 text-justify basis-1/2">
              <li>Access to education was highly unequal.</li>
              <li>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Wealthy Boys</strong>—mostly of Spanish descent or
                    mestizo families—had the best access.
                  </li>
                  <li>
                    <strong>Girls</strong> were usually excluded from formal
                    schooling.
                  </li>
                  <li>
                    <strong>Poor Filipinos</strong> rarely went beyond basic
                    religious instruction, if any at all.
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="space-y-2 text-justify basis-1/2">
              <li>Even those who reached higher education faced limits.</li>
              <li>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    At UST, medicine was based on outdated theories (like the
                    Galenic model) instead of modern science.
                  </li>
                  <li>
                    Law schools focused strictly on Spanish jurisprudence,
                    without space for reformist or progressive ideas.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex justify-center text-center my-7 text-[1.1rem]">
            <p className="max-w-[70%]">
              This approach favored{" "}
              <strong>rote memorization over critical thinking</strong>,
              creating educated Filipinos who couldn't challenge the system that
              controlled them.
            </p>
          </div>

          <div className="flex items-center">
            <div className="flex flex-col justify-center items-center basis-1/2 relative pr-10 w-1/2">
              <img
                src={Condition}
                alt="Condition of 19th Century Education"
                className=" max-h-[500px]"
              />
            </div>
            <div className="basis-1/2 space-y-8 pr-10">
              <h2 className="basis-1/2 font-bold text-[1.5rem] text-end">
                Infrastructure and Teaching Conditions
              </h2>
              <p className="text-justify">
                Outside a few city schools, the overall system was
                underdeveloped:
              </p>
              <ul className="space-y-4 list-disc list-inside text-justify">
                <li>
                  Many classrooms were makeshift and lacked furniture or
                  blackboards.
                </li>
                <li>Teachers often weren't professionally trained.</li>
                <li>
                  Textbooks and learning materials were scarce, outdated, or
                  entirely absent.
                </li>
              </ul>
              <p className="text-justify">
                In many places, what passed for a school was just a room inside
                a convent or house. Most Filipinos never received even a{" "}
                <strong>basic primary education</strong>. Illiteracy remained
                high, especially in rural areas.
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse items-center">
            <div className="basis-1/2 h-[300px] flex justify-center">
              <img src={Rizal} alt="J.Rizal" className="scale-x-[-1] h-full" />
            </div>
            <div className="basis-1/2">
              <div className="flex justify-center">
                <ul className="space-y-8 text-justify pl-10">
                  <h2 className="font-bold text-[1.5rem] my-8">
                    Seeds of Resistance
                  </h2>
                  <li>
                    This broken education system eventually created its own
                    opposition.
                  </li>
                  <li>
                    Nationalist figures like <strong>Jose Rizal</strong> saw
                    education as a tool for empowerment, not oppression.
                  </li>
                  <li>
                    Rizal's writings called out the{" "}
                    <strong>backwardness and inequality</strong> in Spanish-run
                    schools.
                  </li>
                  <li>
                    Reformers demanded a system that taught in the{" "}
                    <strong>native language</strong>, served the{" "}
                    <strong>whole population</strong>, and encouraged{" "}
                    <strong>scientific thinking and national pride</strong>.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="italic font-bold text-[1.5rem] text-center my-8 font-[PlayfairDisplay]">
              Section Summary
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
