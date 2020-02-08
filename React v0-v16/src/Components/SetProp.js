import React from 'react'
import PropTypes from 'prop-types'


class SetPro extends React.Component{
    render(){
        const textStyle={
            color:'red'
        }
        const textContent = this.props.text;
        return (
            <div>
                <p style={textStyle} >{textContent}</p>
            </div>
        )
    }
}
SetPro.propTypes = {
textContent: PropTypes.string.isRequired
}

SetPro.defaultProps = {
    text: "Default"
}
export default SetPro