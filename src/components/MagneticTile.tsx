import * as React from "react";

type MagneticTileProps = {};

export const MagneticTile: React.FC<MagneticTileProps> = (props) => {
  return (
    <button
      style={{
        width: 450,
        height: 275,
        backgroundColor: "red",
      }}
    >
      Magnetic tile stuff
    </button>
  );
};
