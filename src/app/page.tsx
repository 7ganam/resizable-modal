"use client";
import React, { useState } from "react";
import DraggableResizable from "./components/Modal/subComponents/DraggableResizable";
import Link from "next/link";
import Modal from "./components/Modal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

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
            <button
              className="m-5 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={() => {
                setIsOpen2(true);
              }}
            >
              Open Modal 2
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
            <Link href="/show">
              <button className="m-5 p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                Open Automatic Show Page
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={"modal 1"}
        initialHeight={400}
        initialWidth={400}
      />

      <Modal
        isOpen={isOpen2}
        setIsOpen={setIsOpen2}
        title={"modal 2"}
        initialWidth={300}
      >
        <div className="grow overflow-hidden p-3">
          <div className="grow-1 ">
            Radix UI has many advantages which do not provide by other
            libraries. You do not need to configure Radix UI with nextjs. You
            can install the Radix component based on your project requirement.
            You can choose tailwind.
          </div>
        </div>
      </Modal>
    </main>
  );
}
