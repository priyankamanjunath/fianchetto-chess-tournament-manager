import React from 'react';
class Match extends React.Component {

    state = {
        actvateInputField: false,
        course: this.props.course
    }

    toggleInputField = () =>this.setState(prevState =>{
        return({
            actvateInputField: !this.state.actvateInputField
        })
    })


    render(){
        return (

            <tr>
                <td>Hello</td>
            </tr>
        )
    }
}


export default Match
