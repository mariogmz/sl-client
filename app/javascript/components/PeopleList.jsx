import React from "react"
import PropTypes from "prop-types"
import { DataGrid } from "@material-ui/data-grid";
import styled from "styled-components";

const StyledPeopleList = styled.div`
  flex: 1;
  width: 100%;
`;

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "displayName", headerName: "Name", width: 400 },
  { field: "emailAddress", headerName: "Email", width: 400 },
  { field: "title", headerName: "Job Title", width: 300 },
];

const PeopleList = ({people}) => {

  return (
    <StyledPeopleList className="people-list">
      <DataGrid rows={people} columns={columns} autoPageSize />
    </StyledPeopleList>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array.isRequired,
};

export default PeopleList;
