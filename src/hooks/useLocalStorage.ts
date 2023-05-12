import { Cart } from "@models/products.model";
import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, defaultValue: T) {
      const [value, setValue] = useState<Cart[] | null>([])
      useEffect(() => {
            const stored = localStorage.getItem(key) 
            console.log(stored)
            if (!stored) return  
            setValue(stored ? JSON.parse(stored) : defaultValue)
      }, [defaultValue, key])

      useEffect(() => {
            localStorage.setItem(key, JSON.stringify(value))
      }, [key, value])

      return [value, setValue] as const
}