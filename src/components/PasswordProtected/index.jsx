import { useState } from 'react'

const PasswordProtection = ({ children }) => {
  const [password, setPassword] = useState('')
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true)
  const correctPassword = 'oakleighpass' // Replace with your actual password

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === correctPassword) {
      // Set the state to indicate that the password is correct
      setIsPasswordCorrect(true)
    } else {
      // Set the state to indicate that the password is incorrect
      setIsPasswordCorrect(false)
      // Optionally, you can show an error message or redirect to an error page
      alert('Incorrect password')
    }
  }

  // Render the content based on whether the password is correct
  return isPasswordCorrect ? (
    <div>{children}</div>
  ) : (
    <form onSubmit={handleSubmit}>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-[2px] border-black"
        />
      </label>
      <button
        className="ml-[20px] border-[2px] border-black p-2 text-[15px]"
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}

export default PasswordProtection
