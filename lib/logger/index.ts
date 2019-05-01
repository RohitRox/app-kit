import { createLogger, format, transports } from 'winston';

const isProd = process.env.NODE_ENV === 'production';
const logLevel = process.env.LOG_LEVEL || (isProd ? 'info' : 'debug');
const logLabel = process.env.SERVICE_NAME || 'ecs';

const enumerateErrorFormat = format((info: any) => {
  if (info.message instanceof Error) {
    info.message = Object.assign(
      {
        message: info.message.message,
        stack: info.message.stack,
      },
      info.message,
    );
  }

  if (info instanceof Error) {
    return Object.assign(
      {
        message: info.message,
        stack: info.stack,
      },
      info,
    );
  }

  if (typeof info.message !== 'string') {
    return Object.assign({}, info, { message: JSON.stringify(info.message) });
  }

  return info;
  ``;
});

const devFormat = () =>
  format.combine(
    enumerateErrorFormat(),
    format.simple(),
    format.printf((info: any) => {
      const { timestamp, level, message, ...extra } = info;

      return [
        `${level}:`,
        message,
        Object.keys(extra).length ? JSON.stringify(extra, null, 2) : '',
      ].join(' ');
    }),
    format.colorize({ all: true }),
  );

const prodFormat = () =>
  format.combine(
    format.label({ label: logLabel }),
    format.timestamp(),
    enumerateErrorFormat(),
    format.json(),
  );

const logFormat = isProd ? prodFormat() : devFormat();

export default createLogger({
  level: logLevel,
  format: logFormat,
  transports: [new transports.Console()],
});
