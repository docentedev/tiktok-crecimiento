import React, { useState } from 'react';
import styles from './Actions.module.css';
import { Box, Button, Card, IconButton, Modal, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'

interface ActionsProps {
    onDelete: () => void;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Actions = ({ onDelete }: ActionsProps) => {
    const [open, setOpen] = useState(false);
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);
    const handleDelete = () => {
        setOpen(false);
        onDelete();
    }

    return (
        <div className={styles.actions}>
            <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Confirmar eliminación de data
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        este cambio es irreversible
                    </Typography>
                    <Button onClick={handleDelete}>Eliminar</Button>
                </Box>
            </Modal>
            <IconButton onClick={handleOpenModal}>
                <DeleteIcon />
            </IconButton>
        </div>
    )
}

export default Actions;