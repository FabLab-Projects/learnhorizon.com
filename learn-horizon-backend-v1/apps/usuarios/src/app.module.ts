import { Module } from '@nestjs/common'

import { ModuloUsuario } from './usuarios/usuario.module'

@Module({
  imports: [ModuloUsuario],
  controllers: [],
  providers: []
})
export class AppModule {}
