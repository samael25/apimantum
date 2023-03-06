import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './controllers/usuarios/usuarios.module';
import { CancionModule } from './controllers/cancion/cancion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      database: 'mantumdos',
      username: 'sa',
      password: 'samael666',
      options: {
        encrypt: true
      }
    }),
    UsuariosModule,
    CancionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
