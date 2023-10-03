"use client";
import { FormEvent, useState } from "react";
import { ImSearch } from "react-icons/im";
import { useRouter } from "next/navigation";

export function Input() {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleSearch(e: FormEvent) {
    e.preventDefault();

    if (input === "") return;

    router.push(`/game/search/${input}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="w-full bg-slate-300 my-5 flex gap-2 items-center justify-between rounded-lg p-2"
    >
      <input
        className="bg-slate-300 outline-none w-11/12 "
        type="text"
        placeholder="Searching for a game?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">
        <ImSearch size={18} padding={2} color="#451780" />
      </button>
    </form>
  );
}
