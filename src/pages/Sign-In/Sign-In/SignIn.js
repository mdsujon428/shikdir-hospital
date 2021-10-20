import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Container, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import useFirebase from '../../../hooks/useFirebase';
import { useHistory, useLocation } from 'react-router';

const auth = getAuth()
const SignIn = () => {
    const googleIcon = <FontAwesomeIcon icon={faGoogle} />

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checked, setChecked] = useState(false)
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/';

    const { setUser, signInUsingGoogle } = useFirebase();
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    //function to handle sign-in or signup
    const handleChecked = (e) => {
        const checked = e.target.checked;
        setChecked(checked)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleRegister = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <Container className='my-5 p-3 sm:w-25  border rounded'>
            <Form>
                {checked &&
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Control className="p-2" type="text" placeholder="First Name" />
                    </Form.Group>
                }
                {checked &&
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Control className="p-2" type="text" placeholder="Last Name" />
                    </Form.Group>
                }
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmail} className="p-2" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlePassword} className="p-2" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Button onClick={handleGoogleSignIn} className='p-2 form-control bg-danger text-white' type='button'>{googleIcon}+ Google </Button>
                    {/* <Button onClick={SignOut} className='p-2 form-control bg-danger text-white' type='button'>{googleIcon} {user.email? 'suer in ' : 'user out'}</Button> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleChecked} type="checkbox" label={checked ? "Create an account" : "Sign In"} />
                </Form.Group>
                {checked ?
                    <Button onClick={handleRegister} className='form-control text-dark bg-warning bg-gradient' variant="primary" type="submit">
                        Sign Up
                    </Button>
                    :
                    <Button onClick={handleSignIn} className='form-control text-dark bg-warning bg-gradient' variant="primary" type="submit">
                        Sign In
                    </Button>
                }
            </Form>
        </Container >
    );
};

export default SignIn;