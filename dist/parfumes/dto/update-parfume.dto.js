"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateParfumeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_parfume_dto_1 = require("./create-parfume.dto");
class UpdateParfumeDto extends (0, mapped_types_1.PartialType)(create_parfume_dto_1.CreateParfumeDto) {
}
exports.UpdateParfumeDto = UpdateParfumeDto;
//# sourceMappingURL=update-parfume.dto.js.map