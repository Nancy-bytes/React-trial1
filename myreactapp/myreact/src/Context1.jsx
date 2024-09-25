import { createContext, useState } from "react";
import Context2 from "./Context2";

export const UserContext = createContext()

const Context1 = () => {
    const [user, setUser] = useState("Nancy");
    
    return (
        <div>
            <h3 style={{ padding: "25px", border: "3px solid" }}>
                Context1
                <p>{`Hello ${user}`}</p> {/* Use backticks for template literals */}
                <UserContext.Provider value={user}>
                <Context2 />
                </UserContext.Provider>
            </h3>
        </div>
    );
}
  
export default Context1;
