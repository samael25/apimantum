import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CancionService } from './cancion.service';
import { CreateCancionDto } from './dto/create-cancion.dto';
import { UpdateCancionDto } from './dto/update-cancion.dto';

@Controller('cancion')
export class CancionController {
  constructor(private readonly cancionService: CancionService) {}

  @Get('findAll')
  findAll() {
    return this.cancionService.findAll();
  }
  @Get('findOne/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.cancionService.findOne(id);
  }
}
