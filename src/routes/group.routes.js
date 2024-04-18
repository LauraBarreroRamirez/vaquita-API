import express from "express";
import groupController from "../controllers/group.controller.js";

const router = express.Router();

router.get("/groups", groupController.getAll);
router.get("/groups/:id", groupController.get);
router.post("/groups", groupController.create);
router.put("/groups/:id", groupController.update);
router.delete("/groups/:id", groupController.delete);

export { router };
