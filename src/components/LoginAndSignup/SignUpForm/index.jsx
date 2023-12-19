// pages/signup.js

import { useState } from 'react'

const SignupForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    username: '',
    subscribe_to_newsletter: false,
    roles: [],
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (name === 'confirmPassword') {
      return
    }
    if (name === 'email') {
      formData.username = value
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
      roles: ['customer'],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate form data (you may add more validation as needed)

    // Make POST request to API
    try {
      const username = 'oakleighcdadevel'
      const password = 'QsJY lkVy QxL8 3iFY NhhP Cto1'
      const response = await fetch(
        'https://oakleigh.cda-development3.co.uk/cms/wp-json/wp/v2/users',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + btoa(username + ':' + password),
          },
          body: JSON.stringify(formData),
        },
      )

      if (response.ok) {
        // Handle success (e.g., redirect to a success page)
        console.log('Signup successful!')
      } else {
        // Handle errors
        console.error('Signup failed')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="first_name"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="last_name"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="subscribe_to_newsletter"
              checked={formData.subscribe_to_newsletter}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            <span className="text-sm">Sign up to Oakleigh Watches updates</span>
          </label>
        </div>
        <div className="relative flex h-[53px] w-[220px] font-sans text-display-17">
          <div className="absolute bottom-0 h-[50px] w-[217px] border-[0.5px] border-textSecondary"></div>
          <div className="absolute right-0 h-[50px] w-[217px] border-[0.5px] border-textSecondary"></div>
          <button
            type="submit"
            className="relative flex w-full items-center justify-center"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignupForm
