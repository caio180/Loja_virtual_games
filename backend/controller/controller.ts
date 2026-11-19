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
    PostarJogo(req: Request, res: Response){
        const jogo = req.body;
        const criar_jogo = new Model();
        criar_jogo.PostarJogo(jogo);

        if(!jogo.nome || !jogo.preco || !jogo.estoque || !jogo.plataforma || !jogo.genero || !jogo.formato){
            res.status(400).send({message: "Todos os campos são obrigatórios."})
            return;
        }
        res.send({message: "Jogo criado com sucesso."})
    }
}
export default CatalogController;