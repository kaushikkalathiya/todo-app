import { TextField, Button, Box } from "@mui/material";
import { useState, useRef } from "react";
import AddIcon from '@mui/icons-material/Add';

function NewTodo({ handleAddTodo }) {
    const [todo, setTodo] = useState('');
    const inputRef = useRef(null);

    const handleAdd = () => {
        if (todo.trim() !== '') {
            handleAddTodo(todo);
            setTodo('');
            inputRef.current?.focus();
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            gap: 1.5,
            alignItems: 'stretch',
        }}>
            <TextField 
                inputRef={inputRef}
                id="new-todo" 
                placeholder="Add a new task..." 
                variant="outlined"
                fullWidth
                value={todo} 
                onChange={(e) => setTodo(e.target.value)}
                onKeyPress={handleKeyPress}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        backgroundColor: '#fff',
                        fontSize: '16px',
                        '& fieldset': {
                            borderColor: '#e5e5e7',
                            borderWidth: '1px'
                        },
                        '&:hover fieldset': {
                            borderColor: '#d0d0d5',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#0a84ff',
                            borderWidth: '2px',
                        },
                    },
                    '& .MuiOutlinedInput-input': {
                        padding: '14px 16px',
                        '&::placeholder': {
                            color: '#a1a1a6',
                            opacity: 1,
                        }
                    }
                }}
            />
            <Button 
                variant="contained" 
                onClick={handleAdd}
                sx={{
                    backgroundColor: '#0a84ff',
                    borderRadius: '12px',
                    padding: '12px 20px',
                    minWidth: '52px',
                    height: '52px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.1em',
                    fontWeight: 700,
                    textTransform: 'none',
                    boxShadow: '0 2px 8px rgba(10, 132, 255, 0.3)',
                    '&:active': {
                        backgroundColor: '#0074d9',
                        boxShadow: '0 1px 4px rgba(10, 132, 255, 0.3)',
                    },
                    '&:hover': {
                        backgroundColor: '#0a84ff',
                        boxShadow: '0 4px 12px rgba(10, 132, 255, 0.4)',
                    }
                }}
            >
                <AddIcon />
            </Button>
        </Box>
    );

}

export default NewTodo;