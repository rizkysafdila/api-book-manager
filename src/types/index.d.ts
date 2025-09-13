type SequelizeDialect = 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql'

interface CustomError extends Error {
  status?: number;
  errors?: Record<string, string> | null;
}

export interface ApiResponse<T> {
  success: boolean
  message: string
  data?: T
  error?: any
}