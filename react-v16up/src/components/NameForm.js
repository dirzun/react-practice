import React from 'react'

class NameForm extends React.Component{
    state = {error: this.props.getErrorMessage('')}
    handleSubmit = event => {
        event.preventDefault()
        const value = event.target.elements.username.value
        const error = this.props.getErrorMessage(value,)
        if (error){
            alert(`error: ${error}`)
        }else{
            alert(`success: ${value}`)
        }
    }
    handleChange = event =>{
        const {value} = event.target
        this.setState({
            error: this.props.getErrorMessage(value)
        })
    }
    render(){
        const {error}=this.state
        return(
                <form>
                    <label>
                        Name:
                        <input onChange={this.handleChange} type="text" name="username" />
                    </label>
                    {error ? <div style={{color:'red'}}>{error}</div> : null}
                    <button disabled={Boolean(error)} type="submit">Submit</button>
                </form>
        )
    }
}

export default NameForm