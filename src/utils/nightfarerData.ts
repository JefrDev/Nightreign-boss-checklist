
export interface Boss {
    title: string;
    expedition: string;
    name: string;
    completed: boolean;
}


const nightfarerData: Record<string, Boss[]> = {
  wylder: [
    { name: "heolstor", title: "The Nightlord", expedition: "Night Aspect", completed: false },
    { name: "maris", title: "Fathom of the Night", expedition: "Augur", completed: true },
    { name: "fulghor", title: "Champion of the Nightglow", expedition: "Darkdrift Knight", completed: false },
    { name: "gladius", title: "Beast of Night", expedition: "Tricephalos", completed: true },
    { name: "gnoster", title: "Wisdom of Night", expedition: "Sentient Pest", completed: false },
    { name: "caligo", title: "Miasma of Night", expedition: "Night of the Miasma", completed: true },
    { name: "adel", title: "Baron of Night", expedition: "Gaping Jaw", completed: false },
    { name: "libra", title: "Creature of Night", expedition: "Equilibrious Beast", completed: true }
  ],
  guardian: [
    { name: "heolstor", title: "The Nightlord", expedition: "Night Aspect", completed: true },
    { name: "maris", title: "Fathom of the Night", expedition: "Augur", completed: false },
    { name: "fulghor", title: "Champion of the Nightglow", expedition: "Darkdrift Knight", completed: false },
    { name: "gladius", title: "Beast of Night", expedition: "Tricephalos", completed: true },
    { name: "gnoster", title: "Wisdom of Night", expedition: "Sentient Pest", completed: true },
    { name: "caligo", title: "Miasma of Night", expedition: "Night of the Miasma", completed: false },
    { name: "adel", title: "Baron of Night", expedition: "Gaping Jaw", completed: false },
    { name: "libra", title: "Creature of Night", expedition: "Equilibrious Beast", completed: true }
  ],
  ironeye: [
    { name: "heolstor", title: "The Nightlord", expedition: "Night Aspect", completed: false },
    { name: "maris", title: "Fathom of the Night", expedition: "Augur", completed: true },
    { name: "fulghor", title: "Champion of the Nightglow", expedition: "Darkdrift Knight", completed: true },
    { name: "gladius", title: "Beast of Night", expedition: "Tricephalos", completed: false },
    { name: "gnoster", title: "Wisdom of Night", expedition: "Sentient Pest", completed: false },
    { name: "caligo", title: "Miasma of Night", expedition: "Night of the Miasma", completed: true },
    { name: "adel", title: "Baron of Night", expedition: "Gaping Jaw", completed: false },
    { name: "libra", title: "Creature of Night", expedition: "Equilibrious Beast", completed: false }
  ],
  duchess: [
    { name: "heolstor", title: "The Nightlord", expedition: "Night Aspect", completed: false },
    { name: "maris", title: "Fathom of the Night", expedition: "Augur", completed: false },
    { name: "fulghor", title: "Champion of the Nightglow", expedition: "Darkdrift Knight", completed: true },
    { name: "gladius", title: "Beast of Night", expedition: "Tricephalos", completed: true },
    { name: "gnoster", title: "Wisdom of Night", expedition: "Sentient Pest", completed: false },
    { name: "caligo", title: "Miasma of Night", expedition: "Night of the Miasma", completed: false },
    { name: "adel", title: "Baron of Night", expedition: "Gaping Jaw", completed: true },
    { name: "libra", title: "Creature of Night", expedition: "Equilibrious Beast", completed: false }
  ],
  raider: [
    { name: "heolstor", title: "The Nightlord", expedition: "Night Aspect", completed: true },
    { name: "maris", title: "Fathom of the Night", expedition: "Augur", completed: false },
    { name: "fulghor", title: "Champion of the Nightglow", expedition: "Darkdrift Knight", completed: false },
    { name: "gladius", title: "Beast of Night", expedition: "Tricephalos", completed: true },
    { name: "gnoster", title: "Wisdom of Night", expedition: "Sentient Pest", completed: true },
    { name: "caligo", title: "Miasma of Night", expedition: "Night of the Miasma", completed: false },
    { name: "adel", title: "Baron of Night", expedition: "Gaping Jaw", completed: false },
    { name: "libra", title: "Creature of Night", expedition: "Equilibrious Beast", completed: false }
  ],
  revenant: [
    { name: "heolstor", title: "The Nightlord", expedition: "Night Aspect", completed: false },
    { name: "maris", title: "Fathom of the Night", expedition: "Augur", completed: true },
    { name: "fulghor", title: "Champion of the Nightglow", expedition: "Darkdrift Knight", completed: false },
    { name: "gladius", title: "Beast of Night", expedition: "Tricephalos", completed: true },
    { name: "gnoster", title: "Wisdom of Night", expedition: "Sentient Pest", completed: false },
    { name: "caligo", title: "Miasma of Night", expedition: "Night of the Miasma", completed: true },
    { name: "adel", title: "Baron of Night", expedition: "Gaping Jaw", completed: false },
    { name: "libra", title: "Creature of Night", expedition: "Equilibrious Beast", completed: true }
  ],
  recluse: [
    { name: "heolstor", title: "The Nightlord", expedition: "Night Aspect", completed: false },
    { name: "maris", title: "Fathom of the Night", expedition: "Augur", completed: false },
    { name: "fulghor", title: "Champion of the Nightglow", expedition: "Darkdrift Knight", completed: true },
    { name: "gladius", title: "Beast of Night", expedition: "Tricephalos", completed: false },
    { name: "gnoster", title: "Wisdom of Night", expedition: "Sentient Pest", completed: true },
    { name: "caligo", title: "Miasma of Night", expedition: "Night of the Miasma", completed: false },
    { name: "adel", title: "Baron of Night", expedition: "Gaping Jaw", completed: true },
    { name: "libra", title: "Creature of Night", expedition: "Equilibrious Beast", completed: false }
  ],
  executor: [
    { name: "heolstor", title: "The Nightlord", expedition: "Night Aspect", completed: false },
    { name: "maris", title: "Fathom of the Night", expedition: "Augur", completed: true },
    { name: "fulghor", title: "Champion of the Nightglow", expedition: "Darkdrift Knight", completed: false },
    { name: "gladius", title: "Beast of Night", expedition: "Tricephalos", completed: false },
    { name: "gnoster", title: "Wisdom of Night", expedition: "Sentient Pest", completed: false },
    { name: "caligo", title: "Miasma of Night", expedition: "Night of the Miasma", completed: true },
    { name: "adel", title: "Baron of Night", expedition: "Gaping Jaw", completed: true },
    { name: "libra", title: "Creature of Night", expedition: "Equilibrious Beast", completed: false }
  ]
};

export function getNightfarerInfo(nightfarerName: string): Boss[] | undefined {
  return nightfarerData[nightfarerName];
}
