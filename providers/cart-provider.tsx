"use client"

import type { ReactNode } from "react"

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  return <>{children}</>
}
