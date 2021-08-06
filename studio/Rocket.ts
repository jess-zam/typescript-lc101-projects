import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {

    name:string;
    totalCapacityKg:number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name:string,totalCapacityKg:number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    //Methods

    //returns the sum of all items using each item's massKg property
    sumMass(items:Payload[]):number{
        let sum:number = 0;
        for(let i = 0; i < items.length; i++){
            sum += items[i].massKg;
        }
        return sum;
    }

    //uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    currentMassKg():number{
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    //returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    canAdd(item:Payload):boolean{
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    }

    //uses this.canAdd() to see if another item can be added, if true adds cargo to this.cargoItems and returns true
    //if false returns false
    addCargo(cargo:Cargo):boolean{
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    addAstronaut(astronaut:Astronaut):boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }

}