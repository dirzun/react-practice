import React from 'react'
/* 
Compose React Component Behavior with Higher Order Components
take and return new component
*/
const HOC = (InnerComponent) => class extends React.Component{
    constructor(){
        super()
        this.state = {count:0}
    }
    update(){
        this.setState({count:this.state.count + 1})
    }
    componentWillMount(){
        console.log('will mount')
    }
    render(){
        return(
           <InnerComponent 
           {...this.props}
           {...this.state}
           update={this.update.bind(this)}
           /> 
        )
    }
}
class HigherOC extends React.Component{
    render(){
        return (
            <div>
                <Button>Button</Button>
                <hr/>
                <LabelHoc>Label</LabelHoc>
            </div>
        )
    }
}
const Button = HOC((props) =>
 <button onClick={props.update}>{props.children} - {props.count}</button>)

class Label extends React.Component {
    componentWillMount(){
        console.log('label will mount')
    }
    render(){
        return(
    <label onMouseMove={this.props.update}>
        {this.props.children} - {this.props.count}
        </label>
        )
    }
}
const LabelHoc = HOC(Label)
export default HigherOC