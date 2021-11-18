import React from 'react'

const StationData = (props) => {
    // console.log(props)

    return (
        <div className='data'>
            <p>Station Data : {props.data.station_data.slice(-1)}</p>
            <p>Station Status: {props.data.station_status}</p>
            <p>Station Trigger: {(props.data.station_trigger) ? ('True') : ('False')}</p>
        </div>
    )
}

export default StationData
