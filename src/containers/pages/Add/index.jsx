import React, { useState } from 'react'

const Add = () => {
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')

	const submit = (e) => {
		e.preventDefault()
		const item = {title, text}
		fetch(
      'https://react-context-9849b-default-rtdb.firebaseio.com/items.json',
      {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
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
