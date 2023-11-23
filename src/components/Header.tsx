import { Dispatch, SetStateAction } from "react"
import { Link, useNavigate } from "react-router-dom"

type linkListType = {
    linkList: {
        title: string,
        link: string
    }[],
    searchText: string,
    setSearchText: Dispatch<SetStateAction<string>>
}

const Header = (props: linkListType) => {
    const navigate = useNavigate()
    const updateSearchText = (e: any) => {
        navigate('search')
        props.setSearchText(e.target.value)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">MovieBrowser</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {props.linkList.map(link => {
                            return (
                                <li className="nav-item" key={link.title}>
                                    <Link className="nav-link" to={link.link}>{link.title}</Link>
                                </li>
                            );
                        })}
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={props.searchText} onChange={updateSearchText}/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            
        </>

    )
}

export default Header