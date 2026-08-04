import { Injectable } from '@nestjs/common';
 
@Injectable()
export class WomenParfumesService {

  findAll() {
    return `All women products are here! `;
  }
}
