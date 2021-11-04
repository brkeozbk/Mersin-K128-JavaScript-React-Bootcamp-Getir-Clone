import { withRouter } from "react-router"
function Aboutus(props) 
{
    return (
        <div className="hover:underline">
            <h1>Aboutus{props.match.params.id}</h1>
            <h1>{props.match.params.name}</h1>
        </div>
    )
}
export default withRouter(Aboutus)