import React from 'react'
import PropTypes from 'prop-types'
import withPage from '/hocs/withPage'
import Layout from '/components/Layout/components/Layout'
import Character from '/components/Character/components/Character'

const CharacterPage = ({ match }) => (
  <Layout>
    <Character id={match.params.id} />
  </Layout>
)

CharacterPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
}

export default withPage(CharacterPage, {
  title: 'Character',
  route: '/character/:id'
})
