import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaTwitch,
  FaWhatsapp,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          className="mb-1"
          variant="outline-primary"
        >
          {" "}
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-dark">
          {" "}
          <FaGithub /> Login with Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5 className="font-bold">Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook /> Facebook
          </ListGroup.Item>

          <ListGroup.Item className="mb-2">
            {" "}
            <FaWhatsapp /> Whatsapp{" "}
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter /> Twitter
          </ListGroup.Item>

          <ListGroup.Item className="mb-2">
            <FaTwitch /> Twitch
          </ListGroup.Item>

          <ListGroup.Item className="mb-2">
            Dapibus ac facilisis in
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel />
      </div>
    </div>
  );
};

export default RightSideNav;
