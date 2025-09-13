import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import { errorResponse, successResponse } from "../utils/helpers"
import { envConfig } from "../configs/env"

export class AuthController {
  static login(req: Request, res: Response) {
    const { username, password } = req.body

    if (username !== "admin" || password !== "password") {
      return res.status(401).json(errorResponse("Invalid credentials"))
    }

    const token = jwt.sign({ username }, envConfig.JWT_SECRET!, { expiresIn: "8h" })

    return res.json(successResponse({ token }, "Login successful"))
  }
}
