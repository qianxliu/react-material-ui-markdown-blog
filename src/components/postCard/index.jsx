import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import React from 'react';
import styles from './styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export default (props) => {
  const { post } = props;
  const classes = styles();

  if (!post) {
    return null;
  }

  const scrollTop = () => {
    window.scrollTo(0, 0)
  };

  const date = new Date(post.date).toDateString();

  if (!post.title) {
    let rawFile = new XMLHttpRequest();
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status === 0) {
          if (!post.markdown)
            post.markdown = rawFile.responseText;
          post.title = rawFile.responseText.match(/\s.+/);
        }
      }
    };
    //false for string
    rawFile.open("GET", "/articles/".concat(post.id).concat(".md"), true);
    rawFile.send(null);
  }

  return (
    <CardActionArea
      className='post-link'
      component={Link}
      onClick={scrollTop}
      to={`/post/${post.id}`}
    >
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component='h2' variant='h5'>
              {post.title}
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              {post.author}
            </Typography>
            <Typography variant='subtitle1' paragraph>
              {post.preview}
            </Typography>
            <Grid container alignItems='center' justify='space-between'>
              <Grid item>
                {post.tags.map((tag) => (
                  <Chip
                    className={classes.chip}
                    // key={tag}
                    label={tag}
                  />
                ))}
              </Grid>
              <Grid item>
                <Typography variant='subtitle2' color='textSecondary' align='right'>
                  {date}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia
            className={classes.cardMedia}
            image={"//git.nwu.edu.cn/2018104171/web/raw/master/build/".concat(post.thumbnail)}
            title='Image title'
          />
        </Hidden>
      </Card>
    </CardActionArea>
  )
}
