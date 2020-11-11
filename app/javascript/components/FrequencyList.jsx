import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledFrequencyList = styled.div`
  .MuiTableCell-head {
    width: 50%;
  }
`;

const OcurrencesList = ({ people }) => {
  return (
    <StyledFrequencyList className="frequency-list">
      <TableContainer component={Paper}>
        <Table aria-label="frequency table">
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Character</TableCell>
              <TableCell>Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {people.map((person) => (
              <TableRow key={person.id}>
                <TableCell>{person.email}</TableCell>
                <TableCell>{person.character}</TableCell>
                <TableCell>{person.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledFrequencyList>
  );
}

OcurrencesList.propTypes = {
  people: PropTypes.array.isRequired,
};

export default OcurrencesList;
