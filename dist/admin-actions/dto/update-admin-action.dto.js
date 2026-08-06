"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_admin_action_dto_1 = require("./create-admin-action.dto");
class UpdateProductDto extends (0, mapped_types_1.PartialType)(create_admin_action_dto_1.CreateProductDto) {
}
exports.UpdateProductDto = UpdateProductDto;
//# sourceMappingURL=update-admin-action.dto.js.map