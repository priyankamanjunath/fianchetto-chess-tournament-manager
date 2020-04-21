import React, {Component} from 'react';
import tournamentService from "../../../services/tournamentService";
import "./../../login/login.css";

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
            <div className="row background">
                <div className = "col-sm-4"/>
                
                <div className = "col-sm-4">
                    <h1 className={"text-center"}>Create new Tournament</h1>

                    <form>
                        <div className="form-group row">
                            <label htmlFor="Name" className="col-sm-3 col-form-label text-white">
                                Name
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       id="name" required={true}
                                   onChange={this.handleTournamentNameChange}/>

                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="location" className="col-sm-3 col-form-label text-white">
                            Location
                        </label>
                        <div className="col-sm-9">
                            <input className="form-control "
                                   id="location"
                                   onChange={this.handlTournamentLocationChange}/>

                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-3 col-form-label text-white">
                            Prize money
                        </label>
                        <div className="col-sm-9">
                            <input className="form-control" type="number"
                                   id="prize" required={true} onChange={this.handlePrizeMoneyChange}/>
                        </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="startDate" className="col-sm-3 col-form-label text-white">
                            Start Date
                        </label>
                        <div className="col-sm-9">
                            <input className="form-control" type="date"
                                   id="startDate" defaultValue={new Date().getDate()} onChange={this.handleStartDateChange}/>

                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="endDate" className="col-sm-3 col-form-label text-white">
                            End Date
                        </label>
                        <div className="col-sm-9">
                            <input className="form-control" type="date"
                                   id="endDate" onChange={this.handleEndDateChange}/>

                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="endDate" className="col-sm-3 col-form-label text-white">
                            Description
                        </label>
                        <div className="col-sm-9">
                            <input className="form-control" type="text"
                                   id="endDate" required={true} onChange={this.handleDescriptionChange}/>

                        </div>
                    </div>


                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label "/>
                        <div className="col-sm-9">

                            <button className="btn btn-primary btn-block wbdv-login"
                                    onClick={this.submitNewTournament}>Create New Tournament
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
