import * as R from 'ramda'
import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'
import { Link as RouterLink } from 'react-router-dom'
import { button } from '/ui/Typography/styles'

const defaultSize = css`padding: 8px 20px;`
const smallSizeProps = css`padding: 4px 12px;`
const fullSizeProps = css`
  ${defaultSize};
  width: 100%;
`

const primaryCss = ({ theme: { colors } }) => css`
  color: white;
  border: none;
  background-color: ${colors.primary};
  box-shadow: 1px 5px 10px ${colors.primary};
  &:hover {
    background-color: ${lighten(0.1, colors.primary)}
  }

  &:active {
    background-color: ${darken(0.1, colors.primary)}
  }
`

const secondaryCss = ({ theme: { colors } }) => css`
  color: ${darken(0.2, colors.primary)};
  border: solid 1px ${darken(0.2, colors.primary)};
  background-color: ${lighten(0.25, colors.primary)};
  &:active {
    background-color: ${lighten(0.1, colors.primary)}
  }
`

const modifierEq = R.propEq('modifier')
const getColorProps = R.cond([
  [modifierEq('primary'), primaryCss],
  [modifierEq('secondary'), secondaryCss],
  [R.T, primaryCss]
])

const sizeEq = R.propEq('size')
const getSizeProps = R.cond([
  [sizeEq('small'), R.always(smallSizeProps)],
  [sizeEq('full'), R.always(fullSizeProps)],
  [R.T, R.always(defaultSize)]
])

export const Button = styled.button`
  border-radius: 2px;
  outline: none;
  cursor: pointer;

  ${getSizeProps}
  ${getColorProps}
  ${button}

  ${({ theme: { sizes } }) => css`
    @media (max-width: ${sizes.phone}) {
      ${fullSizeProps}
    }
  `}
`

export const Link = styled(RouterLink)`
  ${getSizeProps};
  padding: 0;
`
