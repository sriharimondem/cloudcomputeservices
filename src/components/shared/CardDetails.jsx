import React, { Component } from 'react';

class CardDetails extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
  render() {
    return (
      
           <div className="col-5">
             <div className="card" style={{ width: "48rem", height: "25rem" }}>
                        <div className="card-body">
                            <h5 className="card-title text-start">{this.props.Header}</h5>
                            <img className="card-icon" src={this.props.Img} alt={this.props.imgDescription} />
                            <p className="card-text">{this.props.Description}</p>
                        </div>
                    </div>
            </div>
    )
  }
}
export default CardDetails;