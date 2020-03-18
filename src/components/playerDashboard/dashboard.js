import React from "react";
import Header from "./header";
import Grid from "./grid";
import ParticlesBg from "particles-bg";

class Dashboard extends React.Component {
    render() {
        let config = {
            num: [4, 7],
            rps: 0.1,
            radius: [5, 40],
            life: [1.5, 3],
            v: [2, 3],
            tha: [-50, 50],
            alpha: [0.6, 0],
            scale: [.1, 0.9],
            // body: icon,
            position: "all",
            //color: ["random", "#ff0000"],
            cross: "dead",
            random: 10
        };
        return (
            <div>
                <Header/>
                <div className={"container"}>
                    <h3 className={"text-center"}>Active</h3>
                    <div className="border-top my-3"/>
                    <Grid/>
                    <h3 className={"text-center"}>Past</h3>
                    <div className="border-top my-3"/>
                    <Grid/>
                    <ParticlesBg type="cobweb" config={config} bg={true}/>

                </div>
           </div>
       )

    }


}
export default Dashboard
