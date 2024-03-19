// export class Ingredient{
//     public name: string;
//     public amount: number;

//     constructor(name:string, amount:number ){
//         this.name = name;
//         this.amount = amount;
//     }
// }

// Other way to define model which is shortcut.
// It will automatically give us properties with the names we specify here as argument names and will automatically assign the values we recieve in this constructor to these newly created properties.
export class Ingredient{
    constructor(public name: string, public amount: number){}
}