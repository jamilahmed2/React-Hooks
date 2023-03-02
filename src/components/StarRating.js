import React, { useState } from 'react'
import { Star } from './Star'

export const StarRating = ({ totalStars = 4 }) => {
    const [selectedStars, setSelectedStars] = useState(0);
    const createArray = (length) => [...Array(length)]
    return (
        <>
            {createArray(totalStars).map((n,i) => {
                return <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)
                } />
            })}
            <p>{selectedStars} of {totalStars}</p>
        </>
    )
}
