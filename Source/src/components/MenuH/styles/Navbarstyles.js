import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #E7ECF2;
  position: fixed;
  top: 10vh;
  right: ${props => (props.open ? "0" : "-100%")};
  width: 100%;
  height: 90vh;
  transition: right 0.3s linear;
  color:black;

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    width: 100%;
    position: initial;
    height: auto;
    justify-content: center;
    background: #E7ECF2;
    color:black;
  }

  a {
    padding: 0.5rem 0.8rem;
    color: black;
    text-decoration: none;
  }
  a:hover {
    padding: 0.5rem 0.8rem;
    color: black;
    text-decoration: none;
    font-weight:bold;
    font-size:1.2rem;
  }
`;
