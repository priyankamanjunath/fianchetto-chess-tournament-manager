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
                <td>{this.props.match.home.name}</td>
                <td>{this.props.match.away.name}</td>

                <td>
                    <select
                        className="form-control"
                        value={this.state.result}
                        onChange ={
                            (e) => this.update(e)
                        }
                    >
                        <option value={1}>White Wins</option>
                        <option value={-1}>Black Wins</option>
                        <option value={0}>Draw</option>
                        <option value={-9}>InProgress</option>
                    </select>

                </td>
                {/*<td>{this.props.match.arbiter.name}</td>*/}
                {/*<td>{this.props.match.id}</td>*/}


            </tr>
        )
    }
}


export default Match
