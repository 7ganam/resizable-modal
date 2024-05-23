import React from "react";
import { ResizableBox, ResizeCallbackData } from "react-resizable";
import "react-resizable/css/styles.css";

const Resizable = ({
  width,
  setWidth,
  height,
  setHeight,
  xPosition,
  yPosition,
  windowWidth,
  children,
  windowPadding,
  className,
}: {
  width: number;
  setWidth: (width: number) => void;
  height: number;
  setHeight: (height: number) => void;
  xPosition: number;
  yPosition: number;
  windowWidth: number;
  children: React.ReactNode;
  windowPadding: number;
  className: string;
}) => {
  const maxWidth = windowWidth - xPosition - windowPadding; //maxWidth used to prevent overflow when the modal is resized out of the window

  const handleResize = (
    event: React.SyntheticEvent,
    data: ResizeCallbackData
  ) => {
    if (data.size.width > maxWidth) {
      setWidth(maxWidth - 1); //snap the width back so the modal doesn't overflow

      setTimeout(() => {
        // this is to work around a bug in react-resizable
        setWidth(maxWidth);
      }, 10);

      return;
    }
    setWidth(data.size.width);

    //we can do the same for height to prevent the modal from being resized out of the window
    const _maxHeight = window.innerHeight - yPosition - windowPadding; // skipped for now.
    setHeight(data.size.height);
  };

  return (
    <ResizableBox
      axis="both"
      width={width}
      height={height}
      onResize={handleResize}
      resizeHandles={["se"]}
      minConstraints={[100, 150]}
      className={className}
    >
      {children}
    </ResizableBox>
  );
};

export default Resizable;
