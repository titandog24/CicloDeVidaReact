import React, { Component } from 'react'

class ComponentDidMount extends Component {
    constructor() {
        super();
        console.log('Constructor');
        this.state= {scrollY: 0}
    }

    componentDidMount() {
        console.log('ComponentDidMount');
        document.addEventListener('scroll', () => {
            this.setState({scrollY: window.scrollY})
        });
    }
    

  render() {
      console.log('render');
    return (
      <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi qui architecto nisi dolor magnam culpa harum asperiores ex totam! Doloremque, qui sit aut tempore explicabo vitae. Molestias veritatis et hic!</p>
          El scroll es: {this.state.scrollY}
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi atque, autem repudiandae quidem deserunt ratione ducimus consectetur ut recusandae dignissimos doloremque temporibus tempore sed, mollitia perspiciatis labore quam illum dolores.</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi iure culpa fugit id modi, velit vitae corrupti blanditiis fugiat, architecto dolore cupiditate aspernatur inventore aliquam iste quaerat? Incidunt, voluptatem error.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi iure culpa fugit id modi, velit vitae corrupti blanditiis fugiat, architecto dolore cupiditate aspernatur inventore aliquam iste quaerat? Incidunt, voluptatem error.</p>

      </div>
    )
  }
}

export default ComponentDidMount
