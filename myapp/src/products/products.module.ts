import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller"
import { ProductsService } from "./products.service";

//Must supply this with a Module Decorator to tell NestJS this is a Module
@Module({
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule{

}