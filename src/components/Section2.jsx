import Card from "./ui/Card";
import Noli from "/noli.jpg";
import ElFili from "/elfili.jpg";
import LusterToMotherland from "/luster_to_motherland.jpg";
import JPRKid from "/jpr_kid.jpg";
import Javentud from "/javentud.png";

const literary_works = [
  {
    title: "Memoirs of a Student in Manila",
    image: JPRKid,
    type: "Autobiographical Essay",
    instance:
      '"I don\'t want to amuse myself by narrating the whacks that I suffered nor describe what I felt when I received the first beating on the hand. Some envied me and others pitied me."',
    perspective:
      "Rizal's desire to reform education was fueled by his own experiences as a student in the colonial system, where he endured discrimination, harsh discipline, and a rigid curriculum that stifled creativity",
  },
  {
    title: "Por la Educación Recibe Lustre la Patria",
    image: LusterToMotherland,
    type: "Poem",
    instance:
      '"Man\'s placid repose and earthly life. To education he dedicates Because of her, art and science are born Man; and as from the high mount above. The pure rivulet flows, undulates, So education beyond measure Gives the Country tranquility secure."',
    perspective:
      'Rizal links education to a nation\'s transformation, believing it can elevate a country from barbarism to greatness and turn "savages into champions," emphasizing education as essential for nation-building and progress.',
  },
  {
    title: "Noli Me Tangere",
    image: Noli,
    type: "Novel",
    instance:
      "After returning to San Diego, Crisostomo Ibarra proposes the establishment of a modern school to promote education among the Filipino youth. His vision is not just academic excellence, but also the empowerment of Filipinos through enlightenment and critical thinking.",
    perspective:
      "Through his efforts to establish a school in San Diego, Ibarra symbolizes Rizal's vision of enlightened, socially responsible leadership through education.",
  },
  {
    title: "El Filibusterismo",
    image: ElFili,
    type: "Novel",
    instance:
      "Isagani's reaction to the creation of the new university. Isagani, who is a student with idealistic views, initially sees the university as a means of advancing Filipino education. However, he becomes disillusioned when he realizes that the institution is designed to reinforce the Spanish colonial agenda rather than nurture a sense of national identity or moral responsibility among Filipinos.",
    perspective:
      "Rizal critiques colonial education, highlighting through characters like Simoun and Isagani how education, lacking moral and national awareness, can be corrupted.",
  },
  {
    title: "A la Juventud Filipina",
    image: Javentud,
    type: "Poem",
    instance:
      "\"Come down with pleasing light. Of art and science to the fight, O youth, and there untie. The chains that heavy lie, Your spirit free to blight. See how in flaming zone Amid the shadows thrown, The Spaniard'a holy hand A crown's resplendent band Proffers to this Indian land.\"",
    perspective:
      "This reflects Rizal’s vision of education as a liberating force, urging the youth to use knowledge in art and science to break the chains of oppression and uplift the nation.",
  },
];

export default function Section2() {
  return (
    <div className="m-8 space-y-8">
      <div>
        <h1 className="font-[PlayfairDisplay] text-[2rem] tracking-wide">
          Education as a Tool for Nationalism: Rizal's Vision for the Filipino
          People
        </h1>
        <p>
          Rizal's contribution to education sector and vision of power through
          education.
        </p>
      </div>
      <div>
        <h2 className="font-bold text-[1.5rem]">Based on Literary Works...</h2>
        <div className="flex flex-wrap justify-center gap-10 mt-8">
          {literary_works.map((work, index) => {
            return (
              <Card
                key={index}
                title={work.title}
                type={work.type}
                image={work.image}
                instance={work.instance}
                perspective={work.perspective}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-8 space-y-4 flex flex-col items-center">
        <h2 className="font-bold text-[1.5rem] my-6 text-center">
          Summary: Power of Education
        </h2>
        <div className="space-y-4 max-w-[550px] text-justify">
          <p>
            Dr. José Rizal, one of the Philippines’ most revered national
            heroes, saw education as a vital force for national awakening and
            reform. More than just learning facts, Rizal envisioned education as
            a way to shape character, promote dignity, and inspire love of
            country.
          </p>
          <p>
            His fight for a better educational system reflected his belief that{" "}
            <strong>
              knowledge could liberate the minds and hearts of Filipinos
            </strong>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
