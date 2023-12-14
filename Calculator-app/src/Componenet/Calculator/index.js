import { Component } from "react"; 
import './index.css'

class Calculator extends Component{
    state={
        result:""
    }
    render(){
        const {result}=this.state
        return(
            <div className="main-container">
                <div className="cal-container">
                    <h1 className="heading">Calculator</h1>
                    <div className="text-container">
                        <textarea rows="2" color="50" className="text-area">{result}</textarea>
                    </div>
                    <div className="input-area">
                        <div className="button-cont">
                            <button type="button" className="number">7</button>
                            <button type="button" className="number">8</button>
                            <button type="button" className="number">9</button>
                            <button type="button" className="delete">DEL</button>
                        </div>
                        <div className="button-cont">
                            <button type="button" className="number">4</button>
                            <button type="button" className="number">5</button>
                            <button type="button" className="number">6</button>
                            <button type="button" className="number">+</button>
                        </div>
                        <div className="button-cont">
                            <button type="button" className="number">1</button>
                            <button type="button" className="number">2</button>
                            <button type="button" className="number">3</button>
                            <button type="button" className="number">-</button>
                        </div>
                        <div className="button-cont">
                            <button type="button" className="number">.</button>
                            <button type="button" className="number">0</button>
                            <button type="button" className="number">/</button>
                            <button type="button" className="number">x</button>
                        </div>
                        <div className="button-cont">
                            <button className="reset">Reset</button>
                            <button className="result">=</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Calculator