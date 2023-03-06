import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { AppService } from 'src/app.service';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService, AppService]
})
export class UsuariosModule {}
