"use client";
import React, { useState } from "react";
import DraggableResizable from "./subComponents/DraggableResizable";

export default function Modal({
  isOpen,
  setIsOpen,
  initialWidth,
  initialHeight,
  title,
  children,
}: Readonly<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  initialWidth?: number;
  initialHeight?: number;
  title?: string;
  children?: React.ReactNode;
}>) {
  const aspectRatio =
    initialWidth && initialHeight ? initialWidth / initialHeight : 1.618;
  const [modalWidth, setModalWidth] = useState<number>(initialWidth ?? 200);
  const [modalHeight, setModalHeight] = useState<number>(initialHeight ?? 200);

  // the x and y position of the top left corner of the modal
  const [xPosition, setXPosition] = useState<number>(0);
  const [yPosition, setYPosition] = useState<number>(0);

  return (
    <div className="w-1 h-1 absolute top-0 left-0">
      <DraggableResizable
        modalWidth={modalWidth}
        setModalWidth={setModalWidth}
        modalHeight={modalHeight}
        setModalHeight={setModalHeight}
        xPosition={xPosition}
        yPosition={yPosition}
        setXPosition={setXPosition}
        setYPosition={setYPosition}
        windowPadding={40}
        className={`bg-white rounded-md overflow-hidden ${
          isOpen ? "block" : "hidden"
        }`}
        aspectRatio={aspectRatio}
      >
        <div className="w-[100%] h-[100%] flex flex-col rounded-md overflow-hidden">
          <div className="text-md font-bold ">
            <div className="flex bg-blue-400">
              <div className="handle grow select-none truncate overflow-hidden whitespace-nowrap cursor-move text-black text-md p-1">
                {title}
              </div>
              <button
                className="w-[30px] flex items-center justify-center cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                ❌
              </button>
            </div>
          </div>
          <div className="w-full h-full bg-[#1f1f1f]"> {children}</div>
        </div>
      </DraggableResizable>
    </div>
  );
}
