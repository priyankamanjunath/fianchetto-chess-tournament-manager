import React from 'react';
import Round from "./round";


class Pairings extends React.Component {

    state = {
        rounds : [1,2,3,4,5]
    }

    render(){
        return (<div className="mx-5">
                <table className="table bg-white">
                    <tbody>
                    {
                        this.state.rounds.map(function (round, index) {
                            return <Round
                                key={index}
                                round = {round}
                            />
                        }, this)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}


export default Pairings
