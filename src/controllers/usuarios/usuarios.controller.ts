import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('create')
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get('findAll')
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.findOne(id);
  }

  @Patch('update:id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @Delete('delete:id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }

  @Get('findOneByName/:userName')
  findOneByName(@Param('userName') userName: string) {
    return this.usuariosService.findOneByName(userName);
  }
}
