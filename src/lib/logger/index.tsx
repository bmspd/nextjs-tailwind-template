import pino from 'pino'

export const logger = pino(
  process.env.NODE_ENV === 'production'
    ? {
        level: process.env.LOG_LEVEL || 'info',
      }
    : {
        level: 'debug',
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
          },
        },
      }
)
