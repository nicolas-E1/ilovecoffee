import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavours')
  findAll() {
    return 'This action returns all ☕️';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return coffee #${id}.`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
