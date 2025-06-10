import "./NightfarerChecklist.css";
import { getBossInfo, type Nightfarer } from "../utils/bossData";
import { useEffect, useState } from "react";

interface Props {
  bossName: string;
}

function NightfarerChecklist({ bossName }: Props) {
  const [nightfarerDone, setNightfarerDone] = useState<Nightfarer[]>([]);

  useEffect(() => {
    const bossInfo = getBossInfo(bossName);
    setNightfarerDone(bossInfo?.nightfarers ?? []);
  }, [bossName]);

  return (
    <div className="checklistBox">
      {nightfarerDone.map((nightfarer) => {
        return (
          <p>
            <input type="checkbox" checked={nightfarer.done}></input>
            {nightfarer.name}
          </p>
        );
      })}
    </div>
  );
}

export default NightfarerChecklist;
