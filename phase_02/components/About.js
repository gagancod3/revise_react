import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (<div className="about-div">
        <h1>About our platform</h1>
        <h2>This is food ordering app</h2>
        {/* Functional Component */}
        <User name={'Gagandeep'} profile={'Developer'}/>
        {/* Class-based component */}
        <UserClass name={'Gagandeep'} profile={'Developer'}/>
    </div>
    )
}

export default About;