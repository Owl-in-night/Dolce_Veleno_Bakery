import styled, { css } from 'styled-components'
import useResponsiveTo from '../../hooks/useResponsive'

export const Header = styled.header`
    background-color: white;
`

export const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-content: center;
    place-items: center;
    position: relative;
    .Theme{
        display: none;
    }
    ${useResponsiveTo('lg')}{
        grid-template-columns: 1fr 4fr 1fr;
        padding: 16px;
        .Theme{
            display: block;
        }
        .icon-menu{
            display: none;
        }
        
    }
`

export const Menu = styled.ul`
    display: flex;
    position: absolute;
    left: -280px;
    z-index: 1;
    color: black;
    background-color: white;
    display: grid;
    place-content: center;
    top:0;
    width: 200px;
    height: 100vh;
    gap:40px;
    transition: all 0.5s ease;
    ${props => props.open && css`
        left: 0px;
    `}
    ${useResponsiveTo('lg')}{
        display: flex;
        position:relative;
        z-index: 0;
        background-color: transparent;
        left: 0;
        width: auto;
        height: auto;
        flex-direction: row;
        gap: 40px;
    }
`
