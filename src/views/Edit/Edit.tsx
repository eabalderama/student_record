import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { createStudent, getStudentById, updateStudent } from '../../api/students';
import { useParams } from 'react-router-dom';
import {Student} from '../Home/Home';
import toast from 'react-hot-toast';

const useStyles = makeStyles({
  container: {
    padding: '30px 0px'
  }
});

const Edit = () => {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [course, setCourse] = useState('')
  const [campus, setCampus] = useState('')
  const [address, setAddress] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [loader, setLoader] = useState(false)
  const { id } = useParams()
  const notify = (message: String) => toast(`${message}`)

  useEffect(() => {
    const fetchStudentById = async () => {
      if(id){
        const result = await getStudentById(id)
        if(result.status) {
          setEmail(result.data.email)
          setFirstname(result.data.firstname)
          setLastname(result.data.lastname)
          setCampus(result.data.campus)
          setCourse(result.data.course)
          setAddress(result.data.address)
          setContactNumber(result.data.contact_number)
        }
      }
    }

    fetchStudentById()
  },[])

  const handleUpdate = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setLoader(true)
    const data = {
      email,
      firstname,
      lastname,
      course,
      campus,
      address,
      contact_number: contactNumber
    }
    const saveUpdate = async () => {
      if(id) {
        const result = await updateStudent(data, id)
        if(result.status){
          setLoader(false)
          notify('Student updated successfully')
          console.log(result.data)
        }
      }
    }
    saveUpdate()
  }
  return (
    <Container className={classes.container} maxWidth='lg'>
      <Grid container justifyContent='center'>
        <Grid item xs={12}>
          <Typography variant='h4' align='center'>Edit Student</Typography>
        </Grid>
        <Grid item xs={6}>
          <form onSubmit={handleUpdate}>
            <TextField value={email ? email : ''} onChange={(e) => setEmail(e.target.value)} name='email' fullWidth id="filled-full-width" label="Email" variant='filled' margin='normal' required/>
            <TextField value={firstname ? firstname : ''} onChange={(e) => setFirstname(e.target.value)} name='firstname' fullWidth id="filled-full-width" label="First Name" variant='filled' margin='normal' required/>
            <TextField value={lastname ? lastname : ''} onChange={(e) => setLastname(e.target.value)} name='lastname' fullWidth id="filled-full-width" label="Last Name" variant='filled' margin='normal' required/>
            <TextField value={course ? course : ''} onChange={(e) => setCourse(e.target.value)} name='course' fullWidth id="filled-full-width" label="Course" variant='filled' margin='normal' required/>
            <TextField value={campus ? campus : ''} onChange={(e) => setCampus(e.target.value)} name='campus' fullWidth id="filled-full-width" label="Campus" variant='filled' margin='normal' required/>
            <TextField value={address ? address : ''} onChange={(e) => setAddress(e.target.value)} name='address' fullWidth id="filled-full-width" label="Address" variant='filled' margin='normal' required/>
            <TextField value={contactNumber ? contactNumber : ''} onChange={(e) => setContactNumber(e.target.value)} name='contact_number' fullWidth id="filled-full-width" label="Contact #" variant='filled' margin='normal' required/>
            <Box style={{ display: 'flex', justifyContent: 'center' }}>
              <Button type='submit' color='primary' variant='contained' style={{ margin: 'auto' }} disabled={loader}>
                Update
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Edit