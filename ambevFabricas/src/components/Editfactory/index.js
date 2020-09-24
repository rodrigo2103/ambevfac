import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fabricaService from './services/Editfactory-services';
import ModalRemocao from './modal-remocao';


export default function ListaFabrica() {
    const [fabrica, setFabricas] = useState([]);
    const [fabricaRemover, setFabricaRemover] = useState(null);

    const listaFabricas = () => {
        fabricaService
            .getFabricas()
            .then(fabricas => setFabricas(fabricas));
    };
    
    const removerFabrica = (fabrica) => {
        fabricaService
            .removeFabrica(fabrica.codigo)
            .then(() => {
                setFabricaRemover(null);
                listaFabricas();
            });

    };

    useEffect(() => {
        listaFabricas();
    }, []);

/*
    return (<>
        
        <Row>
            <Col>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>codeAmbev</th>
                            <th>Endereço</th>
                            <th>Dimensão</th>
                            <th>Pontuação</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {fabricas.map(x => (
                            <tr>
                                <td>{x.codigo}</td>
                                <td>{x.nome}</td>
                                <td>{x}</td>
                                <td>{x.dataNascimento}</td>
                                <td>
                                    <Link to={`/factory/${x.codigo}`}><Button>Editar</Button></Link>
                                    <Button variant="danger" onClick={() => setFabricaRemover(x)}>Remover</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>

        <ModalRemocao
            fabrica={fabricaRemover}
            onCancel={() => setFabricaRemover(null)}
            onConfirm={() => removerFabrica(fabricaRemover)}
        />
    </>)
*/
}