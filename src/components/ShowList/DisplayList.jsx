import React from 'react'

const DisplayList = (props) => {
    const data = props.list;
    return (
        <>
            <h4>Display All Items</h4>
            <div className='allItem'>
                <ul>
                    {data.map((items, index) => (
                        <li key={index}>{items}</li>
                    ))}
                </ul>
            </div>
            <h4 style={{marginTop:"10px"}}>Remove All Items that less than 3 characters long</h4>
            <div>
                <ul>
                    {data.map((item, index) =>
                        item.length >= 3 ?
                        <li key={index}>{item}</li> :
                         ""
                    )}
                </ul>
            </div>
            <h4 style={{marginTop:"10px"}}>Make Every other list item uppercase</h4>
            <div>
                <ul>
                    {data.map((item, index) =>
                        index%2==0 ? 
                        <li key={index}>{item.toUpperCase()}</li> 
                        : <li key={index}>{item}</li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default DisplayList