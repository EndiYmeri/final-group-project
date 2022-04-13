import SearchBarMenu from "../MaterialComp/SearchBarMenu";
import { Link } from "react-router-dom";
import './Header.css'
import { useState } from "react";

type SearchWhere = "talents" | "projects" | "jobs"

export default function Header(){
    const [hasUser, setHasUser] = useState(false)

    const [searchWhere, setSearchWhere] = useState("")

    return(
            <header className={hasUser? "hasUser" : "noUser"} > 
                <div className="logo">
                    <Link to="/">
                        <h1>Jobless</h1>
                        <span>no more</span>
                    </Link>
                </div>
                <div className="middle">
                    <div className="search">
                        <div className="searchBar">
                                <SearchBarMenu /> 
                                <input type="text" name="" id="" />
                        </div>
                    </div>
                        <nav>
                            <ul>
                                <Link to="find-work">Find Work</Link>
                                <Link to="my-jobs">My jobs</Link>
                                <Link to="reports">Reports</Link>
                                <Link to="messages">Messages</Link>
                            </ul>
                        </nav>
                </div>
                {
                    hasUser
                    ?  <div className="account-links">
                            <ul>
                                <li>🔔</li>
                                <li>📄</li>
                            </ul>
                            <div className="account">
                                <img src="https://robohash.org/ND" alt="" />
                            </div>
                        </div>
                    :   <div className="buttons">
                            <button className="login-button">Log in</button>
                            <button className="signup-button"> Sign up</button>
                        </div>
                }
            </header>
        )
}