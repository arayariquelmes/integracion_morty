import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { Personaje } from 'src/model/personaje';

@Injectable()
export class PersonajesService {

    constructor(private readonly configService:ConfigService){}
    async getPersonajes(): Promise<Personaje[]>{
        //Obtener la url de la api
        let url:string = this.configService
        .get<string>("ENDPOINT_PERSONAJES");
       
        //hacer la peticion a la api
        let res = await axios.get(url);

        let data = res.data;
        let personajes = data.results;
        //convertir el contrato de la response de la api a mi response
        return personajes.map(p=>{
            return {nombre: p.name
                , imagen: p.image, estado:p.status};
        })


    }
}
