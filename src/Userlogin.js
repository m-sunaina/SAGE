import React, { useState } from 'react';
import './Userlogin.css';
import { registerUser, loginUser } from './api'; // add this line

const securityQuestions = [
  "What was your first pet’s name?",
  "What is your mother's maiden name?",
  "What was the name of your first school?",
  "What city were you born in?",
  "What is your favorite food?"
];

function UserLogin() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleToggle = () => {
    setIsNewUser(!isNewUser);
  };

  const handleSubmit = async () => {
    try {
      if (isNewUser) {
        const newUser = {
          name,
          email,
          password,
          securityQuestion: selectedQuestion,
          securityAnswer: answer
        };
        const res = await registerUser(newUser);
        alert(res.data.message);
      } else {
        const res = await loginUser({ email, password });
        alert(res.data.message);
      }
    } catch (err) {
      alert(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <h2>{isNewUser ? 'Register' : 'Login'} to SAGE</h2>

      {isNewUser && (
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {isNewUser && (
        <div className="security-question">
          <select
            value={selectedQuestion}
            onChange={(e) => setSelectedQuestion(e.target.value)}
          >
            <option value="">Select a Security Question</option>
            {securityQuestions.map((q, idx) => (
              <option key={idx} value={q}>{q}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Your Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
      )}

      <button onClick={handleSubmit}>
        {isNewUser ? 'Register' : 'Login'}
      </button>

      <p onClick={handleToggle} className="toggle-text">
        {isNewUser ? 'Already have an account? Login' : 'New user? Register here'}
      </p>
    </div>
  );
}

export default UserLogin;
