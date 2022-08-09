import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Harika Chevrolet",
      description:
        "Ucuzum alın beni",
      price: 15.0,
      color:'Red',
      km:"150.000",
      model:'Chevrolet Modeli',
      image:
        "https://images.dod.com.tr/1388727_1_800x600.jpg",
    },
    {
      id: 1,
      title: "Harika Chevrolet",
      description:
        "Ucuzum alın beni",
      price: 15.0,
      color:'Red',
      km:"150.000",
      model:'Chevrolet Modeli',
      image:
        "https://images.dod.com.tr/1388727_1_800x600.jpg",
    },
    {
      id: 1,
      title: "Harika Chevrolet",
      description:
        "Ucuzum alın beni",
      price: 15.0,
      color:'Red',
      km:"150.000",
      model:'Chevrolet Modeli',
      image:
        "https://images.dod.com.tr/1388727_1_800x600.jpg",
    },
    {
      id: 1,
      title: "Harika Chevrolet",
      model:'Chevrolet Modeli',
      description:
        "Ucuzum alın beni",
      price: 15.0,
      km:"150.000",
      color:'Red',

      image:
        "https://images.dod.com.tr/1388727_1_800x600.jpg",
    },

    
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
