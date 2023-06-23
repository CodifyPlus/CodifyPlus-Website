import React from 'react'
import { HeroHeading } from '../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/HeroHeading'
import { heroHeadingData } from '../../data/LegalServicesPagesData/SoleProprietorship/heroHeadingData'

function SoleProprietorship() {
  return (
    <div>
        <HeroHeading data={heroHeadingData.data} />
    </div>
  )
}

export default SoleProprietorship