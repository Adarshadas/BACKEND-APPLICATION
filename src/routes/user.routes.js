import { Router } from "express";
import { registerUser } from "../controller/usercontroller.js";

import { upload } from "../middleweares/multer_middlewear.js";

const router =Router()

router.route("/register").post(
  upload.fields([
    {
      name:"avatar",
      maxCount:1,
    },
    {
      name:"coverimage",
      maxCount:1,
    }
  ]),
  registerUser

export default router


















