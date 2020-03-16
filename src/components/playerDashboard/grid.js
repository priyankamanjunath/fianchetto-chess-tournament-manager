import React from 'react';
import Header from "./header";
import GridItem from "./gridItem";

class Grid extends React.Component {


    state = {
        tournaments  : [1,2,3,4,5]
    }

    render(){
        return (
        <div className={"container col-11"}>
            
            <div className={"row"}>
            {
                this.state.tournaments.map(function (tournament, index) {
                    return <GridItem
                        key = {index}
                        tournament = {tournament}/>
                },this)
            }

            </div>

        </div>
    )}
}

export default Grid
