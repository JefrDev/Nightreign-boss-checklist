import React, { useState } from "react";
import "./SignInPage.css";

function SignInPage() {
  const [id, setId] = useState("");
  const [code, setCode] = useState("");

  const handlePasscodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 4);
    setCode(value);
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  function handleLoginClick() {
    console.log("login");
  }

  function handleCreateClick() {
    console.log("create");
  }

  return (
    <div className="centerParent">
      <div className="signInBox">
        <div className="instructions">
          This signin is required so you will be linked to your own checklist.
        </div>
        <div className="explanation">
          {/* Add explanation text here about what ID and CODE do */}
        </div>
        <div className="inputGroup">
          <label htmlFor="idInput" className="signInLabel">
            ID *
          </label>
          <input
            className="signInInput"
            id="idInput"
            value={id}
            onChange={handleIdChange}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="codeInput" className="signInLabel">
            Passcode
          </label>
          <input
            type="password"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={4}
            className="signInInput"
            id="codeInput"
            value={code}
            onChange={handlePasscodeChange}
          />
        </div>
        <div className="buttonGroup">
          <button className="signInButton" onClick={handleLoginClick}>
            Login
          </button>
          <button className="signInButton" onClick={handleCreateClick}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
