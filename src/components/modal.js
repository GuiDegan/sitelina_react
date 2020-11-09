import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalSecao = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader className="modal-title" toggle={toggle}>infratech</ModalHeader>
                <ModalBody>
                    A Lina conecta FinTechs, bancos e negócios digitais ao Sistema de Pagamentos Brasileiro (SPB), ao Sistema de Pagamentos Instantâneos (SPI/PIX) e ao ecossistema brasileiro de Open Banking, de forma rápida, eficiente e segura, promovendo a interoperabilidade e convivência entre os atuais e os novos meios de pagamento.
                    Nossa tecnologia e processos operacionais incorporam padrões internacionais da industria financeira, em conformidade com as recomendações e princípios dos organismos de autorregulação e supervisão do sistema financeiro global, notadamente BIS, IOSCO e ISO TC68.
        </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}></Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalSecao;