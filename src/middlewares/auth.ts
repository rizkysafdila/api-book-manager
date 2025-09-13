import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { envConfig } from "../configs/env"
import { errorResponse } from "../utils/helpers"

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers["authorization"]
  const token = authorization && authorization.split(" ")[1]

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  try {
    const decoded = jwt.verify(token, envConfig.JWT_SECRET!)
    next()
  } catch (error) {
    return res.status(403).json(errorResponse("Invalid or expired token"))
  }
}

export default authMiddleware
