"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    addNewProduct(prodTitle, prodDesc, price, likesFtnOrNo) {
        const computedId = this.productsService.insertProduct(prodTitle, prodDesc, price, likesFtnOrNo);
        return { id: computedId };
    }
    getAllProducts() {
        return this.productsService.fetchProducts();
    }
    getAProduct(prodId) {
        return this.productsService.fetchSingleProduct(prodId);
    }
    updateMyProduct(prodId, prodTitle, prodDesc, price) { }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('title')),
    __param(1, common_1.Body('desc')),
    __param(2, common_1.Body('price')),
    __param(3, common_1.Body('likesFtnOrNo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Boolean]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "addNewProduct", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getAllProducts", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getAProduct", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body('title')), __param(2, common_1.Body('description')), __param(3, common_1.Body('price')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "updateMyProduct", null);
ProductsController = __decorate([
    common_1.Controller('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map