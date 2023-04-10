export const utilService = {
      saveToStorage,
      loadFromStorage
}

function saveToStorage(key: string, value: any): void {
      localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key: string): any | undefined {
      const data = localStorage.getItem(key)
      return (data) ? JSON.parse(data) : undefined
}