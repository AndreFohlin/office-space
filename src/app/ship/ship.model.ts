export class Ship {
    private id: number;
    public sailing: boolean;
    public name: string;

    constructor(id:number){
        this.id = id;
        this.name = "ship name";
        this.sailing = false;
    }

    getId(): number {
        return this.id;
    }

    


}