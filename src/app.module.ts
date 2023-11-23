import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { PersonajesService } from './services/personajes.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [PersonajesService],
})
export class AppModule {}
