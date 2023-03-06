import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavours')
  findAll() {
    return 'This action returns all ☕️';
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    return `This action return coffee #${id}.`;
  }
}
