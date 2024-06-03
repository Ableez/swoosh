import { IDB_NAME, ORDERS_STORE, PRODUCT_STORE } from "./CONSTANTS";

export const initIDB = () => {
  const keys = {
    swooshDB: [{ name: "id", unique: false }],
  };

  let db!: IDBDatabase;
  const request = indexedDB.open(IDB_NAME);

  request.onerror = (err) => console.error(`IndexedDB error: `, err);
  request.onsuccess = () => (db = request.result);
  request.onupgradeneeded = () => {
    const db = request.result;
    if (
      !db.objectStoreNames.contains(ORDERS_STORE) ||
      !db.objectStoreNames.contains(PRODUCT_STORE)
    ) {
      const ordersStore = db.createObjectStore(ORDERS_STORE, {
        keyPath: keys.swooshDB[0]?.name,
      });
      const productsStore = db.createObjectStore(PRODUCT_STORE, {
        keyPath: keys.swooshDB[0]?.name,
      });

      keys.swooshDB.forEach((key) =>
        ordersStore.createIndex(key.name, key.name, { unique: key.unique }),
      );

      keys.swooshDB.forEach((key) =>
        productsStore.createIndex(key.name, key.name, { unique: key.unique }),
      );
    } else {
      const ordersStore = db.createObjectStore(ORDERS_STORE, {
        keyPath: keys.swooshDB[0]?.name,
        autoIncrement: true,
      });
      const productsStore = db.createObjectStore(PRODUCT_STORE, {
        keyPath: keys.swooshDB[0]?.name,
        autoIncrement: true,
      });

      keys.swooshDB.forEach((key) =>
        ordersStore.createIndex(key.name, key.name, { unique: key.unique }),
      );

      keys.swooshDB.forEach((key) =>
        productsStore.createIndex(key.name, key.name, { unique: key.unique }),
      );
    }
  };
  return db;
};
