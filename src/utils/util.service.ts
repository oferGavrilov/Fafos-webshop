
export function saveToStorage(key: string, value: any): void {
      localStorage.setItem(key, JSON.stringify(value))
}

export function loadFromStorage(key: string): any | undefined {
      const data = localStorage.getItem(key)
      return (data) ? JSON.parse(data) : undefined
}

export function makeId() {
      var pt1 = Date.now().toString(16)
      var pt2 = _getRandomInt(1000, 9999).toString(16)
      var pt3 = _getRandomInt(1000, 9999).toString(16)
      return `${pt3}-${pt1}-${pt2}`.toUpperCase()
}

function _getRandomInt(num1: number, num2: number) {
      var max = num1 >= num2 ? num1 + 1 : num2 + 1
      var min = num1 <= num2 ? num1 : num2
      return Math.floor(Math.random() * (max - min)) + min
}