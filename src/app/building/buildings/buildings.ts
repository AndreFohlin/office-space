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
    unlocks: [{name: 'Seafaring', description: 'You can now build trading ships and send them on adventures!'}]
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
    unlocks: [{name: 'Trade agreements', description: 'Discovered locations can now be traded with using your ships.'}]
  }
];
