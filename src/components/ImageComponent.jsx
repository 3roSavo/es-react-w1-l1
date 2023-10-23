import { Component } from "react";

class MyImage extends Component {
    render() {
        return <img src={this.props.urlImage} alt={this.props.altImage}/>
    }
}
export default MyImage