export const Buildings = {
    'brewery':{
        name:'Brewery',
        desc:'Grog producing building',
        requirements: {
            gold: 50
        },
        effect: {
            grog: 1
        }
    },
    'bar':{
        name:'Grog bar',
        desc:'Convert grog into gold',
        requirements: {
            gold: 50,
            buildings: ['brewery']
        }, 
        effect: {
            gold: 1
        }
    },
    'touristcenter':{
        name:'Tourist center',
        desc:'Brings tourists',
        requirements: {
            gold: 150
        }, 
        effect: {
        }
    },
    'shipyard': {
        name: 'Ship yard',
        desc: 'Unlocks ships',
        requirements: {
            gold: 150
        }
    }
};