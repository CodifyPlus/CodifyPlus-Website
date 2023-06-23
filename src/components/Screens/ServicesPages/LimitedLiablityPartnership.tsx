import React from 'react'
import { HeroHeading } from '../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/HeroHeading'
import { heroHeadingData } from '../../data/LegalServicesPagesData/LimitedLiablityPartnership/heroHeadingData'
import CustomH2 from '../../Fragments/CommonFragments/CustomH2'
import { HowItWorks } from '../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/HowItWorks'
import { Benefits } from '../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/Benefits'
import { llpbenefits } from '../../data/LegalServicesPagesData/LimitedLiablityPartnership/llpBenefits'

function LimitedLiablityPartnership() {
  return (
    <div>
        <HeroHeading data={heroHeadingData.data} />
        <CustomH2 title={"How it Works?"} />
        <HowItWorks/>
        <CustomH2 title={"Benefits of Limited Liability Partnership"} />
        <Benefits mockdata={llpbenefits} />
    </div>
  )
}

export default LimitedLiablityPartnership