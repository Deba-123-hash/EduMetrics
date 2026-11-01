export const storageService = {
  getItem: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch {
      return localStorage.getItem(key);
    }
  },
  setItem: (key, value) => {
    try {
      const serialized = typeof value === 'object' ? JSON.stringify(value) : value;
      localStorage.setItem(key, serialized);
    } catch (e) {
      console.error('Storage setItem error', e);
    }
  },
  removeItem: (key) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  }
};

export default storageService;
