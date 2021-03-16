//what every product must have
export class Product{
   /*
    id: string;
    title: string;
    description: string;
    likesFtnOrNo: boolean;
    price: number;
    likesBD: boolean;

    I can remove the above class field and just add the public access modifier next to my accessor arguments in my constructor
    */
    constructor(
        public id: string, 
        public title: string,
        public desc: string, 
        public likesFtnOrNo: Boolean,
        public price: number)
        {
        /*this.id = id;
        this.title = title;
        this.description = desc;
        this.likesFtnOrNo = likesFtnOrNo;
        this.price = price;
        this.likesBD = likesBD;
        
        No need to do this because typescript does this for me already
        */
    };
}