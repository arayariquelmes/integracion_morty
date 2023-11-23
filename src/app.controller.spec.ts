import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { mock } from 'jest-mock-extended';
import { PersonajesService } from './services/personajes.service';
import { Personaje } from './model/personaje';


describe('AppController', () => {
  let appController: AppController;
  let personajesService = mock<PersonajesService>();
  beforeEach(()=>{
    appController = new AppController(personajesService);
  });
  describe("when getPersonajes is called", ()=>{
    describe("and the response has almost one object",()=>{
      it("will return a list of personajes with the object", async()=>{
        let per1:Personaje ={nombre:"Rick",estado:"vivo",imagen:"hola.jpg"};
        personajesService.getPersonajes.mockResolvedValue([per1]);
        let res =  await appController.getPersonajes();
        expect(res.length).toBe(1);
        expect(res[0]).toBe(per1);
      });
    });
  });
});
