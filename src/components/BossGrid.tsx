import BossCard from "./BossCard";
import "./BossGrid.css";

function BossGrid() {
  return (
    <div className="grid">
      <BossCard nightfarerName="wylder"></BossCard>
      <BossCard nightfarerName="guardian"></BossCard>
      <BossCard nightfarerName="ironeye"></BossCard>
      <BossCard nightfarerName="duchess"></BossCard>
      <BossCard nightfarerName="raider"></BossCard>
      <BossCard nightfarerName="revenant"></BossCard>
      <BossCard nightfarerName="recluse"></BossCard>
      <BossCard nightfarerName="executor"></BossCard>
    </div>
  );
}

export default BossGrid;
