import React, { Component } from 'react'


class ComponentDitCatch extends Component {
    state = {throwError: false}
    render() {

        if (this.state.throwError) {
            throw new Error('Error lanzado por el botón')
        }

        return (
            <button onClick={() => {this.setState({throwError: true})}}>
            Lanzar Error!
            </button>
        );
    }
}


 class EjemploComponentDitCatch extends Component {
    state = {hasError: false, errorMsj: ''} 
    componentDidCatch(error, errorInfo) {
        //Este método se utiliza para capturar excepciones de los componentes hijos

        this.setState({hasError:true, errorMsj:error.toString()})
     }

  render() {

    if (this.state.hasError) {
        return (
            <div>
                <p>Error en el componente: {this.state.errorMsj}</p>
                <button onClick={()=> {this.setState({hasError: false})}}>Volver a la aplicación</button>
            </div>
          )
    }

    return (
      <div>componentDitCatch
          <ComponentDitCatch />
      </div>
    )
  }
}

export default EjemploComponentDitCatch