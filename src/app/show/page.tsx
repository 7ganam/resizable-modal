"use client";
import React, { useState } from "react";
import Modal from "../components/Modal";

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
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={"modal 1"}
        initialHeight={100}
        initialWidth={400}
      >
        <div className="p-5"> Automatically opened modal</div>
      </Modal>
    </main>
  );
}
