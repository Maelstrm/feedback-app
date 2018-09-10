import React, {Component} from 'react';
import {Card, TextField, Button, Grid } from '@material-ui/core'
class Question3 extends Component {

  handleChange = (event) => {
    console.log(event.target.value)
  }

  handleClick = () => {
    this.props.history.push('/4');
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={6}>
          <Card>
          <h1>How supported do you feel?</h1>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={9}>
                <TextField  
                  id="name"
                  label="Support?"
                  onChange={this.handleChange}
                  margin="normal"
                  type="number"
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

export default Question3