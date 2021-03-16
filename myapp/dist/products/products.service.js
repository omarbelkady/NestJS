"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const product_model_1 = require("./product.model");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [];
    }
    insertProduct(title, desc, price, likesFtnOrNo) {
        const prodId = Math.random().toString();
        const newProd = new product_model_1.Product(new Date().toString(), title, desc, price, likesFtnOrNo);
        this.products.push(newProd);
        return prodId;
    }
    fetchProducts() {
        return [...this.products];
    }
    fetchSingleProduct(myprodId) {
        const myprod = this.findMyProduct(myprodId)[0];
        return Object.assign({}, myprod);
    }
    updateMyProduct(myprodId, title, description, price) {
        const [myprod, myindex] = this.findMyProduct(myprodId);
        const theUpdatedProd = Object.assign({}, myprod);
        if (title) {
            theUpdatedProd.title = title;
        }
        if (description) {
            theUpdatedProd.desc = description;
        }
        if (price) {
            theUpdatedProd.price = price;
        }
        this.products[myindex] = Object.assign({}, myprod);
    }
    findMyProduct(id) {
        const myProductIndex = this.products.findIndex(aproduct => aproduct.id === id);
        const myprod = this.products[myProductIndex];
        if (!myprod) {
            throw new common_1.NotFoundException("Couldn't find your product Sir");
        }
        return [myprod, myProductIndex];
    }
};
ProductsService = __decorate([
    common_1.Injectable()
], ProductsService);
exports.ProductsService = ProductsService;
;
//# sourceMappingURL=products.service.js.map