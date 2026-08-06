import { Controller, Post, Body, Patch, Param, Delete, Get, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AdminActionsService, UploadedFileDto } from './admin-actions.service';
import { CreateProductDto } from './dto/create-admin-action.dto';
import { UpdateProductDto } from './dto/update-admin-action.dto';

@Controller('admin-actions')
export class AdminActionsController {
  constructor(private readonly adminActionsService: AdminActionsService) {}

  // 1. Login
  // @Post('login')
  // @HttpCode(HttpStatus.OK)
  // login(@Body() loginDto: LoginDto) {
  //   return this.adminActionsService.login(loginDto);
  // }


  // 2. All products
  @Get('/all')
   allProducts () {
    return 'All products are here!'
   }

  // 3. Product upload
  @Post('/product/new')
  @UseInterceptors(FileInterceptor('image'))
  uploadProduct(
    @Body() body: CreateProductDto,
    @UploadedFile() file?: UploadedFileDto,
  ) {
    return this.adminActionsService.uploadProduct(body, file);
  }

  // 4. Product update
  @Patch('/products/:category/:id')
  @UseInterceptors(FileInterceptor('image'))
  updateProduct(
    @Param('category') category: string,
    @Param('id') id: string,
    @Body() updatableProduct: UpdateProductDto,
    @UploadedFile() file?: UploadedFileDto,
  ){
    return this.adminActionsService.updateProduct(category, id, updatableProduct, file);
  }

  // 5. Product delete
  @Delete('products/:category/:id')
  deleteProduct(@Param('category') category: string, @Param('id') id: string) {
    return this.adminActionsService.deleteProduct(category, id);
  }
}
