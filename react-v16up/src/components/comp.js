import React from 'react'
    class StopWatch extends React.Component {
        state = {lapse:0, running : false}
        handleRunClick=()=>{
            this.setState(state => {
                if (state.running){
                    clearInterval(this.timer)
                }else {
                    const startTime = Date.now()- this.state.lapse
                    this.timer = setInterval(()=>{
                        this.setState({lapse:Date.now()-startTime})
                    })
                }
                return {running: !state.running}
            })
        }
        handleClearClick=()=>{
            clearInterval(this.timer)
            this.setState({lapse:0, running:false})
        }
        componentWillMount(){
            clearInterval(this.timer)
        }
        render(){
            const {lapse, running} =  this.state
            const buttonStyle = {
                border:'1px solid #ccc',
                background : '#fff',
                fontSize : '2em',
                padding :15,
                margin :5,
                width: 200
            }
            return (
                <div style={{textAlign:'center'}}>
                <label style={{fontSize:'5em',display:'block'}}>
                {lapse}msg
                </label>
                <button onClick={this.handleRunClick}
                style={buttonStyle}>{running ? 'Stop':'Start'}</button>
                <button onClick={this.handleClearClick}
                style={buttonStyle}>Clear</button>
                </div>
            )
        }
    }

    export default StopWatch