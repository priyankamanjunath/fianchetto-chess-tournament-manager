
import React from "react";
import {Link} from "react-router-dom";

class GridItem extends React.Component{

    state = {
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRu8dXA6_5uXxjyf5nXjAcz3dbNo_wifkPD0Gsl6VU7osRSCpvk"
    }

    componentDidMount() {

    }

    render(){
        return(
            <div className="col-sm-6 col-md-4 col-lg-3 p-2">
                    <div className="card">
                        <img className = "card-img-top m2"
                         src={this.state.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.tournament.name}</h5>
                            <p className="card-text">{this.props.tournament.description}</p>
                            <Link className={"col btn btn-primary"} to = {`/user/${this.props.userId}/tournament/${this.props.tournament.id}/home`}>
                                Go to Tournament
                            </Link>
                        </div>
                    </div>

            </div>
        )
    }
}

export default GridItem
