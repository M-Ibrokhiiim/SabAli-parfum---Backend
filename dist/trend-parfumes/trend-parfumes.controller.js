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
exports.TrendParfumesController = void 0;
const common_1 = require("@nestjs/common");
const trend_parfumes_service_1 = require("./trend-parfumes.service");
let TrendParfumesController = class TrendParfumesController {
    trendParfumesService;
    constructor(trendParfumesService) {
        this.trendParfumesService = trendParfumesService;
    }
    findAll() {
        return this.trendParfumesService.findAll();
    }
};
exports.TrendParfumesController = TrendParfumesController;
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TrendParfumesController.prototype, "findAll", null);
exports.TrendParfumesController = TrendParfumesController = __decorate([
    (0, common_1.Controller)('trend-parfumes'),
    __metadata("design:paramtypes", [trend_parfumes_service_1.TrendParfumesService])
], TrendParfumesController);
//# sourceMappingURL=trend-parfumes.controller.js.map