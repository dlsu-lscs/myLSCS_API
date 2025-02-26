import express from "express";

import { validateMemberByEmail } from "../services/auth";

const router = express.Router();

router.post("/validate", validateMemberByEmail);
