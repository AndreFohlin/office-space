export const Buildings = [{
    id: 1,
    name: 'Brewery',
    desc: 'Grog producing building',
    requirements: {
      gold: 20,
      restricted: true
    },
    effect: {
      grog: 1
    }
  },
  {
    id: 2,
    name: 'Grog bar',
    desc: 'Convert grog into gold',
    requirements: {
      gold: 50,
      buildings: [1,3],
      restricted: true
    },
    effect: {
      gold: 1
    }
  },
  {
    id: 3,
    name: 'Grog warehouse',
    desc: 'Increase grog storage',
    requirements: {
      gold: 50,
      restricted: false
    },
    effect: {
      grogLimit: 100
    }
  },
  {
    id: 4,
    name: 'Ship yard',
    desc: 'Unlocks ships',
    requirements: {
      gold: 150,
      restricted: true
    },
    unlocks: ["Seafaring"]
  },
  {
    id: 5,
    name: 'Trading house',
    desc: 'Unlocks trade agreements',
    requirements: {
      gold: 50,
      restricted: true
    },
    effect: {
    },
    unlocks: ["Trade agreements"]
  }
];
