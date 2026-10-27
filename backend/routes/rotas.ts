import { Router } from "express";

const router = Router();


router.get('/catalog');
router.get('/catalog/:id'); 
router.post('/catalog');
router.put('/catalog/:id') ;
router.delete('/catalog/:id');

export default router;