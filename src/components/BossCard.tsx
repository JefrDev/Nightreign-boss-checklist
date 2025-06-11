import { useEffect, useState } from "react";
import "./BossCard.css";
import NightfarerChecklist from "./NightfarerChecklist";
import { getNightfarerInfo } from "../utils/nightfarerData";

interface Props {
  nightfarerName: string;
}

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function BossCard({ nightfarerName }: Props) {
  const [bossSrc, setBossSrc] = useState("");
  const nightfarerData = getNightfarerInfo(nightfarerName);

  useEffect(() => {
    import(`../assets/nightfarers/${nightfarerName}.png`).then((img) => {
      setBossSrc(img.default);
    });
  }, [nightfarerName]);

  return (
    <div className="box">
      {bossSrc ? <img src={bossSrc} alt={nightfarerName}></img> : null}

      <h1 className="nightfarerName">{capitalize(nightfarerName)}</h1>
      {nightfarerData ? (
        <NightfarerChecklist
          bosses={nightfarerData}
          nightfarerName={nightfarerName}
        />
      ) : null}
    </div>
  );
}

export default BossCard;
