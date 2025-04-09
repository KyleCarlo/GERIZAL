export default function DividedLists({ title, adv, dis }) {
  return (
    <>
      <h3 className="text-[1.1rem] my-4 text-center italic font-bold">
        {title}
      </h3>
      <div className="flex">
        <ul className="basis-1/2 list-disc px-10 text-justify space-y-4">
          {adv.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <ul className="basis-1/2 list-disc px-10 text-justify space-y-4">
          {dis.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
