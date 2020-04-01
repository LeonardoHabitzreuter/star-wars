import styled, { css } from 'styled-components'
import { phone, getPrimary } from '/styles/theme'

export const StyledHeader = styled.header`
  background-color: ${getPrimary};
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  grid-area: Header;

  ${phone(css`
    height: 90px;
  `)}
`

export const Logo = styled.a`
  background-size: contain;
  background-repeat: no-repeat;
  width: 293px;
  height: 100px;
  background-image: url('https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png');

  ${phone(css`
    width: 235px;
    height: 25px;
    background-image: url('https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_horiz@2x-f98247cb30aa.png');
  `)}
`
