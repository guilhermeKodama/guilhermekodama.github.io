import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import CameraIcon from '@material-ui/icons/Assessment'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Clipboard from 'react-clipboard.js'
import Snackbar from '@material-ui/core/Snackbar'
import ImageMe from './static/me_square.png'
import ImagePandora from './static/pandora.png'
import ImagePetFinder from './static/petfinder.png'
import ImageCarrerCon from './static/carrercon.png'
import ImageClosetinn from './static/closetinn.png'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  footerLinks: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  link: {
    marginRight: 20
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,
    alignSelf: 'center'
  },
  clipboard: {
    borderStyle: 'none'
  }
})

const cards = [
  {
    id: 1,
    url: 'https://github.com/guilhermeKodama/Pandora/blob/master/python-wavelet/pandora-ecg.ipynb',
    image: ImagePandora,
    title: 'Pandora - Arrhythmia Detection service',
    body: (
      <ul>
        <li>ECG signal processing with BioSPPy</li>
        <li>Feature engineering with time series ECG</li>
        <li>Data wrangling with PhysioBank databases to create a labeled dataset</li>
        <li>Machine Learning model for realtime  Arrhythmia Detection from ECG signal</li>
        <li>85% accuracy for 5 different arrhythmia classes</li>
      </ul>
    )
  },
  {
    id: 2,
    url: 'https://www.kaggle.com/guilhermekodama/eda-petfinder-competition-catboost-baseline',
    image: ImagePetFinder,
    title: 'PetFinder Competition - Kaggle',
    body: (
      <ul>
        <li>Extensive data exploration</li>
        <li>Generating features from images using CNNs and PCA</li>
        <li>Generating features from unstructured text using TF-IDF and TruncatedSVD</li>
        <li>Feature engineering from structured data</li>
        <li>Models precision/recall evaluation</li>
        <li>Parameter Tuning</li>
        <li>Top 23% on public leaderboard</li>
      </ul>
    )
  },
  {
    id: 3,
    url: 'https://www.kaggle.com/guilhermekodama/carrercon-rf-baseline-and-simple-features',
    image: ImageCarrerCon,
    title: 'CarrerCon - Kaggle',
    body: (
      <ul>
        <li>Data exploration and visualization</li>
        <li>Feature engineering with time series</li>
        <li>Models evaluation</li>
        <li>Parameter tuning</li>
        <li>Top 100 score on public leaderboard</li>
      </ul>
    )
  },
  {
    id: 4,
    url: 'https://github.com/guilhermeKodama/Closetinn/tree/master/machineLearning',
    image: ImageClosetinn,
    title: 'Closetinn - Fashion recommendation service',
    body: (
      <ul>
        <li>Data wrangling with web scrapped data from different fashion e-commerces sources</li>
        <li>Collaborative filtering Recommendation System (real users)</li>
        <li>Machine Learning model to predict user churn to improve email marketing and recommendations</li>
      </ul>
    )
  }
]

class App extends React.Component {
  state = {
    message: '',
    open: false
  }

  handleClick = (message) => {
    console.log('<MESSAGE:', message)
    this.setState({ open: true, message })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { open, message } = this.state
    const { classes } = this.props
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom',horizontal: 'right' }}
            open={open}
            autoHideDuration={6000}
            onClose={this.handleClose}
            ContentProps={{ 'aria-describedby': 'message-id' }}
            message={message}
          />
          <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Data Science Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Avatar alt="GK" src={ImageMe} className={classes.bigAvatar} />
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Guilherme Kodama
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                I am a Data Scientist enthusiast passionate about solving problems using AI with experience
                training and scaling ML models to production-ready services and +6 years experience
                in the software development industry.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                  <Clipboard data-clipboard-text="guilherme.kodama@gmail.com" className={classes.clipboard}>
                    <Button onClick={(e) => this.handleClick('Email copied to clipboard!')} variant="contained" color="primary">
                      Email me
                    </Button>
                    </Clipboard>
                  </Grid>
                  <Grid item>
                    <Clipboard data-clipboard-text="+55 (92) 981233668" className={classes.clipboard}>
                      <Button onClick={(e) => this.handleClick('Number copied to clipboard!')} variant="outlined" color="primary">
                        Call me
                      </Button>
                    </Clipboard>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* End hero unit */}
            <Grid container spacing={24}>
              {cards.map(card => (
                <Grid item key={card.id} xs={12} sm={6}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.image}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                      </Typography>
                      <Typography>
                        {card.body}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={(e) => { window.open(card.url, '_blank') }} size="small" color="primary">
                        View
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Find me on:
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p" className={classes.footerLinks}>
            <Link href={'https://www.kaggle.com/guilhermekodama'} color="inherit" className={classes.link}>
              Kaggle
            </Link>
            <Link href={'https://www.linkedin.com/in/guilhermekodama/'} color="inherit" className={classes.link}>
              LinkedIn
            </Link>
            <Link href={'https://github.com/guilhermeKodama'} color="inherit" className={classes.link}>
              GitHub
            </Link>
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App)
