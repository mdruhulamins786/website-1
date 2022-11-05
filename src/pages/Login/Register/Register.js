import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();
  const { signInEmail, updateUserProfile, verifyEmail } =
    useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // input validation
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, photoURL, email, password);

    signInEmail(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate("/login");
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        toast.success("please verify your email");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  // update profile
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  // checkbox input
  const handleAccepted = (e) => {
    setAccepted(e.target.checked);
  };

  // email verify
  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {/* name */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Your Name" />
        </Form.Group>
        {/* photo url */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            name="photoURL"
            type="text"
            placeholder="Your Photo URL"
          />
        </Form.Group>
        {/* email */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        {/* password */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {/* check box */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onClick={handleAccepted}
            label={
              <>
                Accept <Link to="/terms">terms and condition</Link>{" "}
              </>
            }
          />
        </Form.Group>
        <span>{error}</span> <br />
        <Button variant="primary" type="submit" disabled={!accepted}>
          Login
        </Button>
      </Form>
    </>
  );
};

export default Register;
