import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './Form.css'
import '../animation/Animation.css'

const Formulario = () => {
    return (
    
    <div className="body">
        <div>
            <span className="tittle tracking-in-expand-fwd">Criar Conta</span>
        </div>
        <div className="espaco">
        <Form>
            <Form.Group  controlId="formBasicText">
                <Form.Label>Seu nome</Form.Label>
                <Form.Control className="formControl" type="text" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control className="formControl" type="email" />
            </Form.Group>
            <div>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control className="formControl" type="password" placeholder="Pelo menos 6 caracteres" />
                    {/*<i className="iconForm"></i>*/}
                    <div>
                        <span className="descPass">As senhas devem ter no mínimo 6 caracteres</span>
                    </div>
                </Form.Group>
            </div>
            <Form.Group controlId="formBasicPasswordTwo">
                <Form.Label>Insira a senha nova mais uma vez</Form.Label>
                <Form.Control className="formControl" type="password" />
            </Form.Group>
            <div>
                <Form.Group>
                    <Button className="button"  variant="warning" type="submit">
                        Criar sua conta da Amazon
                    </Button>
                </Form.Group>
                <div className="describe">
                    Ao criar uma conta você concorda com as <a href="https://www.amazon.com.br/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=201283910">
                        Condições de Uso</a> da Amazon. Por favor verifique a <a href="https://www.amazon.com.br/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=201283950">
                        Notificação de Privacidade</a>, <a href="https://www.amazon.com.br/gp/help/customer/display.html/?nodeId=201890250">
                        Notificação de Cookies</a> e a <a href="https://www.amazon.com.br/gp/help/customer/display.html?nodeId=201283970">
                        Notificação de Anúncios Baseados em Interesse</a>.
                            
                            
                </div>
            </div>
            <div className="box">
            </div>
            <div className="describe">
                Você já tem uma conta? <a href="https://www.amazon.com.br/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2F%3Fref_%3Dnav_signin&prevRID=P2Q6X8505W9DBD0TSXFD&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=brflex&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0">
                Fazer login </a>
                    
            </div>
        </Form>
        </div>
    </div>) 
}

export default Formulario