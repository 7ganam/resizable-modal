"use client";
import React, { useState } from "react";
import DraggableResizable from "./components/DraggableResizable";
import * as Dialog from "@radix-ui/react-dialog";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="">
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger asChild>
          <button className="m-5 p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Open Modal
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center">
            <Dialog.Content className="w-1 h-1">
              <DraggableResizable
                windowPadding={10}
                className="bg-white rounded-md overflow-hidden"
              >
                <div className="w-[100%] h-[100%] flex flex-col rounded-md overflow-hidden">
                  <Dialog.Title className="text-md font-bold ">
                    <div className="flex bg-blue-400">
                      <div className="handle grow select-none truncate overflow-hidden whitespace-nowrap cursor-move text-black text-md p-1">
                        This is a title
                      </div>
                      <button
                        className="w-[30px] flex items-center justify-center cursor-pointer"
                        onClick={() => setIsOpen(false)}
                      >
                        ❌
                      </button>
                    </div>
                  </Dialog.Title>
                  <Dialog.Description className="grow  overflow-hidden p-3">
                    <div className="grow-1 text-black">
                      Radix UI has many advantages which do not provide by other
                      libraries. You do not need to configure Radix UI with
                      nextjs. You can install the Radix component based on your
                      project requirement. You can choose tailwind, stitches, or
                      any other CSS-in-JS library or write CSS from scratch.
                    </div>
                  </Dialog.Description>
                  <Dialog.Close asChild className="p-3">
                    <div className="p-3 flex w-[100%] justify-end">
                      <button className="px-4 py-2  text-white rounded bg-red-400 hover:bg-red-700">
                        Close
                      </button>
                    </div>
                  </Dialog.Close>
                </div>
              </DraggableResizable>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </main>
  );
}
