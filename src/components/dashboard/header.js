import React from "react";
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return(
            <div className={"row my-2"}>
                <div className={"col-4"}>
                    <div className={"btn m-2 p-2"}>Recent Documents</div>
                </div>
                <div className={"col-4"}>
                    <div className={"btn m-2 p-2"}>Owned By me</div>
                </div>
                <div className={"col-4 btn"}>
                    <Link to = "table" className="btn btn-light">
                        <i className="fas fa-list"/>
                    </Link>
                    <button className="btn btn-light">
                        <i className="fas fa-sort-alpha-down"/>
                    </button>
                </div>

            </div>
        )
    }


}
export default Header
