import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function ModalRemocao({ fabrica, onCancel, onConfirm }) {
    return (
        <Modal show={fabrica} onHide={onCancel}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmar Remoção de fabrica</Modal.Title>
            </Modal.Header>
            <Modal.Body>Deseja realmente excluir a fabrica {`${fabrica?.codigo} - ${fabrica?.nome}`}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCancel}>
                    Cancelar
            </Button>
                <Button variant="primary" onClick={onConfirm}>
                    Sim
                </Button>
            </Modal.Footer>
        </Modal>
    )
}