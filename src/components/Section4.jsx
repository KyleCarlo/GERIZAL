import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/Carousel";
import CarouselCard from "./ui/CarouselCard";
import Policy1 from "/policy1.jpg";
import Policy2 from "/policy2.png";
import Policy3 from "/policy3.jpg";
import Policy4 from "/policy4.png";
import Policy5 from "/policy5.png";
import Policy6 from "/policy6.png";
import activism from "/activism.png";
import diplomacy from "/diplomacy.jpg";
import initiative from "/initiative.jpg";

const policies = [
  {
    title: "Republic Act No. 232 (Education Act of 1982)",
    image: Policy1,
    section: (
      <>
        <strong>Section 3:</strong> “The State shall promote the right of every
        individual to relevant quality education, regardless of sex, age, creed,
        socio-economic status, physical and mental conditions, racial or ethnic
        origin, political or other affiliation. The State shall therefore
        promote and maintain equality of access to education as well as the
        enjoyment of the benefits of education by all its citizens.”
      </>
    ),
    influence: (
      <>
        The Education Act of 1982 established the legal framework for the
        Philippine education system, ensuring that all Filipinos have access to
        quality education. This law emphasizes the importance of education in
        shaping individuals who can contribute meaningfully to society. Rizal
        believed that education was the key to national development and
        self-determination, as evident in his writings and personal efforts to
        promote learning among Filipinos. By institutionalizing education as a
        fundamental right, this law reflects his vision of an enlightened and
        empowered citizenry.
      </>
    ),
  },
  {
    title: "Republic Act No. 7722 (Higher Education Act of 1994)",
    image: Policy2,
    section: (
      <>
        <strong>Section 2:</strong> “The State shall likewise ensure and protect
        academic freedom and shall promote its exercise and observance for the
        continuing intellectual growth, the advancement of learning and
        research, the development of responsible and effective leadership, the
        education of high-level and middle-level professionals, and the
        enrichment of our historical and cultural heritage.”
      </>
    ),
    influence: (
      <>
        “This law created the Commission on Higher Education (CHED), which
        oversees the development and regulation of higher education institutions
        in the country. It aims to make higher education more accessible,
        relevant, and globally competitive. Rizal was a strong advocate of
        higher education, believing that advanced learning would enable
        Filipinos to uplift themselves and contribute to national progress. By
        ensuring that universities and colleges provide quality education, this
        law upholds Rizal's belief in the transformative power of learning.”
      </>
    ),
  },
  {
    title:
      "Republic Act No. 6655 (Free Public Secondary Education Act of 1988)",
    image: Policy3,
    section: (
      <>
        <strong>Section 2:</strong> “The State shall likewise ensure and protect
        academic freedom and shall promote its exercise and observance for the
        continuing intellectual growth, the advancement of learning and
        research, the development of responsible and effective leadership, the
        education of high-level and middle-level professionals, and the
        enrichment of our historical and cultural heritage.”
      </>
    ),
    influence: (
      <>
        This law created the Commission on Higher Education (CHED), which
        oversees the development and regulation of higher education institutions
        in the country. It aims to make higher education more accessible,
        relevant, and globally competitive. Rizal was a strong advocate of
        higher education, believing that advanced learning would enable
        Filipinos to uplift themselves and contribute to national progress. By
        ensuring that universities and colleges provide quality education, this
        law upholds Rizal's belief in the transformative power of learning.
      </>
    ),
  },
  {
    title:
      "Republic Act No. 10931 (Universal Access to Quality Tertiary Education Act of 2017)",
    image: Policy4,
    section: (
      <>
        <strong>Sections 4 and 5:</strong> “All Filipino students who are either
        currently enrolled or shall enroll in courses leading to a bachelor's
        degree... shall be exempt from paying tuition and other school fees.”
      </>
    ),
    influence: (
      <>
        This law grants free tuition and other fees in state universities and
        colleges (SUCs), making higher education more accessible to students
        from different socio-economic backgrounds. Rizal envisioned an education
        system that would empower Filipinos, regardless of wealth or status. His
        own experiences studying abroad reinforced his belief that higher
        education should not be limited to the elite. By providing financial
        support for tertiary education, this law echoes Rizal's dream of
        education as a tool for social mobility and national progress.
      </>
    ),
  },
  {
    title: "Republic Act No. 1425 (Rizal Law, 1956)",
    image: Policy5,
    section: (
      <>
        <strong>Section 1:</strong> “Courses on the life, works, and writings of
        José Rizal, particularly his novels Noli Me Tangere and El
        Filibusterismo... shall be included in the curricula of all schools...”
      </>
    ),
    influence: (
      <>
        The Rizal Law mandates the inclusion of Noli Me Tangere and El
        Filibusterismo in the curriculum of Philippine schools. This law ensures
        that students learn about Rizal's life, works, and ideals, reinforcing
        the values of patriotism, nationalism, and critical thinking. Rizal
        believed that education should not only develop intellectual skills but
        also cultivate a sense of national identity and responsibility. By
        requiring the study of his writings, this law preserves his teachings
        and encourages students to emulate his dedication to education and
        reform.
      </>
    ),
  },
  {
    title:
      "Republic Act No. 10533 (K-12 Program, Enhanced Basic Education Act of 2013)",
    image: Policy6,
    section: (
      <>
        <strong>Section: 2</strong> “Every graduate of basic education shall be
        an empowered individual who has learned... the foundation for learning
        throughout life, the competence to engage in work and be productive...”
      </>
    ),
    influence: (
      <>
        The K-12 program extends basic education to 12 years, aligning with
        international education standards. This reform aims to provide students
        with a well-rounded education, equipping them with the necessary
        knowledge and skills for higher education, employment, or
        entrepreneurship. Rizal valued comprehensive education that nurtured
        both intellectual and practical skills. He believed that a strong
        educational foundation was essential for national progress. By
        strengthening the curriculum and ensuring that students are
        well-prepared for the future, the K-12 program reinforces Rizal’s vision
        of education as a lifelong and holistic process.
      </>
    ),
  },
];

export default function Section4({ ref }) {
  return (
    <div className="m-8 space-y-8" ref={ref}>
      <div>
        <h1 className="font-[PlayfairDisplay] text-[2rem] tracking-wide">
          Rizal's Legacy in Education: Shaping Modern Filipino Nationalisms
        </h1>
        <p>
          Rizal's influence to educational sector that shaped Filipinos current
          perspective on Philippine Nationalism.
        </p>
      </div>
      <h2 className="font-bold text-[1.5rem]">
        Educational Policies Reflecting Rizal's Perspective
      </h2>
      <p className="text-justify px-10">
        The educational system in the Philippines has been shaped by various
        policies that align with José Rizal’s belief in education as a powerful
        tool for empowerment, national development, and social progress. These
        laws and reforms embody Rizal’s advocacy for accessible, high-quality
        education that fosters intellectual and moral growth among Filipinos.
      </p>
      <div className="flex justify-center">
        <Carousel className="w-11/12">
          <CarouselContent>
            {policies.map((policy, index) => {
              return (
                <CarouselItem key={index}>
                  <CarouselCard
                    title={policy.title}
                    image={policy.image}
                    section={policy.section}
                    influence={policy.influence}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <h2 className="font-bold text-[1.5rem]">
        Modern Impact of Rizal's Contribution to Education
      </h2>
      <div className="flex">
        <div className="basis-1/2 flex flex-col gap-4 px-10 text-justify">
          <h3 className="font-bold italic text-[1.1rem]">
            Student-led Activism
          </h3>
          <p>
            Student-led activism has played a vital role in shaping Philippine
            nationalism by fostering public discourse and challenging oppressive
            governance. Historically, student movements have been at the
            forefront of advocating for democratic principles and social
            justice. During the Duterte administration, activism became more
            pronounced due to widespread opposition against human rights
            violations. Students mobilized to protest issues such as
            extrajudicial killings, suppression of press freedom, and the
            militarization of campuses, reinforcing their role as defenders of
            democracy and human rights.
          </p>
          <p>
            Rizal believed that education equips individuals with the critical
            thinking skills necessary to challenge oppression. His writings in
            Noli Me Tangere and El Filibusterismo depict students fighting for
            educational reforms and social justice, similar to how modern
            student activists resist human rights violations and authoritarian
            rule.
          </p>
        </div>
        <div className="basis-1/2 flex justify-center items-center pr-10">
          <img src={activism} alt="Student-led Activism" />
        </div>
      </div>

      <div className="flex flex-row-reverse">
        <div className="basis-1/2 flex flex-col gap-4 px-10 text-justify">
          <h3 className="font-bold italic text-[1.1rem] text-end">
            Philippine Cultural Diplomacy
          </h3>
          <p>
            Cultural diplomacy has been a key strategy in strengthening the
            Philippines' global influence while preserving its national
            identity. As discussed by Wong (2016), the country has engaged in
            diplomatic exchanges that promote Filipino culture on the
            international stage, particularly through its participation in
            ASEAN. These initiatives have fostered stronger ties with
            neighboring nations and enhanced the country's cultural presence
            worldwide. Additionally, modern tools such as digital media have
            been leveraged to expand the reach of Philippine cultural diplomacy,
            allowing the country to engage strategically with international
            institutions and promote its heritage globally.
          </p>
          <p>
            Rizal believed in reform through peaceful means, advocating for
            diplomatic dialogue instead of violent uprisings. His approach
            mirrors modern cultural diplomacy, where nations use cultural
            exchange and dialogue to resolve conflicts and foster cooperation.
            The ASEAN cultural initiatives promote unity among Southeast Asian
            countries, preventing tensions and reinforcing shared histories—an
            approach Rizal would have supported.
          </p>
        </div>
        <div className="basis-1/2 flex justify-center items-center pl-10">
          <img src={diplomacy} alt="Philippine Cultural Diplomacy" />
        </div>
      </div>
      <div className="flex">
        <div className="basis-1/2 flex flex-col gap-4 px-10 text-justify">
          <h3 className="font-bold italic text-[1.1rem]">
            Digital Initiatives for Philippine Nationalism
          </h3>
          <p>
            Several digital initiatives in the Philippines share a common goal
            of historical preservation, combating misinformation, and promoting
            digital nationalism. This includes but is not limited to Project
            Gunita, the digital Martial Law Museum, and Vera Files. These
            platforms use modern technology to spread reliable information.
            These initiatives are a product of José Rizal's lasting influence on
            education. Rizal believed that an enlightened citizenry, equipped
            with knowledge and critical thinking, was essential for national
            progress.
          </p>
          <p>
            By preserving historical truth and ensuring access to factual
            information, these digital platforms reflect Rizal's vision of
            education as a tool for empowerment, social reform, and national
            consciousness. They embody his belief that history should not be
            forgotten, and that a well-informed society is crucial in resisting
            oppression and shaping the nation's future.
          </p>
        </div>
        <div className="basis-1/2 flex justify-center items-center pr-10">
          <img
            src={initiative}
            alt="Digital Initiatives for Philippine Nationalism"
          />
        </div>
      </div>

      <div className="mt-8 space-y-4 flex flex-col items-center">
        <h2 className="font-bold text-[1.5rem] my-6 text-center">
          Summary: Educational Policies and Modern Movements
        </h2>
        <div className="space-y-4 max-w-[550px] text-justify">
          <p>
            Rizal's contributions to the education sector have significantly
            influenced Filipinos' current perspective on Philippine nationalism.
            His belief that education is the key to national progress has shaped
            policies that ensure access to quality education for all,
            reinforcing the idea that an enlightened and educated citizenry is
            essential for national development.
          </p>
          <p>
            Modern initiatives such as student-led activism, cultural diplomacy,
            and digital history preservation reflect Rizal's ideals,
            demonstrating how education empowers Filipinos to engage in
            nation-building. By fostering critical thinking, civic awareness,
            and historical consciousness, education continues to shape
            nationalism in the Philippines, echoing Rizal's vision of an
            informed and proactive society. His legacy remains relevant in the
            way Filipinos advocate for democracy, social justice, and cultural
            preservation, proving that education remains a cornerstone of
            national identity and progress.
          </p>
        </div>
      </div>
    </div>
  );
}
