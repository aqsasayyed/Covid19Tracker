import React from 'react'

const Cards = ({heading1, heading2, data}) => {
    return (
        <div>
            <li className='card text-center'>
                <div className='card-main'>
                    <div className='card-body'>
                        <p className='card-name card-title mt-5'>
                            <span>{heading1}</span> {heading2}
                        </p>

                        <p className='card-total card-small'>{data}</p>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default Cards