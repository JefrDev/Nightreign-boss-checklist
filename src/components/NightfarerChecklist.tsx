import "./NightfarerChecklist.css";
import { type Boss } from "../utils/nightfarerData";
import { useEffect, useState } from "react";

interface Props {
  nightfarerName: string;
  bosses: Boss[];
}

function NightfarerChecklist({ nightfarerName, bosses }: Props) {
  const [bossDone, setBossDone] = useState<Boss[]>([]);

  useEffect(() => {
    setBossDone(bosses ?? []);
  }, [nightfarerName]);

  return (
    <div className="checklistBox">
      {bossDone.map((boss) => {
        return (
          <label className="checklistLabel">
            <input
              type="checkbox"
              checked={boss.completed}
              id={boss.name}
            ></input>
            {boss.name}, {boss.title}
          </label>
        );
      })}
    </div>
  );
}

export default NightfarerChecklist;
