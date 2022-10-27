import { Router } from "express";

import lineRoutes from "./lines";
import teamRoutes from "./teams";

const router = Router();

router.use("/lines", lineRoutes);
router.use("/teams", teamRoutes);

export default router;
