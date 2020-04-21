import React from "react"
import {Link} from "react-router-dom";
import {findAllTournaments, findTournamentsLeftForUser} from "../../services/tournamentService"
import {findTournamentsForUser} from "../../services/tournamentService"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {registerForTournament} from "../../services/userService";
import {Redirect} from "react-router";

const MySwal = withReactContent(Swal);

class UserHome extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            newMatches: []
        }
    }

    componentDidMount(): void {
        findTournamentsLeftForUser(this.props.userId)
            .then(newMatches => {
                this.setState({
                    newMatches: newMatches
                })
            })
    }

    participate = (tId, tName) => {
        // alert(tId)
        let uId = this.props.userId;
        MySwal.fire({
                        title: <b>Confirmation</b>,
                        footer: 'Copyright © 2020 | Fianchetto Tournament System',
                        html: `Do you want to participate in <b>${tName}</b>`,
                        showCancelButton: true,
                        confirmButtonColor: '#007BFF',
                        cancelButtonColor: '#CB4335',
                        cancelButtonText: '<i class="fa fa-thumbs-down"/>',
                        confirmButtonText: 'Bring it On',
                    }).then((result) => {
                            if (result.value) {
                                Swal.fire(
                                    'Success',
                                    `You have been registered in <b>${tName}</b>`,
                                    'success'
                                ).then(() => {
                                    registerForTournament(uId, tId).then(res =>{
                                        window.location.reload(false);
                                    })
                                })
                            }

        })
    }

    render () {
        if (this.props.userId == -1) {
            return (
                <Redirect to={'/'}/>
            )
        }
        return (
            <div className={"container"}>
                <br/>
                <h2 style={{color: "#5D6D7E"}}>Explore New Tournaments</h2>
                <div className="border-top my-3"/>
                    <div className={"row"}>
                            {
                                this.state.newMatches.map((tournament,index) =>
                                    <div className={"col-3"} style={{border: "1px lightgrey solid", 'border-radius':"5px", margin: "10px"}}>
                                              <img className="card-img-top" src="https://images.chesscomfiles.com/uploads/v1/article/25126.7ba343a5.1200x674o.34772f7f578c.jpeg"
                                                   alt="Card image cap" />
                                              <div className="card-body">
                                                  <h5 className="card-title">{tournament.name}</h5>
                                                  <p className="card-text">
                                                      Tournament short description
                                                  </p>
                                                  <div style={{}}>
                                                      <Link to = {`/user/${this.props.userId}/tournament/${tournament.id}/home`}
                                                            className="col btn btn-primary">Show Info
                                                      </Link>
                                                      <br/>
                                                      <br/>
                                                      <button className={"col btn btn-success"}
                                                      onClick= {() => this.participate(tournament.id, tournament.name)}>
                                                          Participate
                                                      </button>
                                                </div>
                                              </div>
                                    </div>
                                )
                            }
                    </div>
            </div>

        )
    }

}

export default UserHome
