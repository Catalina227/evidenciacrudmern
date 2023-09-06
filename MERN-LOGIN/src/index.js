import app from "./app.js";
import {connectDB} from "./db.js";

connectDB();
app.listen(5000, () => console.log(`SERVER ON PORT 5000`));