"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrendService = void 0;
const common_1 = require("@nestjs/common");
let TrendService = class TrendService {
    create(createTrendDto) {
        return 'This action adds a new trend';
    }
    findAll() {
        return `This action returns all trend`;
    }
    findOne(id) {
        return `This action returns a #${id} trend`;
    }
    update(id, updateTrendDto) {
        return `This action updates a #${id} trend`;
    }
    remove(id) {
        return `This action removes a #${id} trend`;
    }
};
exports.TrendService = TrendService;
exports.TrendService = TrendService = __decorate([
    (0, common_1.Injectable)()
], TrendService);
//# sourceMappingURL=trend.service.js.map