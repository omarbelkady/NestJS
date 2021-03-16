import { Body, Controller, Post, Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductsService } from "./products.service";

//What turns this into a controller is the @Controller Decorator
//But we want this controller to fire when we make requests to /products
@Controller('products')
export class ProductsController{
    //I want to have an instance of my products Service
    constructor(private readonly productsService: ProductsService){

    }

    //To make a post request and is how I get my products
    @Post()
    //method to add new product
    addNewProduct(
        @Body('title') prodTitle: string, 
        @Body('desc') prodDesc: string,
        @Body('price') price: number,
        @Body('likesFtnOrNo') likesFtnOrNo: boolean
        ){
        const computedId = this.productsService.insertProduct(prodTitle, prodDesc, price, likesFtnOrNo);
        //must return json
        return{id: computedId};        
    }
    
    //Get accepts too few arguments to be used as a decorator here: you forgot the parenthesis
    @Get()
    getAllProducts(){
        return this.productsService.fetchProducts();
    }

    /*
    I want to get a single product now but to create a get method for a single product
    Requires to me have a Get decorator. I can have two methods 
    with the same decorator but any other subsequent methods with the same decorator
    will not execute

    I can't have a body in my get request body. but I can have the :id which tells it 

    I do not know the exact path because its dynamic and I just want to get the value 
    in the path.

    I can get that id thanks to param decorator
    */

    @Get(':id')
    getAProduct(@Param('id') prodId: string){
        //this is how we extract data from the url thanks to the parameter list
        return this.productsService.fetchSingleProduct(prodId)
    }

    /*
    updating a product: accep incoming reqs which give an obj with some updated properties
    then i merge it with the existing product. I will use the Patch Annotation
    I must pass in the id
    */

    @Patch(':id')
    updateMyProduct(@Param('id') prodId: string, @Body('title') prodTitle: string, @Body('description') prodDesc: string, @Body('price') price:number){ 
        this.productsService.updateMyProduct(prodId, prodTitle, prodDesc, price);
        return null;

    }

    //Delete A Product
    @Delete(':id')
    removeProduct(@Param('id') prodId: string){
        this.productsService.deleteAProduct(prodId);
        //forpatching purposes I return null
        return null;
    }

    


}