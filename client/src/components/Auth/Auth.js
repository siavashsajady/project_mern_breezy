import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input';
import useStyles from './styles';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const classes = useStyles();

  const handleSubmit = () => {};

  const handleChange = () => {};

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setIsSignUp((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>
          {isSignUp ? 'Sign Up' : 'Sign In'}{' '}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name='firstName'
                  lable='First Name'
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name='lastName'
                  lable='Last Name'
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name='email'
              lable='Email Address'
              handleChange={handleChange}
              type='email'
            />
            <Input
              name='password'
              lable='Password'
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name='confirmPassword'
                lable='Repat Password'
                handleChange={handleChange}
                type='password'
              />
            )}
          </Grid>
          <Button
            className={classes.submit}
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? 'Already have an account? Sign In'
                  : 'Don not have an account? Sign Up'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
