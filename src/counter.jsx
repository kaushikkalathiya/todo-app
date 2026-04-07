import { useState, useEffect, useContext } from 'react';
import { NameContext } from './main';
import { Container, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';

function Counter() {
	let [counter, setCounter] = useState(0);
	const name = useContext(NameContext);
	console.log('name from Counter', name);
	useEffect(()=> {
		const timeout = setTimeout(() => console.log('run from useEffect'), 1000);
		return () => {
			clearTimeout(timeout);
		};
		// document.title = counter;
	}, [counter]);

	const handleIncrement = () => {
		setCounter((prev) => prev + 1);
		// counter++;
	};

	const handleReset = () => {
		setCounter(0);
		// counter = 0;
	};

	const handleDecrement = () => {
		setCounter((prev) => prev - 1);
		// counter--;
	};

	return (
		<Container>
			<Typography variant='h1'>Counter Component :- {counter}</Typography>
			<h1>Count :- {counter}</h1>
			<Button variant='outlined' onClick={handleIncrement} sx={{paddingRight:10,}} > <AddIcon /> Increment</Button>
			<Button variant='contained' onClick={handleReset} sx={{paddingRight:10,}}> <ClearIcon /> Reset</Button>
			<Button variant='outlined' onClick={handleDecrement} sx={{paddingRight:10,}}> <RemoveIcon /> Decrement</Button>

			<br/><br/><br/>
			<div>Counter Component</div>
			<p>Counter Component</p>
			<span>Counter Component</span>

			<h1>Counter Component</h1>
			<h2>Counter Component</h2>
			<h3>Counter Component</h3>
			<h4>Counter Component</h4>
			<h5>Counter Component</h5>
			<h6>Counter Component</h6>

		</Container>
	);
}

export default Counter;