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

const StyledDuplicatesList = styled.div`
  margin-bottom: 60px;
`;

const DuplicatesList = ({ data }) => {
  return (
    <StyledDuplicatesList className="frequency-list">
      <TableContainer component={Paper}>
        <Table aria-label="frequency table">
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Possible duplicate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.email}>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.duplicated}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledDuplicatesList>
  );
}

DuplicatesList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DuplicatesList;
