import UST from "/UST.png";
import ATENEO from "/ATENEO.png";

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
          <h2 className="font-bold text-[1.5rem]">
            Colonial Influence and Religious Power
          </h2>
          <div className="flex mt-4">
            <div className="flex flex-col items-center basis-1/2 relative pr-10">
              <img src={UST} alt="UST" />
              <p className="italic font-[PlayfairDisplay] absolute top-15 text-black text-[1.2rem]">
                University of Sto. Tomas, 1611
              </p>
            </div>
            <div className="flex flex-col basis-1/2 justify-center pr-10 pb-10">
              <ul className="space-y-8 text-justify">
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
          <div className="flex justify-center text-[1.2rem]">
            <p className="text-center max-w-[70%] my-7">
              This created a system where education was more about{" "}
              <strong>reinforcing colonial power and religious values</strong>{" "}
              than developing critical or practical skills.
            </p>
          </div>
          <h2 className="font-bold text-[1.5rem]">Language as a Barrier</h2>
          <div className="flex flex-row-reverse">
            <div className="flex flex-col items-center basis-1/2 relative pl-10 bottom-10">
              <img src={ATENEO} alt="ATENEO" />
              <p className="italic font-[PlayfairDisplay] absolute top-15 text-black text-[1.2rem]">
                Ateneo de Manila, 1859
              </p>
            </div>
            <div className="flex flex-col basis-1/2 justify-center pl-10 relative">
              <ul className="space-y-14 text-justify pb-15">
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
          <h2 className="font-bold text-[1.5rem] mt-[-15px] mb-6">
            Who Got Educated—and Who Didn't
          </h2>
          <div className="flex gap-15">
            <ul className="space-y-2 text-justify">
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
            <ul className="space-y-2 text-justify">
              <li>Even those who reached higher education faced limits:</li>
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
          <div className="flex justify-center text-center my-7">
            <p className="max-w-[70%]">
              This approach favored{" "}
              <strong>rote memorization over critical thinking</strong>,
              creating educated Filipinos who couldn't challenge the system that
              controlled them.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
