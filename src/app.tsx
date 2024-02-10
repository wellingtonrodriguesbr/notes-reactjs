import logo from "../public/logo.svg";
import { NoteCard } from "./components/note-card";

export function App() {
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
        <div className="w-full h-full bg-slate-700 rounded-md p-5 space-y-3">
          <span className="text-sm font-medium text-slate-200">
            Adicionar nota
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Grave uma nota em áudio que será convertida para texto
            automaticamente.
          </p>
        </div>

        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  );
}
