import styled, { css } from 'styled-components'

export const StyledHeader = styled.header`
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  grid-area: Header;

  ${({ theme: { sizes, colors } }) => css`
    background-color: ${colors.primary};
   
    @media (max-width: ${sizes.phone}) {
      height: 90px;
    }
  `}
`

export const Logo = styled.a`
  background-size: 100%;
  background-repeat: no-repeat;
  width: 293px;
  height: 127px;
  background-image: url('https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png');

  ${({ theme: { sizes } }) => css`
    @media (max-width: ${sizes.phone}) {
      width: 235px;
      height: 25px;
      background-image: url('https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_horiz@2x-f98247cb30aa.png');
    }
  `}
`
