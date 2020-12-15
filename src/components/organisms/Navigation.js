import React, { useState } from 'react';
import { Collapse, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import { Link } from 'react-scroll';
import profile from '../../img/profile.jpg';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar id="sideNav" color="primary" dark expand="lg" fixed="top">
            <NavbarBrand
                tag={Link}
                to="about"
                duration={500}
                role="button"
                smooth={true}
                spy={true}>
                <span className="d-block d-lg-none">Clarence Taylor</span>
                <span className="d-none d-lg-block">
                    <img
                        className="img-fluid img-profile rounded-circle mx-auto mb-2"
                        src={profile}
                        alt=""
                    />
                </span>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink
                            tag={Link}
                            to="about"
                            duration={500}
                            role="button"
                            smooth={true}
                            spy={true}>
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            tag={Link}
                            to="experience"
                            duration={500}
                            role="button"
                            smooth={true}
                            spy={true}>
                            Experience
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            tag={Link}
                            to="education"
                            duration={500}
                            role="button"
                            smooth={true}
                            spy={true}>
                            Education
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            tag={Link}
                            to="skills"
                            duration={500}
                            role="button"
                            smooth={true}
                            spy={true}>
                            Skills
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            tag={Link}
                            to="interests"
                            duration={500}
                            role="button"
                            smooth={true}
                            spy={true}>
                            Interests
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            tag={Link}
                            to="awards"
                            duration={500}
                            role="button"
                            smooth={true}
                            spy={true}>
                            Awards
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Navigation;
