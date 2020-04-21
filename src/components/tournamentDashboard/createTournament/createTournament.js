import React, {Component} from 'react';
import tournamentService from "../../../services/tournamentService";
import "./../../login/login.css";

class CreateTournament extends Component {
    state = {
        newTournamentName: "",
        newTournamentLocation: "",
        description: "",
        newPrizeMoney: "",
        startDate: "",
        endDate: "",
        winner: "",
        inProgress: true,
    };

    handleTournamentNameChange = e => {
        this.setState({newTournamentName: e.target.value});
    };

    handlTournamentLocationChange = e => {
        this.setState({newTournamentLocation: e.target.value});
    };

    handlePrizeMoneyChange = e => {
        this.setState({newPrizeMoney: e.target.value});
    };

    handleStartDateChange = e => {
        this.setState({startDate: e.target.value});
    };
    handleEndDateChange = e => {
        this.setState({endDate: e.target.value});
    };

    handleDescriptionChange = e => {
        this.setState({description: e.target.value})
    }
    submitNewTournament = (e) => {
        e.preventDefault();
        const tournamentToCreate = {
            name: this.state.newTournamentName,
            location: this.state.newTournamentLocation,
            prize: this.state.newPrizeMoney,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        };
        tournamentService.createTournament(this.props.userId, tournamentToCreate).then(res => {
               alert("Tournamnent Created!")
               this.props.history.push({pathname: `/user/${this.props.userId}/dashboard`});
           }
        );
    };

    render() {
        return (
            <div className="row background">
                <div className = "col-sm-3"/>
                
                <div className = "col-sm-6">
                    <h1 className={"text-center"}>Create new Tournament</h1>

                    <form>
                        <div className="form-group row">
                            <label htmlFor="Name" className="col-sm-2 col-form-label text-white bg-dark   ">
                                Name
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control"
                                       id="name"
                                   onChange={this.handleTournamentNameChange} required/>

                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="location" className="col-sm-2 col-form-label text-white bg-dark   ">
                            Location
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control "
                                   id="location"
                                   onChange={this.handlTournamentLocationChange} required/>

                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="description" className="col-sm-2 col-form-label text-white bg-dark   ">
                            Description
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control "
                                   id="description"
                                   onChange={this.handleDescriptionChange} required/>

                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label text-white bg-dark   ">
                            Prize money
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control" type="number"
                                   id="prize" onChange={this.handlePrizeMoneyChange} required/>
                        </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="startDate" className="col-sm-2 col-form-label text-white bg-dark ">
                            Start Date
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control" type="date"
                                   id="startDate" onChange={this.handleStartDateChange} required/>

                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="endDate" className="col-sm-2 col-form-label text-white bg-dark   ">
                            End Date
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control" type="date"
                                   id="endDate" onChange={this.handleEndDateChange} required/>

                        </div>
                    </div>


                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label "/>
                        <div className="col-sm-10">

                            <button className="btn btn-primary btn-block wbdv-login"
                                    onClick={(e) => this.submitNewTournament(e)}>Create New Tournament
                            </button>

                        </div>
                    </div>
                    </form>
                </div>
            </div>
        )

    }

}

export default CreateTournament
