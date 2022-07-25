import { useState } from 'react'

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase'

import { FormInput } from '../FormInput'
import { Button, buttonTypes } from '../Button'

import './SignUpForm.scss'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export function SignUpForm () {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email is already in use')
      }
      console.error(error)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className='sign-up-container'>
      <h2>Don&apos;t have an Account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          onChange={handleChange}
          name='displayName'
          value={displayName}
          required
        />

        <FormInput
          label='Email'
          type='email'
          onChange={handleChange}
          name='email'
          value={email}
          required
        />

        <FormInput
          label='Password'
          type='password'
          onChange={handleChange}
          name='password'
          value={password}
          required
        />

        <FormInput
          label='Confirm Password'
          type='password'
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
          required
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}
