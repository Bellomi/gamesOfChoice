import Link from "next/link";
import Image from "next/image";
import { BiRightArrowCircle } from "react-icons/bi";
import { GameProps } from "@/utils/types/game";

interface GameCardProps {
  data: GameProps;
}
export function GameCard({ data }: GameCardProps) {
  return (
    <Link href={`/game/${data.id}`}>
      <section className="w-full bg-slate-100 rounded-lg p-4 mb-5">
        <div className="relative w-full h-56 hover:scale-105 transition-all duration-300">
          <Image
            className="rounded-lg object-cover"
            src={data.image_url}
            alt={data.title}
            fill={true}
            quality={100}
            sizes="(max-w:768px) 100vw, (max-w:1200px) 44vw"
          />
        </div>
        <div className="flex items-center mt-4 justify-between">
          <p className="text-sm font-bold px-2 text-blue-850 text-ellipsis truncate whitespace-nowrap overflow-hidden">
            {data.title}
          </p>
          <BiRightArrowCircle size={20} />
        </div>
      </section>
    </Link>
  );
}
