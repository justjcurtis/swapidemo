import React from 'react'
import { DATA_ROW_HEADERS } from '../constants/productConstants'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { StarshipContext } from './starshipContext'
import starships from '../testData/starships.json'
import { capitalise } from '../utils/stringUtils'

test("child components have access to an array of starships", () => {
    const TestComponent = () => {
        const { starships: contextStarships } = React.useContext(StarshipContext)
        return (
            <div>
                {contextStarships.map((starship, index) => (
                    <div key={index}>
                        <p >{capitalise(starship.name)}</p>
                        {Object.keys(DATA_ROW_HEADERS).map((key) => (
                            <p key={key}>{capitalise(starship[key])}</p>
                        ))}
                    </div>
                ))}
            </div>
        )
    }

    render(
        <StarshipContext.Provider value={{ starships }}>
            <TestComponent />
        </StarshipContext.Provider>
    )

    expect(screen.queryAllByText('CR90 Corvette').length > 0).toBe(true)
    expect(screen.queryAllByText('Star Destroyer').length > 0).toBe(true)
    expect(screen.queryAllByText('Imperial I-class Star Destroyer').length > 0).toBe(true)
    expect(screen.queryAllByText('Corellian Engineering Corporation').length > 0).toBe(true)
    expect(screen.queryAllByText('3500000').length > 0).toBe(true)
})
