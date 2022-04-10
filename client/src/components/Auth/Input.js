import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const Input = ({
  half,
  name,
  handleChange,
  lable,
  autoFocus,
  type,
  handleShowPassword,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant='outlined'
        required
        fullWidth
        label={lable}
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name === 'password' && {
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={handleShowPassword}>
                  {type === 'password' ? (
                    <VisibilityOutlinedIcon />
                  ) : (
                    <VisibilityOffOutlinedIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }
        }
      />
    </Grid>
  );
};

export default Input;
