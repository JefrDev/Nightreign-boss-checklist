// Map of boss data
export interface Nightfarer {
  name: string;
  done: boolean;
}

export interface BossInfo {
  title: string;
  expedition: string;
  nightfarers: Nightfarer[];
}

const bossData: Record<string, BossInfo> = {
  heolstor: {
    title: "The Nightlord",
    expedition: "Night Aspect",
    nightfarers: [
      { name: "Wylder", done: false },
      { name: "Guardian", done: true },
      { name: "Ironeye", done: false },
      { name: "Duchess", done: false },
      { name: "Raider", done: true },
      { name: "Revenant", done: false },
      { name: "Recluse", done: false },
      { name: "Executor", done: false }
    ]
  },
  maris: {
    title: "Fathom of the Night",
    expedition: "Augur",
    nightfarers: [
      { name: "Wylder", done: true },
      { name: "Guardian", done: false },
      { name: "Ironeye", done: true },
      { name: "Duchess", done: false },
      { name: "Raider", done: false },
      { name: "Revenant", done: true },
      { name: "Recluse", done: false },
      { name: "Executor", done: true }
    ]
  },
  fulghor: {
    title: "Champion of the Nightglow",
    expedition: "Darkdrift Knight",
    nightfarers: [
      { name: "Wylder", done: false },
      { name: "Guardian", done: false },
      { name: "Ironeye", done: true },
      { name: "Duchess", done: true },
      { name: "Raider", done: false },
      { name: "Revenant", done: false },
      { name: "Recluse", done: true },
      { name: "Executor", done: false }
    ]
  },
  gladius: {
    title: "Beast of Night",
    expedition: "Tricephalos",
    nightfarers: [
      { name: "Wylder", done: true },
      { name: "Guardian", done: false },
      { name: "Ironeye", done: false },
      { name: "Duchess", done: true },
      { name: "Raider", done: false },
      { name: "Revenant", done: true },
      { name: "Recluse", done: false },
      { name: "Executor", done: false }
    ]
  },
  gnoster: {
    title: "Wisdom of Night",
    expedition: "Sentient Pest",
    nightfarers: [
      { name: "Wylder", done: false },
      { name: "Guardian", done: true },
      { name: "Ironeye", done: false },
      { name: "Duchess", done: false },
      { name: "Raider", done: true },
      { name: "Revenant", done: false },
      { name: "Recluse", done: true },
      { name: "Executor", done: false }
    ]
  },
  caligo: {
    title: "Miasma of Night",
    expedition: "Night of the Miasma",
    nightfarers: [
      { name: "Wylder", done: true },
      { name: "Guardian", done: false },
      { name: "Ironeye", done: false },
      { name: "Duchess", done: false },
      { name: "Raider", done: true },
      { name: "Revenant", done: true },
      { name: "Recluse", done: false },
      { name: "Executor", done: false }
    ]
  },
  adel: {
    title: "Baron of Night",
    expedition: "Gaping Jaw",
    nightfarers: [
      { name: "Wylder", done: false },
      { name: "Guardian", done: false },
      { name: "Ironeye", done: true },
      { name: "Duchess", done: true },
      { name: "Raider", done: false },
      { name: "Revenant", done: false },
      { name: "Recluse", done: true },
      { name: "Executor", done: true }
    ]
  },
  libra: {
    title: "Creature of Night",
    expedition: "Equilibrious Beast",
    nightfarers: [
      { name: "Wylder", done: true },
      { name: "Guardian", done: true },
      { name: "Ironeye", done: false },
      { name: "Duchess", done: false },
      { name: "Raider", done: false },
      { name: "Revenant", done: true },
      { name: "Recluse", done: false },
      { name: "Executor", done: false }
    ]
  }
};

export function getBossInfo(bossName: string): BossInfo | undefined {
  return bossData[bossName];
}
