import express from "express";
import multer from "multer";
import { signup, login, googleLogin} from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/signup", upload.single("profilePic"), signup);
router.post("/login", login);
router.post("/google", googleLogin);
router.get("/dashboard", authMiddleware, (req, res) => {
 res.json("Protected route accessed");
});
// router.get("/dashboard", (req, res) => {
//   console.log("DASHBOARD HIT");
//   res.send("dashboard hit");
// });
export default router;