import { ResourceType } from '../../resources/resources'

export const Buildings = [{
    id: 1,
    name: 'Brewery',
    desc: 'Increases 🍺 production by 1',
    requirements: {
      gold: 20,
      restricted: false
    },
    effect: {
      resource: ResourceType.GROG,
      increment: 1
    }
},
  {
    id: 2,
    name: 'Grog warehouse',
    desc: 'Increase the 🍺 limit by 100',
    requirements: {
      gold: 50,
      restricted: false
    },
    effect: {
      grogLimit: 100
    }
  },
  {
    id: 3,
    name: 'Grog bar',
    desc: 'Converts 🍺 to 💰',
    requirements: {
      gold: 50,
      buildings: [1,2],
      restricted: true //Can only be built once
    },
    effect: {
      gold: 1,
      grog: -1
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
      buildings: [4],
      restricted: true
    },
    effect: {
    },
    unlocks: [{name: 'Trade agreements', description: 'Discovered locations can now be traded with using your ships.'}]
  }
];
