import React, { useState, useContext } from 'react';

import ItemsContext from '../../../context/items-context';

const Add = () => {
	const itemsCtx = useContext(ItemsContext);
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')

	const submit = (e) => {
		e.preventDefault()
		const item = {title, text}
		itemsCtx.addItem(item)
	}

	return (
		<div>
			<form className="add-form" onSubmit={submit}>
				<div>
					<input type="text" placeholder='Add Title' value={title} onChange={(e) => setTitle(e.target.value)} />
				</div>
				<div>
					<textarea placeholder='Add Text' value={text} onChange={(e) => setText(e.target.value)} />
				</div>
				<div>
					<input type='submit' value='Save' />
				</div>
			</form>
		</div>
	)
}

export default Add
