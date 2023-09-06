import { Router } from "express";
import { getTask, getTasks, createTask, deleteTask, updateTask } from "../controllers/task.controller.js";
import {requiredAuth} from '../middlewares/tokenValidation.js'
import {createTaskSchema} from '../schemas/task.schema.js';
import { validateSchema } from "../middlewares/validator.middlewares.js";


const router=Router();

router.get('/tasks', requiredAuth, getTasks)
router.get('/tasks/:id', requiredAuth, getTask)
router.post('/tasks', requiredAuth, validateSchema(createTaskSchema),createTask)
router.put('/tasks/:id', requiredAuth, updateTask)
router.delete('/tasks/:id', requiredAuth, deleteTask)

export default router;