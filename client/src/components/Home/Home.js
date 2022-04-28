import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from '@material-ui/core';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Pagination from '../Pagination/Pagination';
import { getPosts, getPostsBySearch } from '../../actions/posts';
import useStyles from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const query = useQuery();
  const navigate = useNavigate();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const classes = useStyles();

  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostsBySearch({ search }));
      navigate(`/posts/search?searchQuery=${search || 'none'}`);
    } else {
      navigate('/');
    }
  };
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  return (
    <Grow in>
      <Container maxWidth='xl'>
        <Grid
          className={classes.gridContainer}
          container
          justifyContent='space-between'
          alignItems='stretch'
          spacing={3}
        >
          <Grid item xs={12} md={9} sm={6}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <AppBar
              className={classes.appBarSearch}
              position='static'
              color='inherit'
            >
              <TextField
                name='search'
                variant='outlined'
                label='Search'
                fullWidth
                onKeyPress={handleKeyPress}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                onClick={searchPost}
                className={classes.searchButton}
                variant='contained'
                color='primary'
              >
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            {!searchQuery && (
              <Paper elevation={6} className={classes.pagination}>
                <Pagination page={page} />
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
