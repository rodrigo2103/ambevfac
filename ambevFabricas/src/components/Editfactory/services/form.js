import React, { useState, useEffect } from 'react';
import { Button, Col, Form, Badge } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import fabricaService from './Editfactory-services';

export default function FormularioFabrica() {
    const history = useHistory();
    const { codigo } = useParams();
    const [state, setState] = useState({ codigo: '', nome: '', ambevCode: '', endereço: '', dimensão: '', pontuação: '' });

    useEffect(() => {
        fabricaService
            .getFabrica(codigo)
            .then(fabrica => setState(fabrica))
            .catch(x => history.push('/fabricas'));
        ;
    }, [codigo, history]);

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });
    }

    const salvar = () => {
        let operation;
        if (state.codigo)
            operation = fabricaService.atualizaFabrica(state.codigo, state)
        else
            operation = fabricaService.adicionaFabrica({ ...state, codigo: Math.floor(Math.random() * 999999) });

        operation.then(x => history.push('/fabricas'));
    }

    return (
        <>
         
            <Button onClick={salvar}>Salvar</Button>
        </>
    )
}