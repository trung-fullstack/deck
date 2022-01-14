interface Props {
  value: number;
  name: string;
  namePlural: string;
}

export default function CounterCard({ value, name, namePlural }: Props) {
  return (
    <div
      className="
        mx-2
        bg-black
        text-white
        border-yellow-light
        border
        flex
        flex-col
        justify-center
        items-center
        w-[180px]
        h-[112px]"
    >
      <div className="text-4xl">{value}</div>
      <div>
        <div>{`${value > 1 ? namePlural : name} Left`}</div>
      </div>
    </div>
  );
}
