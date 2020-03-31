import styled, { css } from 'styled-components'

const commonStyle = ({ bold, color, align }) => css`
  color: ${color};
  margin: 0;
  font-weight: ${bold ? 'bold' : 'normal'};
  line-height: 1.5;
  text-align: ${align};
`

const H1 = styled.h1`
  font-size: 42px;
  ${commonStyle}
`

const H2 = styled.h2`
  font-size: 36px;
  ${commonStyle}
`

const H3 = styled.h3`
  font-size: 30px;
  ${commonStyle}
`

const H4 = styled.h4`
  font-size: 24px;
  ${commonStyle}
`

const H5 = styled.h5`
  font-size: 22px;
  ${commonStyle}
`

const H6 = styled.h6`
  font-size: 18px;
  ${commonStyle}
`

const Subtitle = styled.span`
  font-size: 16px;
  ${commonStyle}
`

const Text = styled.p`
  font-size: 16px;
  ${commonStyle}
`

const Body = styled.span`
  font-size: 14px;
  ${commonStyle}
`

export const button = css`
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
`

export default { H1, H2, H3, H4, H5, H6, Subtitle, Text, Body }
