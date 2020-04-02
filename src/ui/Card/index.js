import * as R from 'ramda'
import styled from 'styled-components'
import { lighten } from 'polished'
import { getSecondary } from '/styles/theme'

const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 8px;
  border-radius: 4px;
  border: ${R.pipe(
    getSecondary,
    lighten(0.2),
    R.concat('solid 1px ')
  )};
`

export default Card
