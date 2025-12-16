import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // [{ name, image, cost, quantity }]
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const incoming = action.payload; // {name,image,cost,quantity}

      const existing = state.items.find((it) => it.name === incoming.name);

      // Wenn schon im Warenkorb: nicht doppelt hinzufügen (Button ist ja disabled)
      if (!existing) {
        state.items.push({
          ...incoming,
          quantity: incoming.quantity ?? 1,
        });
      }
    },

    removeItem: (state, action) => {
      const name = action.payload?.name ?? action.payload;
      state.items = state.items.filter((it) => it.name !== name);
    },

    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;

        // Wenn <= 0: Item komplett entfernen
        if (Number(quantity) <= 0) {
            state.items = state.items.filter((it) => it.name !== name);
            return;
        }

        const item = state.items.find((it) => it.name === name);
        if (!item) return;

        item.quantity = Number(quantity);
    },

  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
