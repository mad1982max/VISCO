import { useRef, useEffect } from "react";
import "./canvas.css";

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvasObj = canvasRef.current;
    const ctx = canvasObj.getContext("2d");
  }, []);

  return (
    <canvas id="myChart" ref={canvasRef} width="400" height="400"></canvas>
  );
};

export default Canvas;
