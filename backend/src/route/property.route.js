import { Router } from "express";
import { getProperties } from "../controller/property.controller";

const router = Router();
router.route("/properties",getProperties);

export default router;