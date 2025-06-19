type CardProps = {
  image: string;
  title: string;
  description: string;
  textColor?: "black" | "white";
  titleColor?: string;
  imageHeight?: number;
};

export default function Card({
  image,
  title,
  description,
  textColor = "black",
  titleColor = textColor,
  imageHeight = 48,
}: CardProps) {
  return (
    <div className="max-w-full bg-transparent overflow-hidden  group">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110`}
        />
      </div>
      <div className={`p-4 pl-0 text-${titleColor}`}>
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <p className="text-[14px] opacity-60">{description}</p>
      </div>
    </div>
  );
}
