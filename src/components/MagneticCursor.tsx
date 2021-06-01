import * as React from "react";
import styles from "./MagneticCursor.module.scss";

type MagneticCursorProps = {
  magnet?: HTMLElement | null;
  magnetRect?: DOMRect | null;
  theme?: "light" | "dark";

  size?: number;
  width?: number;
  height?: number;
  radius?: number;
};

export const MagneticCursor: React.FC<MagneticCursorProps> = (props) => {
  const {
    theme = "light",
    magnet = null,
    magnetRect = magnet ? magnet.getBoundingClientRect() : null,
    size = 24,
    width = magnetRect ? magnetRect.width : size,
    height = magnetRect ? magnetRect.height : size,
    radius = magnet ? magnet.style.borderRadius : size / 2,
  } = props;

  const cursorDiv = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    const moveListener = (event: MouseEvent) => {
      if (!cursorDiv.current) return;

      cursorDiv.current.style.left = event.offsetX as unknown as string;
      cursorDiv.current.style.top = event.offsetY as unknown as string;
    };

    window.addEventListener("mousemove", moveListener);

    return () => void window.removeEventListener("mousemove", moveListener);
  }, []);

  return (
    <div
      ref={cursorDiv}
      className={[styles.MagneticCursor].join(" ")}
      style={{
        width,
        height,
        borderRadius: radius,
      }}
    ></div>
  );
};
