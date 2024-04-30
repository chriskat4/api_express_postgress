import { Router} from "express"; 
import { pool } from '../db.js'
import { userGets, getUser, postUser, delUser, putUser } from "../controllers/users.controllers.js";

const  router = Router();

router.get('/users', userGets);

router.get('/users/:id', getUser);

router.post('/users', postUser);

router.delete('/users/:id', delUser);

router.put('/users/:id', putUser);

export default router;