import { useEffect, useState } from "react";
import "./BossCard.css";
import { getBossInfo } from "../utils/bossData";

interface Props {
  bossName: string;
}

function BossCard({ bossName }: Props) {
  const [bossSrc, setBossSrc] = useState("");
  const bossInfo = getBossInfo(bossName);

  useEffect(() => {
    import(`../assets/bosses/${bossName}.png`).then((img) => {
      setBossSrc(img.default);
    });
  }, [bossName]);

  return (
    <div className="box">
      <img src={bossSrc} alt={bossName}></img>
      <p>
        {bossName}: {bossInfo?.title}
      </p>
      <h1>{bossInfo?.expedition}</h1>
    </div>
  );
}

export default BossCard;
