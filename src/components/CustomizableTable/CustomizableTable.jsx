import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[500],
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function CustomizedTables({ headerValue, tableData }) {
  // const a = tableData;
  // const [data, setData] = React.useState([]);
  const data = tableData;

  return (
    <TableContainer component={Paper} style={{ marginTop: "20px" }}>
      <Table
        sx={{ minWidth: 400 }}
        aria-label="customized table"
        // style={{ marginLeft: 5 }}
      >
        <TableHead>
          <TableRow style={{ padding: 20 }}>
            <StyledTableCell align="center">{headerValue}</StyledTableCell>
            <StyledTableCell align="center">Voter</StyledTableCell>
            <StyledTableCell align="center">Voter ID</StyledTableCell>
            <StyledTableCell align="center">Survey</StyledTableCell>
            <StyledTableCell align="center">Survey Number</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {data.} */}
          {data &&
            data.map((row) => (
              <StyledTableRow key={row.Name}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.Name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.voter}</StyledTableCell>
                <StyledTableCell align="center">{row.voterID}</StyledTableCell>
                <StyledTableCell align="center">{row.Survey}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.SurveyNumber}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomizedTables;
