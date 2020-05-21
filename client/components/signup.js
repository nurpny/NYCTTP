import React, { useReducer } from 'react'
import { connect } from 'react-redux'
import { signingUp } from '../store/user-store'

export const signup = (props) => {
  const [userInput, setUserInput] = useReducer((state, newState) => ({
    ...state, ...newState
  }), { name: "", email: "", password: "" })

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    await props.signingUp(userInput.name, userInput.email, userInput.password)
  }

  const handleChange = (evt) => {
    setUserInput({ [evt.target.name]: evt.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign up Form</h1>
      <div> <input name="name" placeholder="Name" type="text" onChange={handleChange} required='required'></input>  </div>
      <div>  <input name="email" placeholder="Email" type="email" onChange={handleChange} required='required'></input> </div>
      <div> <input name="password" placeholder="Password" type="password" onChange={handleChange} required='required'></input> </div>
      <button type="submit">Create Your Account</button>
    <div>{props.user.error && props.user.error.response.data}</div>
    </form >
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  signingUp: (name, email, password) => dispatch(signingUp(name, email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(signup)
