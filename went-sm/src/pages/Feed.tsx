import React, { useEffect, useRef, useState } from "react";

const resizeableGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing || !containerRef.current) return;

      const container = containerRef.current;
      const offsetRight =
        container.offsetWidth -
        container.offsetWidth / 3 -
        (e.clientX - container.offsetLeft);

      container.style.gridTemplateColumns = `${
        e.clientX + container.offsetWidth / 3
      }px 5px ${offsetRight}px`;
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.body.style.cursor = "default";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);
  return (
    <div className="min-h-screen bg-amber-300 flex">
      <div className="min-h-screen w-[29%]"></div>
      <div className="min-h-screen w-[1%] bg-black"></div>
      <div
        ref={containerRef}
        className="grid w-[90%] grid-cols-[1fr_5px_1fr] h-screen"
      >
        <div className="overflow-auto">
          <h2>1st div</h2>
        </div>
        <div
          className="bg-black cursor-col-resize w-1.25"
          onMouseDown={() => {
            setIsResizing(true);
            document.body.style.cursor = "col-resize";
          }}
        ></div>
        <div className="overflow-auto">
          <h2>2nd div</h2>
        </div>
      </div>
    </div>
  );
};

export default resizeableGrid;
