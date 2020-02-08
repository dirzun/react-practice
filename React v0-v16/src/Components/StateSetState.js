import React from 'react'

class StateSetState extends React.Component{
    constructor(){
        super()
        this.state = {
            textCont:'Some texe'
        }
    }
    update(e){
        this.setState({textCont: e.target.value})
    }
    render(){
        return (
            <div>
               <InputField update={this.update.bind(this)}/>
        <h1>{this.state.textCont}</h1>
            </div>
        )
    }
}
const InputField = (props) => <input type="text" onChange={props.update} />

export default StateSetState