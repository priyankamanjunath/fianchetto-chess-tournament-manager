import React from 'react';
class Match extends React.Component {

    state = {
        result : "NA"
    }

    componentDidMount() {
        this.setState({
            result : this.props.match.result
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match !== prevProps.match)
        this.setState({
            result : this.props.match.result
        })
    }

    update = (e) => {
        this.setState({
            result: e.target.value
        });
        this.props.updateRound(this.props.match.id, e.target.value)
    }

    render(){
        return (

            <tr>
                <td>{this.props.match.white}</td>
                <td>{this.props.match.black}</td>
                <td>
                    <select
                        className="form-control"
                        value={this.state.result}
                        onChange ={
                            (e) => this.update(e)
                        }
                    >
                        <option value={"WIN"}>White Wins</option>
                        <option value={"LOSS"}>Black Wins</option>
                        <option value={"DRAW"}>Draw</option>
                        <option value={"NA"}>InProgress</option>
                    </select>

                </td>
                <td>{this.props.match.arbiter}</td>
                <td>{this.props.match.id}</td>


            </tr>
        )
    }
}


export default Match
