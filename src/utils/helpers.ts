import { ApiResponse } from "../types";

export const successResponse = <T>(
  data: T,
  message = "Request successful"
): ApiResponse<T> => ({
  success: true,
  message,
  data,
});

export const errorResponse = (
  message = "Request failed",
  error?: any
): ApiResponse => ({
  success: false,
  message,
  error,
});