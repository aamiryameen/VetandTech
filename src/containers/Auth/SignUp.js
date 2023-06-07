import React, { useContext } from "react";
import { Container, NavBar, TextField } from "components";
import PropTypes from "prop-types";
import { AuthContext } from "contexts/AuthContext";
import FormContainer from "./FormContainer";

const SignUp = ({ navigation }) => {
  const { dispatch } = useContext(AuthContext);
  return (
    <Container asGradient>
      <NavBar onLeftIconPress={() => navigation.goBack()} />
      <FormContainer
        title="Create an Account"
        subtitle="Join today along with million other users to the most exclusive e-commerce platform ever!"
        buttonLabel="Sign Up"
        onSubmit={() => dispatch({ type: "SIGN_IN" })}
      >
        <TextField label="Name" />
        <TextField label="Phone number" />
        <TextField label="Email address" />
        <TextField label="Password" secureTextEntry />
        <TextField label="Confirm Password" secureTextEntry />
      </FormContainer>
    </Container>
  );
};

SignUp.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SignUp;
