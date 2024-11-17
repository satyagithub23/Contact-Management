import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';


const columns = [
    { id: 'firstName', label: 'First Name', minWidth: '170' },
    { id: 'lastName', label: 'Last Name', minWidth: '170' },
    { id: 'email', label: 'Email', minWidth: '170' },
    { id: 'phone', label: 'Phone Number', minWidth: '170' },
    { id: 'company', label: 'Company', minWidth: '170' },
    { id: 'job', label: 'Job Title', minWidth: '170' },
    { id: 'actions', label: 'Actions', minWidth: '170', align: 'center' }
]

const rows = [
    { firstName: 'Satya', lastName: 'Sahu', email: 'satya@gmail.com', phone: '7205210531', company: 'none', job: 'none' },
    { firstName: 'Satya', lastName: 'Sahu', email: 'satya@gmail.com', phone: '7205210532', company: 'none', job: 'none' },
    { firstName: 'Satya', lastName: 'Sahu', email: 'satya@gmail.com', phone: '7205210533', company: 'none', job: 'none' },
    { firstName: 'Satya', lastName: 'Sahu', email: 'satya@gmail.com', phone: '7205210534', company: 'none', job: 'none' },
    { firstName: 'Satya', lastName: 'Sahu', email: 'satya@gmail.com', phone: '7205210535', company: 'none', job: 'none' },
    { firstName: 'Satya', lastName: 'Sahu', email: 'satya@gmail.com', phone: '7205210536', company: 'none', job: 'none' },
    { firstName: 'Satya', lastName: 'Sahu', email: 'satya@gmail.com', phone: '7205210537', company: 'none', job: 'none' },
    { firstName: 'Satya', lastName: 'Sahu', email: 'satya@gmail.com', phone: '7205210538', company: 'none', job: 'none' },
    { firstName: 'Satya', lastName: 'Sahu', email: 'satya@gmail.com', phone: '7205210539', company: 'none', job: 'none' },
    { firstName: 'Satya', lastName: 'Sahu', email: 'satya@gmail.com', phone: '7205210530', company: 'none', job: 'none' },
    { firstName: 'Satya', lastName: 'Sahu', email: 'satya@gmail.com', phone: '7205210521', company: 'none', job: 'none' },
    { firstName: 'Satya', lastName: 'Sahu', email: 'satya@gmail.com', phone: '7205210523', company: 'none', job: 'none' },
    { firstName: 'Satya', lastName: 'Sahu', email: 'satya@gmail.com', phone: '7205210585', company: 'none', job: 'none' }
]

const AllContact = () => {
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(8)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: '440' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead sx={{ backgroundColor: 'black', color: 'white' }}>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
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
                                                        <>
                                                            <Button>Edit</Button>
                                                            <Button>Delete</Button>
                                                        </>
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