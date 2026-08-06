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
exports.AdminActionsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const admin_actions_service_1 = require("./admin-actions.service");
const create_admin_action_dto_1 = require("./dto/create-admin-action.dto");
const update_admin_action_dto_1 = require("./dto/update-admin-action.dto");
let AdminActionsController = class AdminActionsController {
    adminActionsService;
    constructor(adminActionsService) {
        this.adminActionsService = adminActionsService;
    }
    allProducts() {
        return 'All products are here!';
    }
    uploadProduct(body, file) {
        return this.adminActionsService.uploadProduct(body, file);
    }
    updateProduct(category, id, updatableProduct, file) {
        return this.adminActionsService.updateProduct(category, id, updatableProduct, file);
    }
    deleteProduct(category, id) {
        return this.adminActionsService.deleteProduct(category, id);
    }
};
exports.AdminActionsController = AdminActionsController;
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminActionsController.prototype, "allProducts", null);
__decorate([
    (0, common_1.Post)('/product/new'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_action_dto_1.CreateProductDto,
        admin_actions_service_1.UploadedFileDto]),
    __metadata("design:returntype", void 0)
], AdminActionsController.prototype, "uploadProduct", null);
__decorate([
    (0, common_1.Patch)('/product/:category/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Param)('category')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_admin_action_dto_1.UpdateProductDto,
        admin_actions_service_1.UploadedFileDto]),
    __metadata("design:returntype", void 0)
], AdminActionsController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)('product/:category/:id'),
    __param(0, (0, common_1.Param)('category')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AdminActionsController.prototype, "deleteProduct", null);
exports.AdminActionsController = AdminActionsController = __decorate([
    (0, common_1.Controller)('admin-actions'),
    __metadata("design:paramtypes", [admin_actions_service_1.AdminActionsService])
], AdminActionsController);
//# sourceMappingURL=admin-actions.controller.js.map