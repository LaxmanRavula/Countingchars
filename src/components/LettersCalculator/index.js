import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {countNum: 0}

  counting = () => {
    this.setState(prevState => ({
      countNum: prevState.countNum + 1,
    }))
  }

  render() {
    const {countNum} = this.state
    return (
      <div className="main">
        <div className="firstSide">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="forLabel">Enter the phrase</label>
          <input
            type="text"
            alt="search Icon"
            className="searchIcon"
            placeholder="Enter the phrase"
            id="forLabel"
            onChange={this.counting}
          />
          <p className="count">No.of Letters: {countNum}</p>
        </div>
        <div className="secondSide">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
