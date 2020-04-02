import * as R from 'ramda'
import { css } from 'styled-components'

export const colors = {
  primary: '#141414',
  secondary: 'white',
  danger: '#ff6361',
  lightGray: '#f3f3f3',
  darkGray: '#dbdbdb'
}

const maxWidth = breakpoint => style => css`
  @media (max-width: ${breakpoint}) {
    ${style}
  }
`

export const phone = maxWidth('414px')

export const tablet = maxWidth('1024px')

export const getPrimary = R.path(['theme', 'colors', 'primary'])

export const getSecondary = R.path(['theme', 'colors', 'secondary'])
