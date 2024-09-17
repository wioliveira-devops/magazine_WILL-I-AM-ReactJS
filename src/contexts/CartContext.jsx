import { useState, createContext, useContext } from 'react';

const CartContext = createContext(null);

export const useCartContext = () => useContext(CartContext);

export const getAmountOfItemsInCart = (cartItemsObj) => {
	let amount = 0;
	for (const productId in cartItemsObj) {
		amount += cartItemsObj[productId];
	}
	return amount;
};

const CartContextProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState({});

	const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

	const removeFromCart = (productId) => {
		const cartItemsCopy = { ...cartItems };
		delete cartItemsCopy[productId];
		setCartItems(cartItemsCopy);
	};

	const addToCart = (productId) => {
		setCartItems({
			...cartItems,
			[productId]: (cartItems[productId] ?? 0) + 1,
		});
	};

	const decreaseUnit = (productId) => {
		if (cartItems[productId] > 1) {
			setCartItems({
				...cartItems,
				[productId]: cartItems[productId] - 1,
			});
		} else {
			removeFromCart(productId);
		}
	};

	return (
		<CartContext.Provider
			value={{
				isCartOpen,
				cartItems,
				toggleCartOpen,
				removeFromCart,
				addToCart,
				decreaseUnit,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
