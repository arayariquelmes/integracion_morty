import { Controller, Get } from '@nestjs/common';
import { PersonajesService } from './services/personajes.service';
import { Personaje } from './model/personaje';

@Controller()
export class AppController {
  constructor(
    private readonly personajesService: PersonajesService) {}

  @Get("/personajes")
  getPersonajes(): Promise<Personaje[]> {
    return this.personajesService
    .getPersonajes();
  }
}
