import { createContext, useState } from 'react';

const ItemsContext = createContext({
	items: [],
	getItems: () => {},
	addItem: (item) => {},
});

export function ItemsContextProvider(props){
	const [currentItems, setCurrentItems] = useState([])

	const getItemsHandler = () => {
		fetch(
			'https://react-context-9849b-default-rtdb.firebaseio.com/items.json',
		).then((response) => {
			return response.json();
		}).then((data) => {
			const newItems = [];
			for(const key in data){
				const newItem = {
					id: key,
					...data[key]
				}
				newItems.push(newItem)
			}
			setCurrentItems(newItems);
		})
	}

	const addItemHandler = (currentItem) => {
		setCurrentItems((prevCurrentItems) => {
			return prevCurrentItems.concat(currentItem);
		});
		fetch(
      'https://react-context-9849b-default-rtdb.firebaseio.com/items.json',
      {
        method: 'POST',
        body: JSON.stringify(currentItem),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
	}

	const context = {
		items: currentItems,
		getItems: getItemsHandler,
		addItem: addItemHandler,
	} 

	return (
		<ItemsContext.Provider value={context}>
			{props.children}
		</ItemsContext.Provider>
	);
}

export default ItemsContext;