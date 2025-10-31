import { useRouteError } from "react-router";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (<div className="err-div">
        <h1>Oops something went wrong</h1>
        <h2>{err.status}</h2>
        <p>{err.statusText}</p>
    </div>)
}
export default Error;