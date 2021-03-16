import { ProductsService } from "./products.service";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addNewProduct(prodTitle: string, prodDesc: string, price: number, likesFtnOrNo: boolean): {
        id: string;
    };
    getAllProducts(): import("./product.model").Product[];
    getAProduct(prodId: string): {
        id: string;
        title: string;
        desc: string;
        likesFtnOrNo: Boolean;
        price: number;
    };
    updateMyProduct(prodId: string, prodTitle: string, prodDesc: string, price: number): void;
}
