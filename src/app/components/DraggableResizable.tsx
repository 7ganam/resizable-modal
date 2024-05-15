"use client";
import React, { useEffect, useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import Resizable from "./Resizable";
import "react-resizable/css/styles.css";

export default function DraggableResizable({
  children,
  windowPadding = 40,
  className,
}: Readonly<{
  children: React.ReactNode;
  windowPadding: number;
  className: string;
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

  // the x and y position of the top left corner of the modal
  const [xPosition, setXPosition] = useState<number>(0);
  const [yPosition, setYPosition] = useState<number>(0);

  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    setXPosition(data.x);
    setYPosition(data.y);
  };

  const [modalWidth, setModalWidth] = useState<number>(200);
  const [modalHeight, setModalHeight] = useState<number>(200);

  return (
    <Draggable
      bounds={{
        //stop the modal from being dragged out of the window
        left: -windowWidth / 2 + windowPadding,
        right: windowWidth / 2 - modalWidth - windowPadding,
        bottom: windowHeight - modalHeight - windowPadding,
        top: windowPadding,
      }}
      axis="both"
      handle=".handle"
      defaultPosition={{
        x: -modalWidth / 2,
        y: windowHeight / 2 - modalHeight / 2,
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
        >
          {children}
        </Resizable>
      </div>
    </Draggable>
  );
}
