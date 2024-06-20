"use client";
import React, { useEffect, useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import Resizable from "./Resizable";
import "react-resizable/css/styles.css";

export default function DraggableResizable({
  children,
  windowPadding = 40,
  className,
  modalWidth,
  setModalWidth,
  modalHeight,
  setModalHeight,
  xPosition,
  yPosition,
  setXPosition,
  setYPosition,
  aspectRatio,
}: Readonly<{
  children: React.ReactNode;
  windowPadding: number;
  className: string;
  modalWidth: number;
  setModalWidth: (width: number) => void;
  modalHeight: number;
  setModalHeight: (height: number) => void;
  xPosition: number;
  yPosition: number;
  setXPosition: (x: number) => void;
  setYPosition: (y: number) => void;
  aspectRatio: number;
}>) {
  // two hooks for calculating window's width and height
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    setXPosition(data.x);
    setYPosition(data.y);
  };

  return (
    <Draggable
      bounds={{
        //stop the modal from being dragged out of the window
        left: windowPadding,
        right: windowWidth - modalWidth - windowPadding,
        bottom: windowHeight - modalHeight - windowPadding,
        top: windowPadding,
      }}
      axis="both"
      handle=".handle"
      defaultPosition={{
        //add 1 to 10 random pixels to the x and y position to make new modals appear in different positions
        x: windowWidth / 2 - modalWidth / 2 + Math.floor(Math.random() * 10),
        y: windowHeight / 2 - modalHeight / 2 + Math.floor(Math.random() * 10),
      }}
      scale={1}
      onDrag={handleDrag}
    >
      <div>
        <Resizable
          width={modalWidth}
          setWidth={setModalWidth}
          height={modalHeight}
          setHeight={setModalHeight}
          xPosition={xPosition}
          yPosition={yPosition}
          windowWidth={windowWidth}
          windowPadding={windowPadding}
          className={className}
          aspectRatio={aspectRatio}
        >
          {children}
        </Resizable>
      </div>
    </Draggable>
  );
}
