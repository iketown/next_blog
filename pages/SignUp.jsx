import React, { useState } from "react"
import CustomInput from "../components/CustomInput/CustomInput"
import Link from "next/link"
import {
  validateEmail,
  validatedRequired,
} from "../utils/validators/validateEmail"
import { useAuth } from "../hooks/useAuth"

const SignUp = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  })
  const { handleSignUp, error } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    handleSignUp(info)
  }

  const handleChange = (e) => {
    e.persist()
    const { name, value } = e.target
    setInfo((old) => ({ ...old, [name]: value }))
  }
  return (
    <div className="signin">
      <h3>Sign Up</h3>
      <div>
        <small>
          or{" "}
          <Link href="/signin" as="/signin">
            <a>SIGN IN</a>
          </Link>
        </small>
      </div>
      <form onSubmit={handleSubmit}>
        <CustomInput
          name="name"
          type="text"
          placeholder="Enter your Name"
          value={info.name}
          onChange={handleChange}
          onBlur={validatedRequired}
        />
        <CustomInput
          name="email"
          type="email"
          placeholder="Enter your Email"
          value={info.email}
          onChange={handleChange}
          onBlur={validateEmail}
        />
        <CustomInput
          name="password"
          placeholder="Enter your password"
          type="password"
          value={info.password}
          onChange={handleChange}
          onBlur={validatedRequired}
        />{" "}
        {error && <div className="error">{error}</div>}
        <button disabled={!info.email || !info.password} type="submit">
          submit
        </button>
      </form>
    </div>
  )
}

export default SignUp
