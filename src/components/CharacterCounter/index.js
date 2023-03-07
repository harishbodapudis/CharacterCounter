import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

// Replace your code here
class CharacterCounter extends Component {
  state = {usersList: [], userText: ''}

  addUserEntry = e => {
    const {userText} = this.state
    e.preventDefault()
    const d = uuidv4()
    console.log(d)

    if (userText.length > 0) {
      const data = {
        id: d,
        name: userText,
        nameLength: userText.length,
      }
      this.setState(prevState => ({usersList: [...prevState.usersList, data]}))
      this.setState({userText: ''})
    }
  }

  updateUserEntry = e => {
    this.setState({userText: e.target.value})
  }

  render() {
    const {usersList, userText} = this.state
    return (
      <div className="main-container">
        <div className="container-one">
          <div className="heading-box">
            <h1 className="container-one-heading">
              Count the characters like a Boss...
            </h1>
          </div>
          <div>
            {usersList.length > 0 ? (
              <ul className="names-list">
                {usersList.map(item => (
                  <li key={item.id}>
                    <p className="list-item">{`${item.name}: ${item.nameLength}`}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="no-input-img-box">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="no-inputs-img"
                />
              </div>
            )}
          </div>
        </div>
        <div className="container-two">
          <div className="container-two-heading-form-box">
            <h1 className="container-two-heading">Character Counter</h1>
            <form onSubmit={this.addUserEntry} className="form-box">
              <input
                type="text"
                placeholder="Enter the Characters here"
                onChange={this.updateUserEntry}
                value={userText}
                className="input-box"
              />
              <button type="submit" className="add-btn-box">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
