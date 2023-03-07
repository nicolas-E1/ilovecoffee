import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

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

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates coffee #${id} - Payload: ${body}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `This action deletes coffee #${id}.`;
  }
}
