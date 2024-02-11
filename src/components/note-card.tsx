import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface NoteCardProps {
  note: {
    date: Date;
    content: string;
  };
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="w-full h-full flex flex-col text-left bg-slate-800 rounded-md p-5 space-y-3 overflow-hidden relative border-2 border-slate-800 hover:border-slate-600 focus:border-lime-300 transition-colors outline-none">
          <span className="text-sm font-medium text-slate-300">
            {note.date.toISOString()}
          </span>
          <p className="text-sm leading-6 text-slate-400">{note.content}</p>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />

        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-700 rounded-md w-full min-h-[60vh] max-w-[640px] overflow-hidden flex flex-col justify-between">
          <div className="flex flex-col flex-1 gap-3 p-5">
            <Dialog.Title className="text-sm font-medium text-slate-300">
              Há 2 dias
            </Dialog.Title>
            <Dialog.Description className="mt-4 text-sm leading-6 text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              ratione earum quas consequuntur, tempore dicta necessitatibus et
              voluptatibus corrupti, dolorum porro odit, reprehenderit mollitia
              repudiandae vel quisquam! Eius, porro itaque.
            </Dialog.Description>
          </div>

          <button className="w-full group bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none font-medium">
            Deseja{" "}
            <span className="text-rose-400 group-hover:text-rose-500 transition-colors">
              apagar essa nota
            </span>
            ?
          </button>

          <Dialog.Close asChild>
            <button
              className="absolute top-0 right-0 bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors p-1.5"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
