import PortfolioData from '@/PortfolioData'
import ShowPortfolioSection from '@/components/Portfolio/ShowPortfolioSection'
import { useRouter } from 'next/router'
import React from 'react'

export default function ShowPortfolio() {
    const id = useRouter().query.id
    // @ts-ignore
    let MainPortfolioData = PortfolioData.find(data => data.number === parseInt(id));

    // console.log(MainPortfolioData)
    return (
        <>
            {
                MainPortfolioData ?
                    <ShowPortfolioSection data={MainPortfolioData} />
                    :
                    "Loading"
            }

        </>
    )
}
