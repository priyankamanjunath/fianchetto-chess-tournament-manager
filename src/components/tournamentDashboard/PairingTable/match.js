import React from 'react';
class Match extends React.Component {


    state = {
        match : this.props.match
    }

    componentDidMount(): void {
        this.setState({
            match : this.props.match
        })
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        if(prevProps.match !== this.state.match) {
            this.setState({
                match : this.props.match
            })
        }
    }
    updateResults(id, value) {
        const new_match = {
            ...this.state.match,
            id: id,
            value: value
        };
        this.setState({
            match: new_match
        });
        this.props.updateRound(id, value)
    }

    render(){
        return (

            <tr>
                <td>{this.state.match.home.name}</td>
                <td>{this.state.match.away.name}</td>

                <td>
                    <select
                        className="form-control"
                        value = {this.state.match.result}
                        onChange ={
                            (e) => this.updateResults(this.state.match.id, e.target.value)
                        }>
                        <option value={1}>White Wins</option>
                        <option value={-1}>Black Wins</option>
                        <option value={0}>Draw</option>
                        <option value={-9}>InProgress</option>
                    </select>

                </td>
                {/*<td>{this.props.match.arbiter.name}</td>*/}
                <td>{this.state.match.id}</td>


            </tr>
        )
    }
}


export default Match
