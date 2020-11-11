import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Filter9Plus, People } from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";
import PeopleList from './PeopleList';

const StyledPeopleContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  width: 100%;

  .people-container-actions {
    bottom: .25rem;
    left: .5rem;
    padding: .5rem;
    position: absolute;

    .MuiSvgIcon-root {
      margin-right: .5rem;
    }

    > button:first-child {
      margin-right: 1rem;
    }
  }
`;

const PeopleContainer = ({people}) => {
  return (
    <StyledPeopleContainer className="people-container">
      <PeopleList people={people} />
      <div className="people-container-actions">
        <Fab
          color="primary"
          variant="extended"
          size="small"
          aria-label="ocurrences"
        >
          <Filter9Plus />
          Ocurrences
        </Fab>
        <Fab
          color="primary"
          variant="extended"
          size="small"
          aria-label="duplicates"
        >
          <People />
          Duplicates
        </Fab>
      </div>
    </StyledPeopleContainer>
  );
};

PeopleContainer.propTypes = {
  people: PropTypes.array
};

PeopleContainer.defaultProps = {
  people: [],
};

export default PeopleContainer;
