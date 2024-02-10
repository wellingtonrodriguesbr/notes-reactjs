export function NoteCard() {
  return (
    <button className="w-full h-full flex flex-col text-left bg-slate-800 rounded-md p-5 space-y-3 overflow-hidden relative border-2 border-slate-800 hover:border-slate-600 focus:border-lime-300 transition-colors outline-none">
      <span className="text-sm font-medium text-slate-300">há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam et aut
        aspernatur illo earum, sit soluta ducimus eveniet minus, rem corrupti
        consequatur cum esse sint. Asperiores rem voluptas pariatur quod?
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
    </button>
  );
}
