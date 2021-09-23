import React from 'react'

class Row extends React.Component {

    render() {

        const {number, device_time, description, device, address_device, zone, event_code, operator} = this.props.data


        return (
            <tr className="elem">
                <td className = "one"><div className = "td first">{number}</div></td>
                <td className = "two"><div className = "td second">{device_time}</div></td>
                <td className = "three"><div className = "td third">{operator}</div></td>
                <td className = "four"><div className = "td fourth">{device}</div></td>
                <td className = "five"><div className = "td fifth">{description}</div></td>
                <td className = "six"><div className = "td sixth">{address_device}</div></td>
                <td className = "seven"><div className = "td seventh">{zone}</div></td>
                <td className = "eight"><div className = "td eight">{event_code}</div></td>

            </tr>
        )
    }
}
export default Row
