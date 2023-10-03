import { Container } from "../components/Container";
import Image from "next/image";
import user from "public/user.jpg";
import { FaShareAlt } from "react-icons/fa";
import { FavouriteCard } from "./components/FavouriteCard";
export default function Profile() {
  return (
    <main className="w-full text-black">
      <Container>
        <section className="mt-8 mb-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row">
          <div className="w-full flex items-center gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-normal">
            <Image
              src={user}
              alt="user"
              className="rounded-full w-56 h-56 object-cover"
            />
            <h1 className="font-bold text-2xl">Peanut Mochi</h1>
          </div>

          <div className="sm:absolute top-0 right-0 gap-3 flex items-center justify-center">
            <button className="bg-[#451780] rounded-lg px-4 py-2 text-white">
              Settings
            </button>
            <button className="bg-[#451780] rounded-lg  px-4 py-2">
              <FaShareAlt size={23} color="white" />
            </button>
          </div>
        </section>

        <section className="flex flex-wrap gap-5 flex-col md:flex-row">
          <div className="flex-grow flex-wrap">
            <FavouriteCard />
          </div>
          <div className="flex-grow flex-wrap">
            <FavouriteCard />
          </div>
          <div className="flex-grow flex-wrap">
            <FavouriteCard />
          </div>
        </section>
      </Container>
    </main>
  );
}
