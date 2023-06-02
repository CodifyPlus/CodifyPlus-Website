import { Container } from '@mantine/core'
import React from 'react'
import { FeaturesSection } from '../Fragments/HomeFragments/Featured'
import featuredData from '../data/featuredData'

function OurServices() {
  return (
    <Container my="md">
        <FeaturesSection {...featuredData} />
    </Container>
  )
}

export default OurServices