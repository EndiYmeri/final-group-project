import PositionedMenu from "../MaterialComp/SearchBarMenu";
import './Header.css'
export default function Header(){
    return(
            <header>
                <div className="logo">
                    <h1>Jobless</h1>
                    <span>no more</span>
                </div>
                <div className="search">
                    <div className="searchBar">
                            <PositionedMenu /> 
                            <input type="text" name="" id="" />
                    </div>
                </div>
                <div className="nav">
                    <nav>
                        <ul>
                            <li>Find Work</li>
                            <li>My Jobs</li>
                            <li>Reports</li>
                            <li>Messages</li>
                        </ul>
                    </nav>
                    <div className="account-links">
                        <ul>
                            <li>🔔</li>
                            <li>📄</li>
                        </ul>
                        <div className="account">
                            <img src="https://robohash.org/ND" alt="" />
                        </div>
                    </div>
                </div>
            </header>
        )
}