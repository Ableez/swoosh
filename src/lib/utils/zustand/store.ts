import type { OrderType } from "@/lib/types/types";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface OrdersState {
  orders: OrderType | null;
  addOrders: (orders: OrderType) => void;
}

export const useStore = create<OrdersState>()(
  devtools(
    persist(
      (set) => ({
        orders: null,
        addOrders: (orders) => set({ orders }),
      }),
      {
        name: "orderStore",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);
