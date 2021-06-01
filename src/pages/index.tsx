import { NextPage } from "next";
import { MagneticCursor } from "../components/MagneticCursor";
import { MagneticTile } from "../components/MagneticTile";

const HomePage: NextPage = (props) => {
  return (
    <div>
      <h1>Hi</h1>
      <MagneticTile />
      <MagneticCursor theme="light" />
    </div>
  );
};

export default HomePage;
