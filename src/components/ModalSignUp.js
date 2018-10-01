import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter, Row, Input, Fa } from 'mdbreact';

class ModalSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false
    };
  }

  toggle(nr) {
    let modalNumber = 'modal' + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return (
      <Container>
        <h4 className="mt-4">Simple modal register</h4>
        <Row>
          <Button rounded onClick={() => this.toggle(2)}>Launch Modal Register Form</Button>
          <Modal isOpen={this.state.modal2} toggle={() => this.toggle(2)} >
            <ModalHeader className="text-center" titleClass="w-100 font-weight-bold" toggle={() => this.toggle(2)}>Sign in</ModalHeader>
            <ModalBody>
              <form className="mx-3 grey-text">
                <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                <Input label="Your password" icon="lock" group type="password" validate/>
              </form>
            </ModalBody>
            <ModalFooter className="justify-content-center">
              <Button color="deep-orange" onClick={() => this.toggle(2)}>SIGN UP</Button>
            </ModalFooter>
          </Modal>
        </Row>
      </Container>
    );
  }
}

export default ModalSignUp;
