import React, { Component } from 'react'

class ComponentADesmontar extends Component {
    state = { windowWidth: 0}

    _updateStateWindowWidth = () => {
        this.setState({windowWidth: document.body.clientWidth})
    }

    componentDidMount() {
        this._updateStateWindowWidth()
        window.addEventListener(
            'resize',
            this._updateStateWindowWidth
        )
    }

    componentWillUnmount() {
        window.removeEventListener(
            'resize',
            this._updateStateWindowWidth
        )
    }

    render() {
        return (
            <div>
                <p>Ancho de la ventana: {this.state.windowWidth}</p>
            </div>
        );
    }
}



class EjemploCicloDeDesmontaje extends Component {
    state = {mostrarComponente:true}
  render() {
    if (this.state.mostrarComponente) {
        return (
            <div>
                <h3>Ciclo de desmontaje: ComponentWillUnMount</h3>
                <ComponentADesmontar />
                <button onClick={() => this.setState({mostrarComponente: false})}>
                    Desmontar Component
                </button>
            </div>
          )
    } else {
        return (
            <p>Componente desmontado</p>
          )
    }
  }
}

export default EjemploCicloDeDesmontaje