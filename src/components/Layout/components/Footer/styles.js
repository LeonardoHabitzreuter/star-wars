import styled, { css } from 'styled-components'

export const StyledFooter = styled.footer`
  box-sizing: border-box;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: Footer;

  ${({ theme: { sizes, colors } }) => css`
    background-color: ${colors.primary};
   
    @media (max-width: ${sizes.phone}) {
      height: 45px;
    }
  `}
`
