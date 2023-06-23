import React from 'react'
import { HeroHeading } from '../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/HeroHeading'
import { heroHeadingData } from '../../data/LegalServicesPagesData/LimitedLiablityPartnership/heroHeadingData'

function LimitedLiablityPartnership() {
  return (
    <div>
        <HeroHeading data={heroHeadingData.data} />
    </div>
  )
}

export default LimitedLiablityPartnership