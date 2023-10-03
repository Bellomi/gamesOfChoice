import { GameProps } from "@/utils/types/game";
import { Container } from "@/app/components/Container";
import { Input } from "@/app/components/Input";
import { RiEmotionSadLine } from "react-icons/ri";
import { GameCard } from "@/app/components/GameCard";

async function getData(title: string) {
  try {
    const decodeTitle = decodeURI(title);
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`
    );

    return res.json();
  } catch (e) {
    return null;
  }
}

export default async function Search({
  params: { title },
}: {
  params: {
    title: string;
  };
}) {
  const games: GameProps[] = await getData(title);

  return (
    <main className="w-full text-black">
      <Container>
        <Input />
        <h1 className="font-bold text-xl mt-8 mb-5">
          Look what we found for you!
        </h1>
        {!games && (
          <>
            <p className="text-lg">No games were found... </p>
            <RiEmotionSadLine size={80} />
          </>
        )}

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games && games.map((item) => <GameCard key={item.id} data={item} />)}
        </section>
      </Container>
    </main>
  );
}
