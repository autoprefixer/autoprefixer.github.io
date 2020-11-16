import isUndefined from "lodash/isUndefined";
import isFunction from "lodash/isFunction";
import isString from "lodash/isString";
import noop from "lodash/noop";

export const isProd = process.env.NODE_ENV === "production";
export const isDev = process.env.NODE_ENV === "development";
export const isDefined = (any: any) => !isUndefined(any);


export { isUndefined, isFunction, isString, noop };
