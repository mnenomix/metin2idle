import { Router } from "express";
import healthRouter from "./health.js";
import registerRouter from "./register.js";

const router = Router();

router.use(healthRouter);
router.use(registerRouter);

export default router;
