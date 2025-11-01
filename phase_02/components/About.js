import React from "react";
import User from "./User";
import UserClass from "./UserClass";


//* Class-based component
class About extends React.Component{
    constructor(props){
        super(props);
        console.log('Parent constructor');
    }
    componentDidMount(){
        console.log('Parent componentDidMount');
    }
    render(){
        console.log('Parent render');
         return (<div className="about-div">
        <h1>About our platform</h1>
        <h2>This is food ordering app</h2>
        {/* Functional Component */}
        <User name={'Gagandeep'} profile={'Developer'}/>
        {/* Class-based component */}
        <UserClass name={'Gagandeep'} profile={'Developer'}/>
        <UserClass name={'Karan'} profile={'Developer'}/>

    </div>
    )
    }
}

//* Funcational Component
// const About = () => {
//     return (<div className="about-div">
//         <h1>About our platform</h1>
//         <h2>This is food ordering app</h2>
//         {/* Functional Component */}
//         <User name={'Gagandeep'} profile={'Developer'}/>
//         {/* Class-based component */}
//         <UserClass name={'Gagandeep'} profile={'Developer'}/>
//     </div>
//     )
// }

export default About;