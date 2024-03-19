// Defining the recipe model/blueprint. This is how our recipe model object will look like when we create it. 
// We can instantiate this class and create new objects based on the setup provided here below.  

export class Recipe {
    // Adding accessor public so that it can be publicly available and used outside of this model class.
    public name: string;
    public description: string;
    public imagePath: string;

    // Adding a constructor so that we can instantiate this with the new keyword and pass the arguments right to the constructor.
    constructor(name: string, desc: string, imagePath:string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}