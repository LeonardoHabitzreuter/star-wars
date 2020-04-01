import styled, { css } from 'styled-components'
import { phone, getPrimary } from '/styles/theme'

export const StyledFooter = styled.footer`
  background-color: ${getPrimary};
  box-sizing: border-box;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: Footer;

  ${phone(css`
    height: 45px;
  `)}
`
