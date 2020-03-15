import React from 'react';
import Header from "./header";
import GridItem from "./gridItem";

class Grid extends React.Component {


    render(){
        return (
        <div className={"container col-11"}>
            <Header
                toggleLayout = {this.props.toggleLayout}
            />

            <div className={"row"}>
            {
                this.state.tournaments.map(function (course, index) {
                    return <GridItem
                        key = {index}
                        course = {course}
                        goToEditor = {this.props.goToEditor}
                        deleteCourse = {this.props.deleteCourse}/>
                },this)
            }
            </div>

        </div>
    )}
}

export default Grid
