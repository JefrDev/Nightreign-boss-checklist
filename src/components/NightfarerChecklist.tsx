import "./NightfarerChecklist.css";
import { type Nightfarer } from "../utils/bossData";
import { useEffect, useState } from "react";

interface Props {
  bossName: string;
  nightfarers: Nightfarer[];
}

function NightfarerChecklist({ bossName, nightfarers }: Props) {
  const [nightfarerDone, setNightfarerDone] = useState<Nightfarer[]>([]);

  useEffect(() => {
    setNightfarerDone(nightfarers ?? []);
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
