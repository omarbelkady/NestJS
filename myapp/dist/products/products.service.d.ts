import { Product } from "./product.model";
export declare class ProductsService {
    private products;
    insertProduct(title: string, desc: string, price: number, likesFtnOrNo: boolean): string;
    fetchProducts(): Product[];
    fetchSingleProduct(myprodId: string): {
        id: string;
        title: string;
        desc: string;
        likesFtnOrNo: Boolean;
        price: number;
    };
    updateMyProduct(myprodId: string, title: string, description: string, price: number): void;
    private findMyProduct;
}
