import express from 'express';
const schemaValidator = require('express-joi-validator');

// Controller
import userController from '../../controllers/user/user.controller';

// Schema
import userSchema from '../../validations/schemas/user.schema';

// Middleware
import { isAdmin } from '../../middlewares/permission-handler.middleware';

const router = express.Router();

router.get(
  '/',
  userController.list,
);

router.get(
  '/:id',
  userController.detail,
);

router.put(
  '/:id',
  // isAdmin(),
  // schemaValidator(userSchema.updateMe),
  userController.update,
);

router.delete(
  '/:id',
  // isAdmin(),
  userController.remove,
);

export default router;
