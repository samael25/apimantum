import { Injectable } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { getConnection } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
constructor(
  private readonly appService: AppService
) {

}

  async create(createUsuarioDto: CreateUsuarioDto) {
    console.log(createUsuarioDto);
    const conection = getConnection()
    const query = `
    INSERT INTO [dbo].[Usuario]
           ([Nombre]
           ,[Descripcion]
           ,[Activo]
           ,[FechaInactividad]
           ,[FechaCreacion]
           ,[FechaModificacion]
           ,[IdRol]
           ,Imagen
           ,[FechaNacimiento]
           ,[LugarNacimiento]
           ,[Trayectoria]
           ,[NombreReal])
    VALUES
           (
            '${createUsuarioDto.Nombre}',
            '${createUsuarioDto.Descripcion}',
            ${createUsuarioDto.Activo ? 1 : 0},
            '${this.appService.formatDte(new Date(createUsuarioDto.FechaInactividad))}',
            '${this.appService.formatDte(new Date(createUsuarioDto.FechaCreacion))}',
            '${this.appService.formatDte(new Date(createUsuarioDto.FechaModificacion))}',
            ${createUsuarioDto.IdRol},
            '${createUsuarioDto.Imagen}'
           )`
           console.log(query)
    return await conection.query(query)
  }

  async findAll() {
    const conection = getConnection()
    return await conection.query(
      `
        select
        U.*,
        R.Nombre as NombreRol
        from Usuario U
        left join Rol R on R.IdRol = U.IdRol
    `)
  }

  async findOne(id: number) {
    const conection = getConnection()
    return await conection.query(
      `
        select
        U.*,
        R.Nombre as NombreRol
        from Usuario U
        left join Rol R on R.IdRol = U.IdRol
        where U.IdUsuario = ${id}
      `
    )
  }

  async findOneByName(userName: string) {
    const conection = getConnection()
    return await conection.query(
      `
        select
        U.*,
        R.Nombre as NombreRol
        from Usuario U
        left join Rol R on R.IdRol = U.IdRol
        where U.Nombre = '${userName}'
      `
    )
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
