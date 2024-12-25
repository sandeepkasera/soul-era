// context/CounterContext.tsx
import React, { ReactNode, createContext, useContext, useState } from "react";

interface CounterContextType {
  cart: number[];
  addTocart: (id: number) => void;
  remove: (id: number) => void;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<number[]>([]);
  const addTocart = (id: number) => setCart((cart) => [...cart, id]);
  const remove = (id: number) => setCart((cart) => cart.filter((idToremove) => idToremove != id));

  return (
    <CounterContext.Provider value={{ cart, addTocart, remove }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCart must be used within a CounterProvider");
  }
  return context;
};
