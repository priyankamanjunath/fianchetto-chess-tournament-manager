import React from 'react';
import Match from "./match";
class Round extends React.Component {


    state = {
        matches : [1,2,3,4,5]
    }

    render(){
        return (<div className="mx-5">
                <table className="table bg-white">
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
