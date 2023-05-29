import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Stack } from "@mui/material";
//import * as Yup from 'yup';
//import { Formik,Form,Field} from 'formik';




function createData(name, calories, fat, carbs, protein,edit) {
    return { name, calories, fat, carbs, protein,edit };
}
const rows = [
    createData(12, "Book1", "Author1", 2, 299),
    createData(13, "Book2", "Author2", 7, 349),
    createData(24, "Book3", "Author3", 4, 799),
    createData(16, "Book4", "Author4", 7, 469),
    createData(21, "Book5", "Author5", 9, 999),
];

function ProductList() {
    return (
        <>
        <div className="row" style={{
            marginTop: "50px"
        }}>
            <h1 style={{
                fontSize:"32px",
                fontStyle: 'roboto'
            }}>Product Page</h1>
        </div>
        
        <Stack direction={"column"} className="pro">
            
        </Stack>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead  >
                        <TableRow>
                            <TableCell style={{fontWeight: "bold"}} align="center">Id</TableCell>
                            <TableCell style={{fontWeight: "bold"}} align="right">Title</TableCell>
                            <TableCell style={{fontWeight: "bold"}} align="right">Author&nbsp;</TableCell>
                            <TableCell style={{fontWeight: "bold"}} align="right">Quantity&nbsp;</TableCell>
                            <TableCell style={{fontWeight: "bold"}} align="right">Price&nbsp;</TableCell>
                            <TableCell style={{fontWeight: "bold"}} align="center">Edit&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="center">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                                <TableCell align="center"><Button variant="outlined" color="success">Add</Button>  <Button variant="outlined" color="error">Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        

        </>

    )
}

export default ProductList;