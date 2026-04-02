import { Router } from "express";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { db } from "../db/index.js";
import { accounts } from "../db/schema/index.js";

const router = Router();

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "Email and password are required" });
    return;
  }

  if (password.length < 8) {
    res
      .status(400)
      .json({ error: "Password must be at least 8 characters" });
    return;
  }

  const existing = await db.query.accounts.findFirst({
    where: eq(accounts.email, email),
  });

  if (existing) {
    res.status(409).json({ error: "Email already registered" });
    return;
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const [user] = await db
    .insert(accounts)
    .values({
      email,
      passwordHash,
    })
    .returning({ id: accounts.id, email: accounts.email });

  res.status(201).json({ user });
});

export default router;
