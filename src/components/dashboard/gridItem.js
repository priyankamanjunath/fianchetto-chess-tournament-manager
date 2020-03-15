
import React from "react";
import {updateCourse} from "../../../../services/CourseService";
import {Link} from "react-router-dom";

class GridItem extends React.Component{


    //States consisting of variable for activating input field and keeping a local copy of the course under
    // observation
    state = {
        editor: false,
        course: this.props.course
    }


    // Function for switching the input field
    toggleInputField = () =>this.setState( prevState =>{
        return({
            editor: !this.state.editor
        })
    })

    // Rendering the corresponding card
    render(){
        return(

            //The div representing that course
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 bg-light p-2">
                <div className="card">
                    <div className={"row"}>

                        {/*The edit button*/}
                        {
                            !this.state.editor &&
                            <div className={"col-6"}>
                            <button className={"btn btn-white btn-block"}
                                    onClick={() => {this.toggleInputField()}}>
                                <i className={"fas fa-edit fa-xs"}></i></button>
                            </div>
                        }


                        {/*//Save button*/}
                        {
                            this.state.editor &&
                            <div className={"col-6"}>
                                <button className={"btn btn-save btn-block"}
                                    // onClick={() => {this.toggleEditor()}}
                                    onClick={(e) => {
                                        this.toggleInputField()
                                        updateCourse(this.state.course._id, this.state.course)
                                            .then(status => {})
                                    }}>
                                    <i className={"fas fa-save fa-xs"}></i></button>
                            </div>
                        }

                        <div className={"col-6"}>
                            <button className={"btn btn-white btn-block"}
                                onClick={() => this.props.deleteCourse(this.props.course)}>
                            <i className={"fas fa-trash fa-xs"}></i></button>
                        </div>
                    </div>
                    <div className="card-body">

                        {   !this.state.editor &&
                            <h5 className="card-title">{this.state.course.title}</h5>
                        }

                        {/*The input field*/}
                        {
                            this.state.editor &&
                            <div className={"card-title"}>
                                <input
                                    className={"form-control"}
                                    type={"text"}
                                    value={this.state.course.title}
                                    onChange={(e) => this.setState({
                                        course:{
                                            ...this.state.course,
                                            title: e.target.value
                                        }
                                    })}>
                                </input>
                            </div>

                        }

                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                        <Link className={"col btn btn-primary"} to = {`/course-editor/course/${this.props.course._id}`}>
                            Go to Course
                        </Link>

                    </div>
                </div>
            </div>
        )
    }
}

export default GridItem
