import "./NightfarerChecklist.css";
import { type Boss } from "../utils/nightfarerData";
import { useEffect, useState } from "react";

interface Props {
  nightfarerName: string;
  bosses: Boss[];
}

function NightfarerChecklist({ nightfarerName, bosses }: Props) {
  const [bossDone, setBossDone] = useState<Boss[]>([]);

  const handleFlipCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const bossName = e.target.id;
    const checked = e.target.checked;
    setBossDone((prev) =>
      prev.map((boss) =>
        boss.name === bossName ? { ...boss, completed: checked } : boss
      )
    );
    // TODO: add db functionality for having clicked on a boss
  };

  useEffect(() => {
    setBossDone(bosses ?? []);
  }, [nightfarerName]);

  return (
    <div className="checklistBox">
      {bossDone.map((boss) => {
        return (
          <label key={boss.name} className="checklistLabel">
            <input
              type="checkbox"
              checked={boss.completed}
              id={boss.name}
              onChange={handleFlipCheckbox}
            ></input>
            {boss.name}, {boss.title}
          </label>
        );
      })}
    </div>
  );
}

export default NightfarerChecklist;
