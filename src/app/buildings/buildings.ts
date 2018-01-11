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
    }
};