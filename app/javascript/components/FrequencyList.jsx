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
  margin-bottom: 60px;
`;

const FrequencyList = ({ data }) => {
  return (
    <StyledFrequencyList className="frequency-list">
      <TableContainer component={Paper}>
        <Table aria-label="frequency table">
          <TableHead>
            <TableRow>
              <TableCell>Character</TableCell>
              <TableCell>Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.letter}>
                <TableCell>{row.letter}</TableCell>
                <TableCell>{row.frequency}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledFrequencyList>
  );
}

FrequencyList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default FrequencyList;
