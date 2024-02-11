import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ChangeEvent, useState } from "react";

export function NewNoteCard() {
  const [shouldShowTextarea, setShouldShowTextarea] = useState(false);
  const [newNote, setNewNote] = useState("");

  function handleNewNoteInText() {
    setShouldShowTextarea(true);
  }

  function handleContentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    if (e.target.value === "") {
      setShouldShowTextarea(false);
    }
  }

  function handleNewNoteInAudio() {}

  function handleSaveNote() {}

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="w-full h-full flex flex-col text-left bg-slate-700 rounded-md p-5 space-y-3 overflow-hidden relative border-2 border-slate-700 hover:border-slate-600 focus:border-lime-300  transition-colors outline-none">
          <span className="text-sm font-medium text-slate-200">
            Adicionar nota
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Grave uma nota em áudio que será convertida para texto
            automaticamente.
          </p>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />

        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-700 rounded-md w-full min-h-[60vh] max-w-[640px] overflow-hidden flex flex-col justify-between outline-none focus:outline-none">
          <div className="flex flex-col flex-1 gap-3 p-5">
            <Dialog.Title className="text-sm font-medium text-slate-300">
              Adicionar uma nota
            </Dialog.Title>
            {!shouldShowTextarea ? (
              <Dialog.Description className="mt-4 text-sm leading-6 text-slate-400">
                Comece{" "}
                <button
                  onClick={handleNewNoteInAudio}
                  className="font-medium text-lime-400 hover:underline"
                >
                  gravando uma nota
                </button>{" "}
                em aúdio ou se preferir{" "}
                <button
                  onClick={handleNewNoteInText}
                  className="font-medium text-lime-400 hover:underline"
                >
                  utilize apenas texto
                </button>
              </Dialog.Description>
            ) : (
              <textarea
                autoFocus
                className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                onChange={handleContentChange}
              />
            )}
          </div>

          <button
            type="button"
            onClick={handleSaveNote}
            className="w-full bg-lime-400 hover:bg-lime-500 transition-colors py-4 text-center text-sm text-lime-950 outline-none font-semibold"
          >
            Salvar nota
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
