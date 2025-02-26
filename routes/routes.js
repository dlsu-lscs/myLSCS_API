import express from "express";

import { validateMemberByEmail } from "../services/auth.js";

const router = express.Router();

router.post("/validate", validateMemberByEmail);

export default router;
