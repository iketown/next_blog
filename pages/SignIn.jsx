import React, { useState } from "react"
import CustomInput from "../components/CustomInput/CustomInput"
import Link from "next/link"
import {
  validateEmail,
  validatedRequired,
} from "../utils/validators/validateEmail"
import { useAuth } from "../hooks/useAuth"
//
//
const SignIn = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  })
  const { handleSignIn, error } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    handleSignIn(info)
  }

  const handleChange = (e) => {
    e.persist()
    const { name, value } = e.target
    setInfo((old) => ({ ...old, [name]: value }))
  }
  return (
    <div className="signin">
      <h3>Sign In</h3>
      <div>
        <small>
          or{" "}
          <Link href="/signup" as="/signup">
            <a>CREATE AN ACCOUNT</a>
          </Link>
        </small>
      </div>
      <form onSubmit={handleSubmit}>
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

export default SignIn
