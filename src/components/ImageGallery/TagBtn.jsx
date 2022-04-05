import { Button } from 'react-bootstrap';
import React from 'react'

const TagBtn = ({name, handleSetTag}) => {
    return (
        <>
            <Button variant="primary" onClick={()=> handleSetTag(name)}>{name.toUpperCase()}</Button>

        </>
    )
}

export default TagBtn