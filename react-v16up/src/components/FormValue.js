import React from 'react'

class FromValue extends React.Component{
    handleSubmit = (event) =>{
        event.preventDefault()
        console.log({target:event.target})
        console.log(event.target[0].value)
        console.log(event.target.elements.username.value)
        console.log(this.inputNode.value)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" name="username" ref={node=>(inputNode=node)}></input>
                </label>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default FromValue