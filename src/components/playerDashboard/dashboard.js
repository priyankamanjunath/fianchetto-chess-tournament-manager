import React from "react";
import Header from "./header";
import Grid from "./grid";

class Dashboard extends React.Component {
    render() {
       return(
           <div>
               <Header/>
               <div className={"container"}>
                   <h3 className={"text-center"}>Active</h3>
                    <div className="border-top my-3"/>
                    <Grid/>
                   <h3 className={"text-center"}>Past</h3>
                   <div className="border-top my-3"/>
                   <Grid/>
               </div>
           </div>
       )

    }


}
export default Dashboard
