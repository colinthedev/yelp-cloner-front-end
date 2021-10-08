import React, { useState } from 'react';
import './Footer.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

function Footer() {
    const [languageValue, setLanguageValue] = useState('English');
    const handleLanguageSelect = (e) => {
        setLanguageValue(e)
    }
    const [countryValue, setCountryValue] = useState('United States');
    const handleCountrySelect = (e) => {
        setCountryValue(e)
    }
    return (
        <footer className="bg-light text-center text-lg-start">
            {/* Grid container */}
            <div className="container p-4">
                {/* Grid row */}
                <div className="row">
                    {/* Grid column */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="Header-font">About</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="list-font">About Yelp</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">Careers</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">Investor Relations</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">Trust & Safety</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">Content Guidelines</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">Accessibility Statement</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">Terms of Service</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">Ad Choices</a>
                            </li>
                        </ul>
                    </div>
                    {/* Grid column */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="Header-font mb-0">Discover</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="list-font">Yelp Project Cost Guides</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">Collections</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">Talk</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">Events</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">The Local Yelp</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">Yelp Blog</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">Support</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">Yelp Mobile</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">Developers</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">RSS</a>
                            </li>
                        </ul>
                    </div>
                    {/* Grid column */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="Header-font">Yelp for Business</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="list-font">Claim your Business Page</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">Advertise on Yelp</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">Yelp for Restaurant Owners</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">Table Management</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">Business Success Stories</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">Business Support</a>
                            </li>
                            <li>
                                <a href="#!" className="list-font">Yelp Blog for Business</a>
                            </li>
                        </ul>
                    </div>
                    {/* Grid column */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="Header-font mb-0">Languages</h5>
                        <DropdownButton
                            onSelect={handleLanguageSelect}
                            className="dropdown"
                            title={languageValue}
                            id="dropdown-menu-align-right"
                        >
                            <Dropdown.Item className="list-font" eventKey="English">English</Dropdown.Item>
                            <Dropdown.Item className="list-font" eventKey="Plutaurian">Plutaurian</Dropdown.Item>
                            <Dropdown.Item className="list-font" eventKey="Splurgushing">Splurgushing</Dropdown.Item>
                            <Dropdown.Item className="list-font" eventKey="Iceting">Iceting</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="list-font" eventKey="Alien">Alien</Dropdown.Item>
                        </DropdownButton>
                        <h5 className="Header-font mb-0">Countries</h5>
                        <DropdownButton
                            onSelect={handleCountrySelect}
                            className="dropdown"
                            title={countryValue}
                            id="dropdown-menu-align-right"
                        >
                            <Dropdown.Item className="list-font" eventKey="United States">United States</Dropdown.Item>
                            <Dropdown.Item className="list-font" eventKey="Plutaur">Plutaur</Dropdown.Item>
                            <Dropdown.Item className="list-font" eventKey="Splurgush">Splurgush</Dropdown.Item>
                            <Dropdown.Item className="list-font" eventKey="Icemote">Icemote</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="list-font" eventKey="A Galaxy Far Far Away">A Galaxy Far Far Away</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
            </div>
            <div className="Header-font p-3 text-center">
                2021 Yelp Clone By:&nbsp;
                    <a className="list-font">Colin Peters</a>
            </div>
        </footer>       
    )
}

export default Footer;