import React, {Component} from 'react';
import {Card, TextField, Button, Grid } from '@material-ui/core'

class Success extends Component {

  handleChange = (event) => {
    console.log(event.target.value)
  }

  handleClick = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={6}>
          <Card>
          <h1>Done</h1>
            <Grid container justify="center" alignItems="center">
              <Button variant="raised" onClick={this.handleClick}>Next</Button>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    )
  }
}

export default Success