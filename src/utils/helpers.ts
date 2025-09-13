import { ApiResponse } from "../types"

export const successResponse = <T>(
  data: T,
  message = "Request successful"
): ApiResponse<T> => ({
  success: true,
  message,
  data,
})

export const errorResponse = <T>(
  message = "Request failed",
  error?: any
): ApiResponse<T> => ({
  success: false,
  message,
  error,
})