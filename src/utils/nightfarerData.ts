export interface Boss {
    title: string;
    expedition: string;
    name: string;
    completed: boolean;
}


const nightfarerData: Record<string, Boss[]> = {
  wylder: [
    { name: "Heolstor", title: "The Nightlord", expedition: "Night Aspect", completed: false },
    { name: "Maris", title: "Fathom of the Night", expedition: "Augur", completed: true },
    { name: "Fulghor", title: "Champion of the Nightglow", expedition: "Darkdrift Knight", completed: false },
    { name: "Gladius", title: "Beast of Night", expedition: "Tricephalos", completed: true },
    { name: "Gnoster", title: "Wisdom of Night", expedition: "Sentient Pest", completed: false },
    { name: "Caligo", title: "Miasma of Night", expedition: "Night of the Miasma", completed: true },
    { name: "Adel", title: "Baron of Night", expedition: "Gaping Jaw", completed: false },
    { name: "Libra", title: "Creature of Night", expedition: "Equilibrious Beast", completed: true }
  ],
  guardian: [
    { name: "Heolstor", title: "The Nightlord", expedition: "Night Aspect", completed: true },
    { name: "Maris", title: "Fathom of the Night", expedition: "Augur", completed: false },
    { name: "Fulghor", title: "Champion of the Nightglow", expedition: "Darkdrift Knight", completed: false },
    { name: "Gladius", title: "Beast of Night", expedition: "Tricephalos", completed: true },
    { name: "Gnoster", title: "Wisdom of Night", expedition: "Sentient Pest", completed: true },
    { name: "Caligo", title: "Miasma of Night", expedition: "Night of the Miasma", completed: false },
    { name: "Adel", title: "Baron of Night", expedition: "Gaping Jaw", completed: false },
    { name: "Libra", title: "Creature of Night", expedition: "Equilibrious Beast", completed: true }
  ],
  ironeye: [
    { name: "Heolstor", title: "The Nightlord", expedition: "Night Aspect", completed: false },
    { name: "Maris", title: "Fathom of the Night", expedition: "Augur", completed: true },
    { name: "Fulghor", title: "Champion of the Nightglow", expedition: "Darkdrift Knight", completed: true },
    { name: "Gladius", title: "Beast of Night", expedition: "Tricephalos", completed: false },
    { name: "Gnoster", title: "Wisdom of Night", expedition: "Sentient Pest", completed: false },
    { name: "Caligo", title: "Miasma of Night", expedition: "Night of the Miasma", completed: true },
    { name: "Adel", title: "Baron of Night", expedition: "Gaping Jaw", completed: false },
    { name: "Libra", title: "Creature of Night", expedition: "Equilibrious Beast", completed: false }
  ],
  duchess: [
    { name: "Heolstor", title: "The Nightlord", expedition: "Night Aspect", completed: false },
    { name: "Maris", title: "Fathom of the Night", expedition: "Augur", completed: false },
    { name: "Fulghor", title: "Champion of the Nightglow", expedition: "Darkdrift Knight", completed: true },
    { name: "Gladius", title: "Beast of Night", expedition: "Tricephalos", completed: true },
    { name: "Gnoster", title: "Wisdom of Night", expedition: "Sentient Pest", completed: false },
    { name: "Caligo", title: "Miasma of Night", expedition: "Night of the Miasma", completed: false },
    { name: "Adel", title: "Baron of Night", expedition: "Gaping Jaw", completed: true },
    { name: "Libra", title: "Creature of Night", expedition: "Equilibrious Beast", completed: false }
  ],
  raider: [
    { name: "Heolstor", title: "The Nightlord", expedition: "Night Aspect", completed: true },
    { name: "Maris", title: "Fathom of the Night", expedition: "Augur", completed: false },
    { name: "Fulghor", title: "Champion of the Nightglow", expedition: "Darkdrift Knight", completed: false },
    { name: "Gladius", title: "Beast of Night", expedition: "Tricephalos", completed: true },
    { name: "Gnoster", title: "Wisdom of Night", expedition: "Sentient Pest", completed: true },
    { name: "Caligo", title: "Miasma of Night", expedition: "Night of the Miasma", completed: false },
    { name: "Adel", title: "Baron of Night", expedition: "Gaping Jaw", completed: false },
    { name: "Libra", title: "Creature of Night", expedition: "Equilibrious Beast", completed: false }
  ],
  revenant: [
    { name: "Heolstor", title: "The Nightlord", expedition: "Night Aspect", completed: false },
    { name: "Maris", title: "Fathom of the Night", expedition: "Augur", completed: true },
    { name: "Fulghor", title: "Champion of the Nightglow", expedition: "Darkdrift Knight", completed: false },
    { name: "Gladius", title: "Beast of Night", expedition: "Tricephalos", completed: true },
    { name: "Gnoster", title: "Wisdom of Night", expedition: "Sentient Pest", completed: false },
    { name: "Caligo", title: "Miasma of Night", expedition: "Night of the Miasma", completed: true },
    { name: "Adel", title: "Baron of Night", expedition: "Gaping Jaw", completed: false },
    { name: "Libra", title: "Creature of Night", expedition: "Equilibrious Beast", completed: true }
  ],
  recluse: [
    { name: "Heolstor", title: "The Nightlord", expedition: "Night Aspect", completed: false },
    { name: "Maris", title: "Fathom of the Night", expedition: "Augur", completed: false },
    { name: "Fulghor", title: "Champion of the Nightglow", expedition: "Darkdrift Knight", completed: true },
    { name: "Gladius", title: "Beast of Night", expedition: "Tricephalos", completed: false },
    { name: "Gnoster", title: "Wisdom of Night", expedition: "Sentient Pest", completed: true },
    { name: "Caligo", title: "Miasma of Night", expedition: "Night of the Miasma", completed: false },
    { name: "Adel", title: "Baron of Night", expedition: "Gaping Jaw", completed: true },
    { name: "Libra", title: "Creature of Night", expedition: "Equilibrious Beast", completed: false }
  ],
  executor: [
    { name: "Heolstor", title: "The Nightlord", expedition: "Night Aspect", completed: false },
    { name: "Maris", title: "Fathom of the Night", expedition: "Augur", completed: true },
    { name: "Fulghor", title: "Champion of the Nightglow", expedition: "Darkdrift Knight", completed: false },
    { name: "Gladius", title: "Beast of Night", expedition: "Tricephalos", completed: false },
    { name: "Gnoster", title: "Wisdom of Night", expedition: "Sentient Pest", completed: false },
    { name: "Caligo", title: "Miasma of Night", expedition: "Night of the Miasma", completed: true },
    { name: "Adel", title: "Baron of Night", expedition: "Gaping Jaw", completed: true },
    { name: "Libra", title: "Creature of Night", expedition: "Equilibrious Beast", completed: false }
  ]
};

export function getNightfarerInfo(nightfarerName: string): Boss[] | undefined {
  return nightfarerData[nightfarerName];
}
