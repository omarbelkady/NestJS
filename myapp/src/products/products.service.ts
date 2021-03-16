import { Injectable, NotFoundException } from "@nestjs/common";
//importing out product type
import { Product } from "./product.model";

//To use dependency injection I use the decorator @Injectable
@Injectable()
export class ProductsService{
    /*
    making the product array have the private access modifier so that it is only useable inside the service
    listing the products type as an Array of products and initializing it to an empty array
    Also our class methods are the only ones able to interract with our service
    This ensures we can never edit or directly tap into products without going through a method
    A Method ensures that we always follow certain steps for editing or directly tapping into products
    */
    private products: Product[] = [];

    /*
    
    constructor(public id: string, public title: string, public desc: string, public likesFtnOrNo: boolean, public price: number, public likesBD: boolean){
        /*this.id = id;
        this.title = title;
        this.description = desc;
        this.likesFtnOrNo = likesFtnOrNo;
        this.price = price;
        this.likesBD = likesBD;
        
        No need to do this because typescript does this for me already
        */
    
    
    


    //insert a product method and no need to add a :string to tell TSC that I am returning a string because TS has type inference
    insertProduct(title: string, desc: string, price: number, likesFtnOrNo: boolean) {
        const prodId = Math.random().toString();
        const newProd = new Product(prodId,title, desc, likesFtnOrNo, price);
        this.products.push(newProd);
        return prodId;
    }

    fetchProducts(){
        /*
        I can return it like this but remember Arrays/Object are reference types in JS not primitive types
        I actually am returning a pointer to the same list in memory. I am essentially using a 
        controller(the returner of my products) that permits me to access products despite 
        it being private and lets me directly modify products

        I need to pull off a copy of products but the slice method is not good practice

        Instead, I return a new array and wrapping the argument into square brackets and 
        to prevent me of getting a nested Array, I use the spread operator to pull off all the products
        into a 1d array
        */
        return [...this.products];
    }

    fetchSingleProduct(myprodId: string){
        /*
        identifying the product and getting it by an id
        find takes a function as an argument and returns a boolean value
        */
        //const product = this.products.find((myprod)=> myprod.id === myprodId);
        //if(!product){
            //raise a NotFoundException which NestJS will then return a 404 response
        //    throw new NotFoundException("Sorry there is not product with this search criteria");
        //}
        const myprod = this.findMyProduct(myprodId)[0];
        return {...myprod};
    }

    //updating The PRoduct
    updateMyProduct(myprodId: string, title: string, description: string, price: number){
        /* I will use destructuring instead

        const myprod = this.findMyProduct(myprodId)[0];
        //getting the index
        const myindex = this.findMyProduct(myprodId)[0];

        */
        const [myprod,myindex] = this.findMyProduct(myprodId);

        //copy of the existing product
        const theUpdatedProd = {...myprod}

        //if there is a title set it
        if(title){
            theUpdatedProd.title = title;
        }

        //if there is a description set it
        if(description){
            theUpdatedProd.desc = description;
        }
        /*
        setting the products for the given index and taking the old product and merging it with new product data
        then setting title to title description to description price to price etc..

        I must make sure I do not override existing data because the user can sometimes not give me a description or a price just a title let's say
        */

        //if there is an updated price set it
        if(price){
            theUpdatedProd.price = price;
        }
     
        this.products[myindex] = theUpdatedProd;
    }
    //remove a prodct
    deleteAProduct(prodId: string){
        //get the product
        const index = this.findMyProduct(prodId)[1];
        //splice means take that index and remove that element
        this.products.splice(index,1)
    }

    //return me an array aka tuple actually in tsc 
    private findMyProduct(id: string) : [Product, number]{
        //I want the id instead of the product so I will change find to findIndex
        //const myProduct = this.products.find(aproduct => aproduct.id === id);
        const myProductIndex = this.products.findIndex(aproduct => aproduct.id === id);

        //retreiving my product
        const myprod = this.products[myProductIndex];
        if(!myprod){
            throw new NotFoundException("Couldn't find your product Sir")
        }
        //return the product and its index
        return [myprod, myProductIndex];
    }

    
};