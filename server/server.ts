import "dotenv/config";
import { connectDB } from "./config/db.js";
import app from "./app.js";

// Only allowed here on ES modules bcs it is the top lvl no need for async fn
await connectDB();

const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
