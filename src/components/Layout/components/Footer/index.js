import React from 'react'
import GithubCircleIcon from 'mdi-react/GithubCircleIcon'
import { StyledFooter } from './styles'

const Footer = () => {
  return (
    <StyledFooter>
      <a rel="noopener noreferrer" target='_blank' href='https://github.com/LeonardoHabitzreuter/star-wars'>
        <GithubCircleIcon color='white' size={36} />
      </a>
    </StyledFooter>
  )
}

export default Footer
