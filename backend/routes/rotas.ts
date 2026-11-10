import { Router } from "express";
import CatalogController from "../controller/controller";
const busca = new CatalogController
const router = Router();


router.get('/', (req, res) => busca.BuscarJogos(req, res));
router.get('/:id', (req, res) => busca.BuscarJogosId(req, res)); 

/*
router.post('/catalog');
router.put('/catalog/:id') ;
router.delete('/catalog/:id');
*/

export default router;