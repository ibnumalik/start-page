export class Storage {
  static save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static get(key) {
    //   const v
    return JSON.parse(localStorage.getItem(key));
  }

  static delete(key) {
    localStorage.removeItem(key);
  }

  static clear() {
    localStorage.clear();
  }
}
