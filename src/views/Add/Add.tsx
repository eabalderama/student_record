import React from 'react'
import { Box, Button, Container, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { createStudent } from '../../api/students';
import toast, { Toaster } from 'react-hot-toast'

const useStyles = makeStyles({
  container: {
    padding: '30px 0px'
  }
});

const Add = () => {
  const classes = useStyles()
  const notify = (message: String) => toast(`${message}`)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      email: { value: string }
      firstname: { value: string }
      lastname: { value: string }
      course: { value: string }
      campus: { value: string }
      address: { value: string }
      contact_number: { value: string }
    };
    const data = {
      email: target.email.value,
      firstname: target.firstname.value,
      lastname: target.lastname.value,
      course: target.course.value,
      campus: target.campus.value,
      address: target.address.value,
      contact_number: target.contact_number.value
    }
    const registerStudent = async () => {
      const result = await createStudent(data)
      if(result.status){
        notify('Student added successfully')
        console.log(result.data)
      }else{
        notify('Failed to add student')
      }
    }
    registerStudent()
  }
  return (
    <Container className={classes.container} maxWidth='lg'>
      <Grid container justifyContent='center'>
        <Grid item xs={12}>
          <Typography variant='h4' align='center'>Add Student</Typography>
        </Grid>
        <Grid item xs={6}>
          <form onSubmit={handleSubmit}>
            <TextField name='email' fullWidth id="filled-full-width" label="Email" variant='filled' margin='normal' required/>
            <TextField name='firstname' fullWidth id="filled-full-width" label="First Name" variant='filled' margin='normal' required/>
            <TextField name='lastname' fullWidth id="filled-full-width" label="Last Name" variant='filled' margin='normal' required/>
            <TextField name='course' fullWidth id="filled-full-width" label="Course" variant='filled' margin='normal' required/>
            <TextField name='campus' fullWidth id="filled-full-width" label="Campus" variant='filled' margin='normal' required/>
            <TextField name='address' fullWidth id="filled-full-width" label="Address" variant='filled' margin='normal' required/>
            <TextField name='contact_number' fullWidth id="filled-full-width" label="Contact #" variant='filled' margin='normal' required/>
            <Box style={{ display: 'flex', justifyContent: 'center' }}>
              <Button type='submit' color='primary' variant='contained' style={{ margin: 'auto' }}>
                Submit
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Add