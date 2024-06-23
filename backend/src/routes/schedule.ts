import { Router } from "express";
import pool from "../db";

const router = Router();

router.get("/verify/:giscode", async (req, res) => {
  try {
    // Check giscode format
    if (!/^(AI|SF|SC)\d{3}$/.test(req.params.giscode)) {
      res.status(200).send("Invalid format");
      return;
    }

    // Exec query
    const result = await pool.query(
      "SELECT * FROM schedule WHERE gis_code = $1",
      [req.params.giscode]
    );

    // Check query found
    if (result.rowCount === 0) {
      res.status(400).send("GIS code not found");
      return;
    }

    // Return result
    res.status(200).send("GIS code found");
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
    res.sendStatus(500);
  }
});

router.get("/schedule/:giscode", async (req, res) => {
  try {
    // Check giscode format
    if (!/^(AI|SF|SC)\d{3}$/.test(req.params.giscode)) {
      res.status(200).send("Invalid format");
      return;
    }

    // Exec query
    const result = await pool.query(
      "SELECT * FROM schedule WHERE gis_code = $1",
      [req.params.giscode]
    );

    // Check query found
    if (result.rowCount === 0) {
      res.status(400).send("GIS code not found");
      return;
    }

    // Return result
    res.status(200).json(result.rows[0]);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
    res.sendStatus(500);
  }
});

export default router;
