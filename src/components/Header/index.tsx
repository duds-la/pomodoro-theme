import { HeaderContainer } from "./styles";
import logoIgnite from "../../assets/logo-ignite.svg";
import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoIgnite} alt="Logo Ignite" />
            <nav>
                <NavLink to="">
                    <Timer size={24} />
                </NavLink>
                <NavLink to="/history">
                    <Scroll size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    );
}