import { createContext, useState } from 'react';

const ItemsContext = createContext({
	loading: true,
	items: [],
	getItems: () => {},
	addItem: (item) => {},
	updateItem: (obj) => {},
	deleteItem: (id) => {},
});

export function ItemsContextProvider(props){
	const [currentLoading, setCurrentLoading] = useState(true)
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
			setCurrentLoading(false)
		})
	}

	const addItemHandler = (currentItem) => {
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
		setCurrentItems((prevCurrentItems) => {
			return prevCurrentItems.concat(currentItem);
		});
		setCurrentLoading(true)
	}

	const updateItemHandler = (obj) => {
		fetch(
      `https://react-context-9849b-default-rtdb.firebaseio.com/items/${obj.id}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(obj.createdItem),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
		setCurrentItems(
      currentItems.map((current) =>
        current.id === obj.id ? { ...current, text: obj.createdItem.text, title: obj.createdItem.title } : current
      )
    )
		setCurrentLoading(true)
	}

	const deleteItemHandler = (id) => {
		fetch(
      `https://react-context-9849b-default-rtdb.firebaseio.com/items/${id}.json`,
      {
        method: 'DELETE'
      }
    )
		setCurrentItems((prevCurrentItems) => {
			return prevCurrentItems.filter(item => item.id !== id);
		});
		setCurrentLoading(true)
	}

	const context = {
		loading: currentLoading,
		items: currentItems,
		getItems: getItemsHandler,
		addItem: addItemHandler,
		updateItem: updateItemHandler,
		deleteItem: deleteItemHandler,
	} 

	return (
		<ItemsContext.Provider value={context}>
			{props.children}
		</ItemsContext.Provider>
	);
}

export default ItemsContext;