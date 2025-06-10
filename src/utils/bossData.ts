// Map of boss data
export interface BossInfo {
  title: string;
  expedition: string;
}

const bossData: Record<string, BossInfo> = {
  heolstor: {
    title: "The Nightlord",
    expedition: "Night Aspect",
  },
  maris: {
    title: "Fathom of the Night",
    expedition: "Augur",
  },
};

export function getBossInfo(bossName: string): BossInfo | undefined {
  return bossData[bossName];
}
