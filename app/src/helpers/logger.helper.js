const winston = require('winston');
require('winston-daily-rotate-file');
// const config = require('config');
const env = process.env.NODE_ENV;

const options = {
    file: {
        dirname: 'logs',
        filename: `%DATE%.log`,
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: false,
        maxSize: 102400,
        handleExceptions: true,
        json: false,
        handleRejections: true,
    },
    console: {
        handleExceptions: true,
        handleRejections: true,
        json: false,
    },
    levels: {
        error: 0,
        info: 1,
        debug: 2,
    },
};

const logger_format = winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf((info) => {
        let out;
        let level = info['level'];
        level = level.replace(/\u001b\[31m(.*)\u001b\[39m/, ($1) =>
            $1.toUpperCase()
        );
        if (info['request']) {
            const xFF = info['headers'];
            const ip =
                typeof xFF !== 'undefined'
                    ? xFF['x-forwarded-for'] !== 'undefined'
                        ? xFF.split(',')[0]
                        : info['request']['info']['remoteAddress']
                    : info['request']['info']['remoteAddress'];
            out = `${info['timestamp']} : ${level} : ${ip} : ${info.request.info.remotePort} : ${info.request.info.id} :  ${info.request.info.referrer} : ${info.statusCode}`;
            if (level === `error`) {
                out = out + ' ' + info['message'];
            }
        } else {
            out = `${info['timestamp']} : ${level} : ${info['message']}`;
        }

        return out;
    }),
    winston.format.colorize(),
    winston.format.align()
);

var transport = new winston.transports.DailyRotateFile(options.file);

var logger = winston.createLogger({
    format: logger_format,
    levels: options.levels,
    transports: [
        transport,
        new winston.transports.Console(options.console),
        new winston.transports.Http(options.console),
    ],
});

logger.stream = {
    write: function (message, encoding) {
        logger.log('log', message);
    },
};

if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new winston.transports.Console({
            format: winston.format.simple(),
            level: 'debug',
        })
    );
    logger.add(transport);
}

module.exports = { logger };
