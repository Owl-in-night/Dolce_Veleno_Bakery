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
    .icon-menu{
        svg{
            color: black;
            path{
                stroke: black;
            }
        }
    }
    ${useResponsiveTo('lg')}{
        grid-template-columns: 1fr 4fr 1fr;
        margin: 16px 2px 2px;
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
    li{
        height: 45px;
        padding: 8px 0px;
        .a{
            color: black;
            text-decoration: none;
        }
    }
    ${useResponsiveTo('lg')}{
        display: flex;
        position:relative;
        background-color: transparent;
        left: 0;
        width: auto;
        height: auto;
        flex-direction: row;
        gap: 40px;
    }
`
