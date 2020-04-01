import Card from '/ui/Card'
import styled, { css } from 'styled-components'
import { Button, Typography } from '/ui'
import { phone, tablet } from '/styles/theme'

export const StyledCharacter = styled(Card)`
  ${({ hide }) => hide && 'display: none;'}
  box-sizing: border-box;
  height: 150px;
  width: 100%;
  --cols: 3;
  max-width: calc(100% / var(--cols) - 20px);
  margin: 0 10px;
  margin-bottom: 16px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.14);

  ${tablet(css`
    --cols: 2;
  `)}

  ${phone(css`
    --cols: 1;
    max-width: 100%;
    margin: 10px 0;
  `)}
`

export const Row = styled.div`
  width: 100%;
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
`

export const Characteristic = styled(Typography)`
  width: 50%;
`

export const DetailsButton = styled(Button)`
  align-self:flex-end;

  ${phone(css`
    align-self: center;
  `)}
`
