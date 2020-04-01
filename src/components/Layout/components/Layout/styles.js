import styled, { css } from 'styled-components'
import { phone, tablet } from '/styles/theme'

export const Main = styled.main`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: Main;

  ${tablet(css`
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 30px;
  `)}

  ${phone(css`  
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
  `)}
`

export const Layout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    "Header"
    "Main"
    "Footer";
  grid-template-rows: auto 1fr auto;
`
