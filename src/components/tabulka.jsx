import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";

const ScheduleTable = () => {
  const days = [
    "Pondělí",
    "Úterý",
    "Středa",
    "Čtvrtek",
    "Pátek",
    "Sobota",
    "Neděle",
  ];
  const hours = [
    "11:00 - 22:00",
    "11:00 - 22:00",
    "11:00 - 22:00",
    "11:00 - 22:00",
    "11:00 - 22:00",
    "11:30 - 22:00",
    "ZAVŘENO",
  ];

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "300px",
        padding: "0px",
        margin: "0",
        backgroundColor: "transparent",
        boxShadow: "none",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Table>
        <TableBody>
          {days.map((day, index) => (
            <TableRow key={day}>
              <TableCell  sx={{ borderBottom: 'none', padding: '4px' }}>
                <Typography
                  sx={{
                    fontFamily: "roboto",
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  {day}:
                </Typography>
              </TableCell >
              <TableCell align="right"  sx={{ borderBottom: 'none',  padding: '4px' }}>
                <Typography
                  sx={{
                    fontFamily: "roboto",
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  {hours[index]}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScheduleTable;
