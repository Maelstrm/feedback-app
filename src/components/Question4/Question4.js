import React, {Component} from 'react';
import {Card, TextField, Button, Grid } from '@material-ui/core'
class Question4 extends Component {

  handleChange = (event) => {
    console.log(event.target.value)
  }

  handleClick = () => {
    this.props.history.push('/5');
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={6}>
          <Card>
          <h1>Any additional comments?</h1>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={9}>
              <TextField
                label="Comments"
                multiline
                rowsMax="9"
                onChange={this.handleChange}
                margin="normal"
              />
              </Grid>
              <Grid item xs={3}>
              <Button variant="raised" onClick={this.handleClick}>Next</Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    )
  }
}

export default Question4