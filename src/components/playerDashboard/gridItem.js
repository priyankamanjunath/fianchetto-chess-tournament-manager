
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
                    <div className={"row"}>

                        {/*<div className={"col-6"}>*/}
                        {/*    <button className={"btn btn-white btn-block"}>*/}
                        {/*        <i className={"fas fa-edit fa-xs"}></i></button>*/}
                        {/*</div>*/}


                        {/*<div className={"col-6"}>*/}
                        {/*    <button className={"btn btn-white btn-block"}>*/}
                        {/*        <i className={"fas fa-trash fa-xs"}></i></button>*/}
                        {/*</div>*/}
                    </div>
                    <img src={this.state.image} className="card-img-top" alt="..."/>
                    <div className="card-body">


                        <h5 className="card-title">{this.props.tournament.name}</h5>


                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
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
