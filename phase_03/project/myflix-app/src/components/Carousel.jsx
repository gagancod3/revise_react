import { Component } from "react";
import "../styles/Carousel.css";

class Carasoul extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  prevSlide = () => {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1 });
    } else {
      this.setState({ index: this.props.images.length - 1 });
    }
  };
  nextSlide = () => {
    if (this.state.index < this.props.images.length - 1) {
      this.setState({ index: this.state.index + 1 });
    } else {
      this.setState({ index: 0 });
    }
  };
  render() {
      console.log('props', this.props.images);
    return (
      <div>
        <h2 className="title">{this.props.title}</h2>
        <div className="block">
          <button id="btn" onClick={this.prevSlide}>&lt;</button>
          <img
            src={this.props.images[this.state.index].url}
            alt={this.props.images[this.state.index].alt}
            height={300}
            width={500}
          />
          <button id="btn" onClick={this.nextSlide}>&gt;</button>
        </div>
      </div>
    );
  }
}

export default Carasoul;
