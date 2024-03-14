import express from "express";
import weatherRoutes from "./routes/weatherRoutes"; // Assuming weatherRoutes.ts is corrected

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/weather", weatherRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
