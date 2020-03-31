import styled, { css } from 'styled-components'

export const Main = styled.main`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: Main;

  ${({ theme: { sizes } }) => css`
    @media (max-width: ${sizes.tablet}) {
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 30px;
      padding-right: 30px;
    }

    @media (max-width: ${sizes.phone}) {
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 20px;
      padding-right: 20px;
    }
  `}
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
