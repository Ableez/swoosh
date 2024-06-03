interface IDBConfig {
  dbName: string;
  store: string;
  version?: number;
}

let db: IDBDatabase;

const openDatabase = ({ store }: IDBConfig): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const openRequest = indexedDB.open("swooshDB");

    openRequest.onupgradeneeded = (event) => {
      db = (event.target as IDBOpenDBRequest).result;
      // Add logic to create object stores, e.g.,

      if (!db.objectStoreNames.contains(store)) {
        db.createObjectStore(store, { keyPath: "id" });
      }
    };

    openRequest.onsuccess = () => {
      resolve(openRequest.result);
    };

    openRequest.onerror = () => {
      reject(openRequest.error);
    };
  });
};

export const getElement = async <T>(
  store: string,
  key: string,
  dbName: string,
): Promise<T> => {
  db = await openDatabase({ dbName: dbName, store: store });

  return new Promise<T>((resolve, reject) => {
    if (db.objectStoreNames.contains(store)) {
      const transaction = db.transaction(store);
      const objectStore = transaction.objectStore(store);
      const request =
        key === "all" ? objectStore.getAll() : objectStore.get(key);

      request.onsuccess = () => {
        resolve(request.result as T);
      };

      request.onerror = () => {
        reject(request.error);
      };

      transaction.oncomplete = () => {
        db.close();
      };
    } else {
      reject(new Error(`Object store ${store} does not exist`));
    }
  });
};

export const addElement = async (
  store: string,
  dbName: string,
  payload: object,
): Promise<void> => {
  db = await openDatabase({ dbName: dbName, store: store });

  return new Promise((resolve, reject) => {
    if (db.objectStoreNames.contains(store)) {
      const transaction = db.transaction(store, "readwrite");
      const objectStore = transaction.objectStore(store);
      const request = objectStore.put(payload);

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject(request.error);
      };

      transaction.oncomplete = () => {
        db.close();
      };
    } else {
      reject(new Error(`Object store ${store} does not exist`));
    }
  });
};

export const editElement = async <T>(
  store: string,
  dbName: string,
  key: string,
  payload: object,
): Promise<T> => {
  db = await openDatabase({ dbName: dbName, store: store });
  return new Promise<T>((resolve, reject) => {
    if (db.objectStoreNames.contains(store)) {
      const transaction = db.transaction(store, "readwrite");
      const objectStore = transaction.objectStore(store);
      const request =
        key === "all" ? objectStore.getAll() : objectStore.get(key);

      request.onsuccess = () => {
        const updateRequest = objectStore.put(payload);

        updateRequest.onsuccess = () => {
          resolve(updateRequest.result as T);
        };

        updateRequest.onerror = () => {
          reject(updateRequest.error);
        };
      };

      request.onerror = () => {
        reject(request.error);
      };

      transaction.oncomplete = () => {
        db.close();
      };
    } else {
      reject(new Error(`Object store ${store} does not exist`));
    }
  });
};

export const removeElement = async (
  store: string,
  dbName: string,
  key: string,
): Promise<void> => {
  db = await openDatabase({ dbName: dbName, store: store });
  return new Promise((resolve, reject) => {
    if (db.objectStoreNames.contains(store)) {
      const transaction = db.transaction(store, "readwrite");
      const objectStore = transaction.objectStore(store);
      const request =
        key === "all" ? objectStore.clear() : objectStore.delete(key);

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject(request.error);
      };

      transaction.oncomplete = () => {
        db.close();
      };
    } else {
      reject(new Error(`Object store ${store} does not exist`));
    }
  });
};
