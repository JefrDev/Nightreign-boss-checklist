import "./NightfarerChecklist.css";

interface Props {
  bossName: string;
}

function NightfarerChecklist({ bossName }: Props) {
  return <p>checklist for {bossName}</p>;
}

export default NightfarerChecklist;
