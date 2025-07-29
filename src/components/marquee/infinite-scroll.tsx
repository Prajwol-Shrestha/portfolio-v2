import Typography from "../ui/Typography";

interface IProps {
  list: {
    label: string;
    image: string;
  }[];
}

export default function InfiniteScroll({ list }: IProps) {
  const twoTimesList = [...list, ...list];

  return (
    <div className="overflow-hidden mask">
      <div className="scroll-track flex gap-8 md:gap-12 lg:gap-18 py-4 w-max">
        {twoTimesList.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 cursor-default opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-500"
          >
            <img src={item.image} alt={item.label} className="w-8 h-8" />
            <Typography variant={"body1"} className="capitalize font-semibold">
              {item.label}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
