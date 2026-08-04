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
exports.TrendController = void 0;
const common_1 = require("@nestjs/common");
const trend_service_1 = require("./trend.service");
const create_trend_dto_1 = require("./dto/create-trend.dto");
const update_trend_dto_1 = require("./dto/update-trend.dto");
let TrendController = class TrendController {
    trendService;
    constructor(trendService) {
        this.trendService = trendService;
    }
    create(createTrendDto) {
        return this.trendService.create(createTrendDto);
    }
    findAll() {
        return this.trendService.findAll();
    }
    findOne(id) {
        return this.trendService.findOne(+id);
    }
    update(id, updateTrendDto) {
        return this.trendService.update(+id, updateTrendDto);
    }
    remove(id) {
        return this.trendService.remove(+id);
    }
};
exports.TrendController = TrendController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_trend_dto_1.CreateTrendDto]),
    __metadata("design:returntype", void 0)
], TrendController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TrendController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TrendController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_trend_dto_1.UpdateTrendDto]),
    __metadata("design:returntype", void 0)
], TrendController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TrendController.prototype, "remove", null);
exports.TrendController = TrendController = __decorate([
    (0, common_1.Controller)('trend'),
    __metadata("design:paramtypes", [trend_service_1.TrendService])
], TrendController);
//# sourceMappingURL=trend.controller.js.map