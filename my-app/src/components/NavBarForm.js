import React, { Component } from "react";
import css from "./css/NavBarForm.module.css";

class NavBarForm extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isLoggedIn: true
        }
    }

    handleclick = () => {
        this.setState((prevState) => ({
            message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
            buttonText: prevState.buttonText === "Log out" ? "Log in" : "Log out",
        }), ()=> console.log(this.state.message))
        
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.message}</span>
                    <button onClick={() => this.handleclick()}>{this.state.buttonText}</button>
                </div>
            </div>
        )
    }
}

//     render() {
//         return (
//             <div className={css.NavBar}>
//                 <h1>My Gallery</h1>
//                 <div>
//                     <button>
//                         Login
//                     </button>
//                 </div>
//             </div>
//         )
//     }
// }

export default NavBarForm