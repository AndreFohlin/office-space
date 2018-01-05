export class Job {
    id: number;
    name: string;
    timeLeft: number;
    callback: (Job) => void;

    constructor(id:number, name:string, time:number, callback:(Job) => void){
        this.id = id;
        this.name = name;
        this.timeLeft = time;
        this.callback = callback;
    }
}