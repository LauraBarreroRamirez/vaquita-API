import express from "express";
import groupController from "../controllers/group.controller.js";
import {
  connectDatabase,
  commitDatabase,
  rollbackDatabase,
} from "../lib/middleware/database.middleware.js";
import continueDecorator from "../lib/middleware/continue.decorator.js";

const router = express.Router();

router.use(connectDatabase);
router.get(
  "/groups",
  continueDecorator(groupController.getAll, console.log("entro a groups all"))
);
router.get(
  "/groups/:id",
  continueDecorator(groupController.get, console.log("get groups by Id"))
);
router.post(
  "/groups",
  continueDecorator(groupController.create, console.log("post groups"))
);
router.put("/groups/:id", continueDecorator(groupController.update));
router.delete("/groups/:id", continueDecorator(groupController.delete));
router.use(commitDatabase);
router.use(rollbackDatabase);

export { router };
