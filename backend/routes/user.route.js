import express from 'express';
import {register,login,updateProfile,logout} from "../controllers/user.controller.js";
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { singleUpload } from '../middlewares/multer.js';

const router = express.Router();

router.route("/register").post(singleUpload,register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);

export default router;


// https://cloud.mongodb.com/v2/66b6fce34e2e944509fa746a#/overview