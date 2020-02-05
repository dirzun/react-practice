import React from 'react'

(function() {
const scriptBab = document.createElement('script');
scriptBab.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js');
document.head.appendChild(scriptBab);})();


class LiveCompiler extends React.Component{
    constructor(){
        super();
        this.state = {
            input: '/* add your jsx here */',
            output: '',
            err:''
        }
    }
        update(e){
            let code = e.target.value;
            try {
                this.setState({
                        output:window.Babel
                        .transform(code,{ presets: ['es2015','react']})
                        .code,
                        err: ''
                    }
                )
            }
            catch(err){
                this.setState({err: err.message})
            }
        }
    render(){
        return(
            <div>
                <header>{this.state.err}</header>
                <div className="compilerContainer">
                    <textarea
                    onChange={this.update.bind(this)}
                    defaultValue={this.state.input}
                    ></textarea>
                    <pre>{this.state.output}</pre>
                </div>
            </div>
        )
    }
}

export default LiveCompiler