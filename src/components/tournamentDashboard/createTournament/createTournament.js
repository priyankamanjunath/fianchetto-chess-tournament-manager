import React, {Component} from 'react';
import tournamentService from "../../../services/tournamentService";

class CreateTournament extends Component {
    state = {
        newTournamentName: "",
        newTournamentLocation: "",
        newPrizeMoney: "",
        startDate: "",
        endDate: ""
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

    submitNewTournament = () => {
        const tournamentToCreate = {
            name: this.state.newTournamentName,
            location: this.state.newTournamentLocation,
            prize: this.state.newPrizeMoney,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        };

        tournamentService.createTournament(tournamentToCreate).then();
    };

    render() {
        return (
            <div className="container">
                <h1 className={"text-center"}>Create new Tournament</h1>

                <form>
                    <div className="form-group row">
                        <label htmlFor="Name" className="col-sm-2 col-form-label">
                            Name
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="name"
                                   onChange={this.handleTournamentNameChange}/>

                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="location" className="col-sm-2 col-form-label">
                            Location
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control "
                                   id="location"
                                   onChange={this.handlTournamentLocationChange}/>

                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Prize money
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control" type="number"
                                   id="prize" onChange={this.handlePrizeMoneyChange}/>
                        </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="startDate" className="col-sm-2 col-form-label">
                            Start Date
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control" type="date"
                                   id="startDate" onChange={this.handleStartDateChange}/>

                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="endDate" className="col-sm-2 col-form-label">
                            End Date
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control" type="date"
                                   id="endDate" onChange={this.handleEndDateChange}/>

                        </div>
                    </div>


                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"/>
                        <div className="col-sm-10">

                            <button className="btn btn-primary btn-block wbdv-login"
                                    onClick={this.submitNewTournament()}>Create New User
                            </button>

                        </div>
                    </div>

                </form>
            </div>
        )

    }

}

export default CreateTournament
