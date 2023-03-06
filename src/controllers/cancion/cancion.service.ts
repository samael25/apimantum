import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { CreateCancionDto } from './dto/create-cancion.dto';
import { UpdateCancionDto } from './dto/update-cancion.dto';

@Injectable()
export class CancionService {
  
  async findAll() {
    const conection = getConnection()
    return await conection.query(
      `
        select
        c.*,
        g.Nombre as Genero
        from Cancion c
        left join CancionGenero cg on cg.IdCancion = c.IdCancion
        left join Genero g on cg.IdGenero = g.IdGenero
    `)
  }

  async findOne(id: number) {
    const conection = getConnection()
    return await conection.query(
      `
      select
        c.*,
        g.Nombre as Genero
        from Cancion c
        left join CancionGenero cg on cg.IdCancion = c.IdCancion
        left join Genero g on cg.IdGenero = g.IdGenero
        where c.IdCancion = ${id}
      `
    )}
}
