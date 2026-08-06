import { Controller, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AdminActionsService, UploadedFileDto } from './admin-actions.service';
import { CreateProductDto, LoginDto } from './dto/create-admin-action.dto';
import { UpdateProductDto } from './dto/update-admin-action.dto';
import { AdminActionsGuard } from './guards/admin-actions.guard';



@UseGuards(AdminActionsGuard)
@Controller('admin-actions')
export class AdminActionsController {
  constructor(private readonly adminActionsService: AdminActionsService) {}

  // Login
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.adminActionsService.login(loginDto);
  }


  // Product upload
  @Post('/product/new')
  @UseInterceptors(FileInterceptor('image'))
  uploadProduct(
    @Body() body: CreateProductDto,
    @UploadedFile() file?: UploadedFileDto,
  ) {
    return this.adminActionsService.uploadProduct(body, file);
  }

  // Product update
  @Patch('/product/:category/:id')
  @UseInterceptors(FileInterceptor('image'))
  updateProduct(
    @Param('category') category: string,
    @Param('id') id: string,
    @Body() updatableProduct: UpdateProductDto,
    @UploadedFile() file?: UploadedFileDto,
  ){
    return this.adminActionsService.updateProduct(category, id, updatableProduct, file);
  }

  // Product delete
  @Delete('product/:category/:id')
  deleteProduct(@Param('category') category: string, @Param('id') id: string) {
    return this.adminActionsService.deleteProduct(category, id);
  }
}
