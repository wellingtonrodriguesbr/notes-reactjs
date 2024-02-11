import { useState } from "react";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

import logo from "../public/logo.svg";

interface Notes {
  date: Date;
  content: string;
}

export function App() {
  const [notes, setNotes] = useState<Notes[]>([]);

  return (
    <div className="mx-auto my-12 max-w-screen-2xl space-y-6">
      <img src={logo} alt="Notes NLW Expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque por suas notas..."
          className="bg-transparent w-full text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none border-b border-slate-700 pb-4"
        />
      </form>

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />

        {notes.map((note) => (
          <NoteCard note={note} />
        ))}
      </div>
    </div>
  );
}
