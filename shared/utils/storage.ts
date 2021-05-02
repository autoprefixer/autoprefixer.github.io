import storageAvailable from "storage-available";

export const storeLense = (
  key: string,
  type: "localStorage" | "sessionStorage" = "localStorage",
) => {
  const hasStorage = storageAvailable(type);
  type IStorage = { [key: string]: string };
  const storage: IStorage = hasStorage ? window[type] : {};

  if (!hasStorage) console.warn(`${type} doesn't work, safely fallback to object`);

  return {
    remove: () => delete storage[key],
    set: (value: any) => (storage[key] = JSON.stringify(value)),
    get: () => {
      try {
        return JSON.parse(storage[key]);
      } catch (error) {
        throw new Error(`Can't parse value from "${type}.${key}".`);
      }
    },
  };
};
