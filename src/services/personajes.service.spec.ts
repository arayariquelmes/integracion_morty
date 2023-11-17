import { Test, TestingModule } from '@nestjs/testing';
import { PersonajesService } from './personajes.service';

describe('PersonajesService', () => {
  let service: PersonajesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonajesService],
    }).compile();

    service = module.get<PersonajesService>(PersonajesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
