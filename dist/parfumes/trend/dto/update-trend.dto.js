"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTrendDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_trend_dto_1 = require("./create-trend.dto");
class UpdateTrendDto extends (0, mapped_types_1.PartialType)(create_trend_dto_1.CreateTrendDto) {
}
exports.UpdateTrendDto = UpdateTrendDto;
//# sourceMappingURL=update-trend.dto.js.map