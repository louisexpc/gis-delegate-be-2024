import { Router } from "express";
import ScheduleRouter from "./schedule";

const router = Router();

router.use("/", ScheduleRouter);

export default router;
