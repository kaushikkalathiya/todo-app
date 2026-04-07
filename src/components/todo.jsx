import { Typography, Box, IconButton, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useState } from 'react';

function Todo ({ todo, handleSwitchTodo, handleDeleteTodo }) {
    const [openDialog, setOpenDialog] = useState(false);

    const handleDeleteClick = () => {
        setOpenDialog(true);
    };

    const handleConfirmDelete = () => {
        handleDeleteTodo(todo.id);
        setOpenDialog(false);
    };

    const handleCancelDelete = () => {
        setOpenDialog(false);
    };
    return (
        <>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: '16px',
                bgcolor: todo.Completed ? '#f2f2f7' : '#fff',
                transition: 'all 0.15s ease',
                '&:active': {
                    bgcolor: todo.Completed ? '#e8e8ed' : '#f5f5f7',
                }
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    flex: 1,
                    minWidth: 0,
                }}>
                    <Tooltip title={todo.Completed ? 'Mark incomplete' : 'Mark complete'} placement="top">
                        <IconButton 
                            size="small"
                            onClick={() => handleSwitchTodo(todo.id)}
                            sx={{ 
                                color: todo.Completed ? '#34c759' : '#d0d0d5',
                                flexShrink: 0,
                                '&:active': {
                                    transform: 'scale(0.9)',
                                },
                                minWidth: '44px',
                                minHeight: '44px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {todo.Completed ? (
                                <CheckCircleIcon sx={{ fontSize: '24px' }} />
                            ) : (
                                <RadioButtonUncheckedIcon sx={{ fontSize: '24px' }} />
                            )}
                        </IconButton>
                    </Tooltip>
                    <Typography 
                        variant="body1" 
                        sx={{
                            textDecoration: todo.Completed ? 'line-through' : 'none',
                            color: todo.Completed ? '#a1a1a6' : '#000',
                            flex: 1,
                            wordBreak: 'break-word',
                            fontSize: '16px',
                            fontWeight: 500,
                            lineHeight: 1.5,
                        }}
                    >
                        {todo.name}
                    </Typography>
                </Box>
                <Tooltip title="Delete" placement="top">
                    <IconButton 
                        size="small"
                        onClick={handleDeleteClick}
                        sx={{ 
                            color: '#ff3b30',
                            flexShrink: 0,
                            ml: 1,
                            '&:active': {
                                transform: 'scale(0.9)',
                            },
                            minWidth: '44px',
                            minHeight: '44px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <DeleteIcon sx={{ fontSize: '20px' }} />
                    </IconButton>
                </Tooltip>
            </Box>

            <Dialog open={openDialog} onClose={handleCancelDelete}>
                <DialogTitle sx={{ fontWeight: 700, color: '#000' }}>Delete Task?</DialogTitle>
                <DialogContent sx={{ py: 2 }}>
                    <Typography variant="body1" sx={{ color: '#333' }}>
                        Are you sure you want to delete this task? This action cannot be undone.
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ p: 2, gap: 1 }}>
                    <Button 
                        onClick={handleCancelDelete}
                        sx={{ 
                            color: '#0a84ff',
                            textTransform: 'none',
                            fontWeight: 600
                        }}
                    >
                        Cancel
                    </Button>
                    <Button 
                        onClick={handleConfirmDelete}
                        sx={{ 
                            backgroundColor: '#ff3b30',
                            color: 'white',
                            textTransform: 'none',
                            fontWeight: 600,
                            '&:hover': {
                                backgroundColor: '#ff3b30',
                                opacity: 0.8,
                            }
                        }}
                        variant="contained"
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Todo;