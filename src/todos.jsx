import { Container, Typography, Box, Paper, Divider } from '@mui/material';
import NewTodo from './components/new-todo';
import { useState } from 'react';
import Todo from './components/todo';

function Todos() {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (todoName) => {
        if (todoName.trim() === '') return;
        setTodos((prev) => [...prev, {
            id: Date.now(),
            name: todoName,
            Completed: false,
        }]);
    }

    const handleSwitchTodo = (id) => {
        setTodos(prev => prev.map(todo => todo.id !== id ? todo 
        : {
            ...todo,
            Completed: !todo.Completed,
        }));
    }

    const handleDeleteTodo = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }

    const activeTodos = todos.filter(todo => !todo.Completed);
    const completedTodos = todos.filter(todo => todo.Completed);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            pb: 2
        }}>
            {/* Header */}
            <Box sx={{
                px: 2,
                py: 3,
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                borderBottom: '1px solid #e5e5e7',
            }}>
                <Typography 
                    variant='h1' 
                    sx={{
                        fontSize: { xs: '2em', sm: '2.5em' },
                        fontWeight: 700,
                        color: '#000',
                        mb: 0.5,
                        letterSpacing: '-0.02em'
                    }}
                >
                    My Tasks
                </Typography>
                <Typography 
                    variant='body2' 
                    sx={{
                        color: '#8e8e93',
                        fontSize: '0.95em'
                    }}
                >
                    {activeTodos.length} Active • {completedTodos.length} Completed
                </Typography>
            </Box>

            {/* Main Content */}
            <Box sx={{
                flex: 1,
                px: 2,
                py: 3,
                maxWidth: '600px',
                margin: '0 auto',
                width: '100%',
            }}>
                {/* Input Section */}
                <Box sx={{ mb: 4 }}>
                    <NewTodo handleAddTodo={handleAddTodo} />
                </Box>

                {/* Empty State */}
                {todos.length === 0 ? (
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        py: 8,
                        textAlign: 'center'
                    }}>
                        <Typography 
                            variant='h4' 
                            sx={{
                                fontSize: '2.5em',
                                mb: 1,
                                opacity: 0.3
                            }}
                        >
                            ✓
                        </Typography>
                        <Typography 
                            variant='h6' 
                            sx={{
                                color: '#8e8e93',
                                mb: 0.5,
                                fontWeight: 600
                            }}
                        >
                            No tasks yet
                        </Typography>
                        <Typography 
                            variant='body2' 
                            sx={{
                                color: '#a1a1a6',
                                maxWidth: '200px'
                            }}
                        >
                            Add your first task to get started
                        </Typography>
                    </Box>
                ) : (
                    <>
                        {/* Active Todos */}
                        {activeTodos.length > 0 && (
                            <Box sx={{ mb: 4 }}>
                                <Typography 
                                    variant='h6' 
                                    sx={{ 
                                        mb: 1.5, 
                                        fontWeight: 700,
                                        color: '#000',
                                        fontSize: '0.95em',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        color: '#8e8e93'
                                    }}
                                >
                                    Active
                                </Typography>
                                <Box sx={{
                                    backgroundColor: '#fff',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
                                }}>
                                    {activeTodos.map((todo, index) => (
                                        <Box key={todo.id}>
                                            <Todo 
                                                todo={todo} 
                                                handleSwitchTodo={handleSwitchTodo}
                                                handleDeleteTodo={handleDeleteTodo}
                                            />
                                            {index < activeTodos.length - 1 && (
                                                <Divider sx={{ my: 0, opacity: 0.3 }} />
                                            )}
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        )}

                        {/* Completed Todos */}
                        {completedTodos.length > 0 && (
                            <Box>
                                <Typography 
                                    variant='h6' 
                                    sx={{ 
                                        mb: 1.5, 
                                        fontWeight: 700,
                                        color: '#000',
                                        fontSize: '0.95em',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        color: '#8e8e93'
                                    }}
                                >
                                    Completed
                                </Typography>
                                <Box sx={{
                                    backgroundColor: '#fff',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
                                }}>
                                    {completedTodos.map((todo, index) => (
                                        <Box key={todo.id}>
                                            <Todo 
                                                todo={todo} 
                                                handleSwitchTodo={handleSwitchTodo}
                                                handleDeleteTodo={handleDeleteTodo}
                                            />
                                            {index < completedTodos.length - 1 && (
                                                <Divider sx={{ my: 0, opacity: 0.3 }} />
                                            )}
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        )}
                    </>
                )}
            </Box>
        </Box>
    );
}

export default Todos;