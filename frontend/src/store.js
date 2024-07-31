import { createStore } from 'redux';

const initialState = {
  products: [
    { id: 1, name: 'Lounge Chair', price: 2000, category: 'Chairs', image: 'https://i5.walmartimages.com/asr/a050a9a1-68af-4334-8d3c-abab194c1d6d.468d87e4178726e83fe59a5d11ef7bcc.jpeg' },
    { id: 2, name: 'Dining Chair', price: 1800, category: 'Chairs', image: 'https://www.shelbywilliams.com/files/images/9261_7124.jpg' },
    { id: 3, name: 'Table1', price: 3000, category: 'Table', image: 'https://i.pinimg.com/originals/3b/50/2b/3b502b88dcc38822376262734e894e95.jpg' },
    { id: 4, name: 'Table2', price: 3200, category: 'Table', image: 'https://images.custommade.com/QIPkcQpQEb9ipXnZ2cQ9k_jldQI=/custommade-photosets/3cd375aa36ca28b_driscoll_large_2.jpg' },
    { id: 5, name: 'Table3', price: 3100, category: 'Table', image: 'https://i.etsystatic.com/26672781/r/il/9913c3/3062774607/il_fullxfull.3062774607_ca8z.jpg' },
    { id: 6, name: 'Dining Top', price: 900, category: 'Top', image: 'https://i.pinimg.com/originals/d7/7e/e6/d77ee6b14598fab4d83c1a2499b67de2.jpg' }
  ],
  cart: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const item = action.payload;
      const existingItem = state.cart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(cartItem =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
          )
        };
      } else {
        return { ...state, cart: [...state.cart, { ...item, quantity: 1 }] };
      }
    case 'CHECKOUT':
      return { ...state, cart: [] };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
