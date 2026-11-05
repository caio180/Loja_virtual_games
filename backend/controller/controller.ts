import { Request, Response } from "express";
import Model from "../model/model";

class CatalogController{
    constructor() {

    }
    BuscarJogos(req: Request, res: Response){
     const jogos_d = new Model();
     res.send(jogos_d.JogosDisponiveis())

    }
}
export default CatalogController;