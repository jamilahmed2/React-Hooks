import React from 'react'
import { FaStar } from 'react-icons/fa'

export const Star = ({ selected = null, onSelect }) => {
    return (
        <>
                <FaStar color={selected ? 'red' : 'grey'}
                    onClick={onSelect}
                />
           
        </>
    )
}
