import { useContext } from "react"
import { UserContext } from "./Context1"

const Context4=()=>{
    const user = useContext(UserContext)

    return(
        <div>
        <h3 style={{ padding: "25px", border: "3px solid", }}>
        Context4
        <p>{`Bye ${user}`}</p>

        </h3>
        </div>

    )
}
export default Context4