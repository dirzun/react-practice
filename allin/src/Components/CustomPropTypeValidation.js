import React from 'react'
import PropTypes from 'prop-types'

class CustomPropValidation extends React.Component{
    render(){
        return(
            <div>
                <Title text='fgdtext'/>
            </div>
           )
    }
}
const Title = (props)=> <h1>Title: {props.text}</h1>
Title.propTypes = {
text(props,propsName, component){
    if(!(propsName in props)){
        return new Error(`missing ${propsName}`)
    }
    if(props[propsName].length < 6){
        return new Error(`${propsName} was too short`)
    }
}
}
export default CustomPropValidation