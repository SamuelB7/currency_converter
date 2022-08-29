import styles from './Header.module.css'

export function Header() {

    return (
        <div className={`${styles.header_border_bottom} navbar navbar-expand-lg`} aria-label="Offcanvas navbar large">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">Currency Converter</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"aria-controls="offcanvasNavbar2">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar2"aria-labelledby="aria-labelledby">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Currency Converter</h5>
                        <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                           {/*  <li className="nav-item">
                                <Link to="/" className="nav-link" ria-current="page">{t('header_home_url')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" ria-current="page">{t('header_about_url')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" ria-current="page">{t('header_contact_url')}</Link>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img className="flag_img" src={langUrl}  />  {lang}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a onClick={() => changeLanguage('en-US')} className="dropdown-item" href="#"> <img className="flag_img" src="img/united-states.png" alt="usa-flag" /> English</a>
                                        </li>
                                        <li>
                                            <a onClick={() => changeLanguage('pt-BR')} className="dropdown-item" href="#"> <img className="flag_img" src="img/brazil.png" alt="brazil-flag" /> Português</a>
                                        </li>
                                    </ul>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}