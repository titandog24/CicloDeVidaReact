import React, { Component } from 'react';

class ComponentWillMount extends Component {
    constructor(props) {
        super(props);
        console.log('constructor')
        this.state = {mensaje: 'Mensaje Inicial'}
    }

    componentWillMount(){
        console.log('componentWillMount');
        this.setState({mensaje: 'Mensaje modificado'})
    }
    
    render() {
        console.log('Render');
        return (
            <div>
                <h4>Ciclo de montaje: ComponentWillMount</h4>
                <p>{this.state.mensaje}</p>
            </div>
        );
    }
}

export default ComponentWillMount;
