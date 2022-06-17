import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
    amazon: 'https://th.bing.com/th/id/OIP.ckkz3XutQS1JyjwqXMlyVgHaEK?pid=ImgDet&rs=1',
    facebook: 'https://hunterae.com/wp-content/uploads/images2/facebook-like-reactions-transition-videohive-19619829-download-free-hunterae-com-2.jpg',
    google: 'https://th.bing.com/th/id/R.81130fd2b50304b4160b2c37586ed5b1?rik=TD3vAvPaoIh8Bw&pid=ImgRaw&r=0'
}

const ANIMALS = Object.keys(ANIMAL_IMAGES)

class AnimalImage extends Component {
    state = { src: ANIMAL_IMAGES[this.props.animal]}

    componentWillReceiveProps(nextProps) {
        //Este método se invocará cuando el componente padre envía nuevas props a los componentes hijos.
        this.setState({src: ANIMAL_IMAGES[nextProps.animal]})
    }

    shouldComponentUpdate(nextProps) {
        //Este método sirve para comprobar manualmente si debe renderizar o no la página
        //Heredar el component de la clase PureComponent en vez de Component permite omitir este método.
        //Nota: La clase PureComponent debe de usarse en component con props y state sencillos.
        return this.props.animal !== nextProps.animal
    }

    render() {
        return (
            <div>
                <p>Selected {this.props.animal}</p>
                <img alt={this.props.animal}
                src={this.state.src}
                width={'250'} />
            </div>
        );
    }
}

AnimalImage.propTypes = {
    animal: PropTypes.oneOf(ANIMALS)
}

class EjemploCicloDeActualizacion extends Component {
    state = {animal: 'amazon'}

    _renderAnimalButton = (animal) => {
        return (
            <button 
            // disabled={animal === this.state.animal}
            key={animal} 
            onClick={() => { this.setState({ animal }) }}>{animal}</button>
        )
    }

  render() {
    return (
      <div>
          <h4>Ciclo de Actualización, Ejemplo de: ComponentWillReceive</h4>
          {ANIMALS.map(this._renderAnimalButton)}
          <AnimalImage animal={this.state.animal}/>
      </div>
    )
  }
}

export default EjemploCicloDeActualizacion
