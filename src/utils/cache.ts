enum cacheType {
  Local,
  Session,
}

//
class Cache {
  storage: Storage;
  constructor(type: cacheType) {
    this.storage = type == cacheType.Local ? localStorage : sessionStorage;
  }
  setCache(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }
  getCache(key: string) {
    const value = this.storage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }
  removeCache(key: string) {
    this.storage.removeItem(key);
  }
  clearCache() {
    this.clearCache();
  }
}

const localCache = new Cache(cacheType.Local);
const sessionCache = new Cache(cacheType.Session);

export { localCache, sessionCache };
