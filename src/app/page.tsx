import { Container } from "./components/Container";
import { GameProps } from "@/utils/types/game";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRightSquare } from "react-icons/bs";
import { Input } from "./components/Input";
import { GameCard } from "./components/GameCard";

async function getGame() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 320 } }
    );

    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

async function getGamesData() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, {
      next: { revalidate: 320 },
    });

    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Home() {
  const game: GameProps = await getGame();
  const data: GameProps[] = await getGamesData();

  return (
    <main className="w-full h-screen bg-gradient-to-bl from-stone-100 via-transparent to-yellow-100">
      <Container>
        <h1 className="text-center font-bold text-3xl py-4 mb-5">
          We have all the games you like!
        </h1>
        <Link href={`/game/${game.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="w-full max-h-96 h-96 relative rounded-lg ">
              <div className="absolute z-20 bottom-0 p-3 flex justify-center items-center">
                <p className="text-xl italic text-white mr-4">{game.title}</p>
                <BsArrowRightSquare size={24} color="white" />
              </div>
              <Image
                src={game.image_url}
                alt={game.title}
                priority={true}
                fill={true}
                quality={100}
                className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
              />
            </div>
          </section>
        </Link>
        <Input />

        <h2 className="text-lg font-bold mt-8 mb-5 ">
          Games you can get to know!
        </h2>

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
            <GameCard key={item.id} data={item} />
          ))}
        </section>
      </Container>
    </main>
  );
}
