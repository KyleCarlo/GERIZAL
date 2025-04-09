export default function CarouselCard({ title, image, section, influence }) {
  return (
    <div className="flex rounded-lg overflow-hidden flex-wrap justify-center items-center">
      <div className="min-w-[300px] basis-1/3 h-full flex justify-center">
        <img src={image} alt={title} className="h-[300px] object-cover" />
      </div>
      <div className="min-w-[300px] basis-2/3 flex flex-col justify-center items-center gap-4 px-10 text-justify">
        <h3 className="font-bold italic text-[1.2rem]">{title}</h3>
        <p>{section}</p>
        <p>
          <strong>Rizal's Influence:</strong> {influence}
        </p>
      </div>
    </div>
  );
}
