import React from 'react';
import Match from "./match";
class Round extends React.Component {


    state = {
        matches : [1,2,3,4,5]
    }

    render(){
        return (
            <div className="mx-5">
                <h4>Round : {this.props.round}</h4>
                <table className="table table-striped">
                    <thead className={"bg-primary text-white"}>
                        <tr>
                            <td scope={"col"}>White</td>
                            <td scope={"col"}>Black</td>
                            <td scope={"col"}>Result</td>
                            <td scope={"col"}>Rating</td>
                            <td scope={"col"}>Rating</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.matches.map(function (match, index) {
                            return <Match
                                key={index}
                                match = {match}
                            />
                        }, this)
                    }
                    </tbody>
                </table>
            </div>
        )
    }


}


export default Round
