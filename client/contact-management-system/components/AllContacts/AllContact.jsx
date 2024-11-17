import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Stack, Typography } from '@mui/material';


const columns = [
    { id: 'firstName', label: 'First Name', minWidth: '170' },
    { id: 'lastName', label: 'Last Name', minWidth: '170' },
    { id: 'email', label: 'Email', minWidth: '170' },
    { id: 'phone', label: 'Phone Number', minWidth: '170' },
    { id: 'company', label: 'Company', minWidth: '170' },
    { id: 'job', label: 'Job Title', minWidth: '170' },
    { id: 'actions', label: 'Actions', minWidth: '170', align: 'center' }
]

const AllContact = () => {
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(8)
    const [contacts, setContacts] = React.useState([])
    React.useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('http://localhost:3300/contacts')
        const data = await response.json();
        setContacts(data.contacts);
      }
      fetchData()
    }, [])
    
    const rows = contacts

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', padding: '1.5rem' }}>
            <TableContainer sx={{ maxHeight: '440' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    color='#6A42C2'
                                    style={{ minWidth: column.minWidth, backgroundColor: '#8B5DFF' }}
                                >
                                    <Typography variant='subtitle1' component='span' color='#3B1E54' sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                                        {column.label}
                                    </Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover tabIndex={-1} key={row.phone}>
                                        {columns.map((column) => {
                                            const value = row[column.id]
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.id === 'actions' ? (
                                                        <Stack spacing={1} justifyContent='center' direction='row'>
                                                            <Button variant='contained'>Edit</Button>
                                                            <Button variant='contained'>Delete</Button>
                                                        </Stack >
                                                    ) : (
                                                        value
                                                    )}
                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}>
            </TablePagination>

        </Paper>
    )
}

export default AllContact