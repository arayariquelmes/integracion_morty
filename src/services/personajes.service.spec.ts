import { Test, TestingModule } from '@nestjs/testing';
import { PersonajesService } from './personajes.service';
import { ConfigService } from '@nestjs/config';
import {mock} from "jest-mock-extended";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Personaje } from 'src/model/personaje';
describe("PersonajesService", ()=>{
  let personajesService;
  let configService = mock<ConfigService>();
  let mockAdapter = new MockAdapter(axios);
  beforeEach(()=>{
    personajesService = new PersonajesService(configService);
  });

  describe("cuando se llame al metodo get de personajes", ()=>{
    //Cuando sea ok
    describe("y la respuesta devuelva 1 personaje", ()=>{
      it("debe ser retornado por el metodo get",async()=>{
        configService.get.mockReturnValue("FAKE_URL");
        mockAdapter.onGet("FAKE_URL").reply(200,{
          results:[{
            name:"Rick",image:"hola.jpg",status:"vivo"
          }]
      });
        let per1:Personaje ={nombre:"Rick",estado:"vivo",imagen:"hola.jpg"};
        let res:Personaje[] = await personajesService.getPersonajes();
        expect(res.length).toBe(1);
        expect(res[0].imagen).toBe(per1.imagen);
        expect(res[0].nombre).toBe(per1.nombre);
        expect(res[0].estado).toBe(per1.estado);
      });
    });
    //Cuando falle
    describe("y la respuesta sea fallida", ()=>{
      it("deberia caerse la operacion", ()=>{

      });
    });

  });

});