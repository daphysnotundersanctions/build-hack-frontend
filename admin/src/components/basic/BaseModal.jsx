import React from 'react';
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";

function BaseModal({open, onClose, children}) {
    return (
        <Modal open={open} onClose={onClose}>
            <ModalDialog
                aria-labelledby="basic-modal-dialog-title"
                aria-describedby="basic-modal-dialog-description"
                sx={{ maxWidth: 500}}
            >
                {children}
            </ModalDialog>
        </Modal>
    );
}

export default BaseModal;