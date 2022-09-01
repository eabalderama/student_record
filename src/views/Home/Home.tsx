import React, { useEffect, useState } from 'react'
import { Container, Paper, TableContainer, TableHead, Table, TableCell, TableBody, TableRow, Button } from '@material-ui/core';
import { getStudents, deleteStudent } from '../../api/students';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export interface Student {
  _id?: String,
  email: String,
  firstname: String,
  lastname: String,
  course: String,
  campus: String,
  contact_number: String,
  address: String,
  createdAt?: Date,
  updatedAt?: Date
}


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  container: {
    padding: '30px 0px'
  },
  thead: {
    backgroundColor: '#0a0a23',
  },
  theadItem: {
    color: '#fff'
  },
  linkButton: {
    padding: '6px 16px',
    backgroundColor: '#3f51b5',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '24px'
  }
});

const Home = () => {
  const classes = useStyles()
  const [students, setStudents] = useState<Student[]>()
  const navigate = useNavigate();
  const notify = (message: String) => toast(`${message}`);

  const fetchStudents = async () => {
    const result = await getStudents()
    if(result.status){
      setStudents(result.data)
    }
  }

  useEffect(() => {
    fetchStudents()
  },[])

  const handleDelete = (id?: String) => {
    const removeStudent = async () => {
      if(id){
        const result = await deleteStudent(id)
        if(result.status){
          notify('Student successfully deleted')
          console.log(result.data)
          fetchStudents()
        }
      }
    }
    removeStudent()
  }

  return (
    <Container className={classes.container} maxWidth='lg'>
      <Button component={Link} to='/add' color='primary' variant='contained'>Add Student</Button>
      <TableContainer component={Paper} style={{ marginTop: '5px' }}>
        <Table className={classes.table}>
          <TableHead className={classes.thead}>
            <TableRow>
              <TableCell className={classes.theadItem}>#</TableCell>
              <TableCell className={classes.theadItem}>Name</TableCell>
              <TableCell className={classes.theadItem}>Email</TableCell>
              <TableCell className={classes.theadItem}>Course</TableCell>
              <TableCell className={classes.theadItem}>Campus</TableCell>
              <TableCell className={classes.theadItem}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students && students.map((student, index) => (
              <TableRow key={`${index}-student`} >
                <TableCell>{index}</TableCell>
                <TableCell>{student.firstname} {student.lastname}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.course}</TableCell>
                <TableCell>{student.campus}</TableCell>
                <TableCell>
                  <Button color='secondary' variant='outlined' onClick={() => navigate(`edit/${student._id}`)} style={{ marginRight: '5px' }}>
                    Edit
                  </Button>
                  <Button color='secondary' variant='outlined' onClick={() => handleDelete(student._id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Toaster />
    </Container>
  )
}

export default Home