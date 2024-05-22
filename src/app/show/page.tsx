"use client";
import React, { useState } from "react";
import DraggableResizable from "../components/DraggableResizable";
import Link from "next/link";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <main className="">
      <div className="flex flex-col w-[300px] p-10">
        <div className="absolute top-0 left-0">
          <div className="flex flex-col w-[300px] p-10">
            <button
              className="m-5 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Open Modal
            </button>
            <textarea
              id="w3review"
              name="w3review"
              rows={4}
              cols={40}
              className="text-black p-5"
            >
              You can edit this text while the modal is open.
            </textarea>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-center overflow-hidden  h-[100vh]">
        <div className="w-1 h-1 ">
          <DraggableResizable
            windowPadding={40}
            className={`bg-white rounded-md overflow-hidden ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="w-[100%] h-[100%] flex flex-col rounded-md overflow-hidden">
              <div className="text-md font-bold ">
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
              </div>
              <div className="grow  overflow-hidden p-3">
                <div className="grow-1 text-black">
                  Radix UI has many advantages which do not provide by other
                  libraries. You do not need to configure Radix UI with nextjs.
                  You can install the Radix component based on your project
                  requirement. You can choose tailwind.
                </div>
              </div>
            </div>
          </DraggableResizable>
        </div>
      </div>
    </main>
  );
}
