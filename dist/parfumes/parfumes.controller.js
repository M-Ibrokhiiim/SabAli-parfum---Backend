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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParfumesController = void 0;
const common_1 = require("@nestjs/common");
const parfumes_service_1 = require("./parfumes.service");
let ParfumesController = class ParfumesController {
    parfumesService;
    constructor(parfumesService) {
        this.parfumesService = parfumesService;
    }
    getMenParfumes() {
        return this.parfumesService.getMenParfumes();
    }
    getWomenParfumes() {
        return this.parfumesService.getWomenParfumes();
    }
    getMenTrendParfumes() {
        return this.parfumesService.getMenTrendParfumes();
    }
    getWomenTrendParfumes() {
        return this.parfumesService.getWomenTrendParfumes();
    }
};
exports.ParfumesController = ParfumesController;
__decorate([
    (0, common_1.Get)('men'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ParfumesController.prototype, "getMenParfumes", null);
__decorate([
    (0, common_1.Get)('women'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ParfumesController.prototype, "getWomenParfumes", null);
__decorate([
    (0, common_1.Get)('trend/men'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ParfumesController.prototype, "getMenTrendParfumes", null);
__decorate([
    (0, common_1.Get)('trend/women'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ParfumesController.prototype, "getWomenTrendParfumes", null);
exports.ParfumesController = ParfumesController = __decorate([
    (0, common_1.Controller)('parfumes'),
    __metadata("design:paramtypes", [parfumes_service_1.ParfumesService])
], ParfumesController);
//# sourceMappingURL=parfumes.controller.js.map