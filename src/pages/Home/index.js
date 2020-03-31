import React from 'react'
import withPage from '/hocs/withPage'
import Layout from '/components/Layout/components/Layout'
import CharactersList from '/components/CharactersList/components/List'

const Home = () => (
  <Layout>
    <CharactersList />
  </Layout>
)

export default withPage(Home, {
  title: 'Página inicial',
  route: '/inicio'
})
