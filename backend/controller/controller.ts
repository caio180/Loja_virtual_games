import { Request, Response } from "express";
import Model from "../model/model";

class CatalogController{
    constructor() {

    }
    BuscarJogos(req: Request, res: Response){
     const jogos_d = new Model();
     res.send(jogos_d.JogosDisponiveis())

    }
    BuscarJogosId(req: Request, res: Response){
        const id = Number(req.params.id)
        const jogos_id = new Model();
        res.send(jogos_id.PegarJogosId(id))
    }
}
export default CatalogController;