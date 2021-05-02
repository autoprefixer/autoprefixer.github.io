import { isDefined } from "./helpers";

let debug = (..._args: any[]) => (..._args: any[]) => {};

if (process.env.NODE_ENV !== "production") {
  debug = require("debug");
}

export const logger = (loggerName: string) => {
  const log = debug(loggerName);
  return (message: string, ...args: any[]) => {
    const argsClone = JSON.parse(JSON.stringify(args.filter(isDefined)));
    log(`%c${message}`, "font-weight: bold", ...argsClone);
  };
};

export const loggerDomain = (domainName: string) => (loggerName: string) =>
  logger(`${domainName} ${loggerName}`);
