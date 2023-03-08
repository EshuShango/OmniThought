const apiRoutes = require("./api");

const router = express.Router();

router.use("/api", apiRoutes);
router.use((req, res) => res.send("Wrong Route"));

module.exports = router;
