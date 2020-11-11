import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { List, Filter9Plus, People } from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";

const StyledNavigator = styled.section`
  bottom: .25rem;
  left: 1rem;
  position: absolute;

  .navigator-actions {
    padding: .5rem;

    .MuiSvgIcon-root {
      margin-right: .5rem;
    }

    > a:not(:first-child) {
      margin-left: 1rem;
    }
  }
`;

const Navigator = ({ listUrl, frequencyUrl, duplicatesUrl }) => {

  return (
    <StyledNavigator className="navigator">
      <div className="navigator-actions">
        <Fab
          component="a"
          href={listUrl}
          color="primary"
          variant="extended"
          size="small"
          aria-label="list"
        >
          <List />
          List
        </Fab>
        <Fab
          component="a"
          href={frequencyUrl}
          color="primary"
          variant="extended"
          size="small"
          aria-label="frequency"
        >
          <Filter9Plus />
          Frequency
        </Fab>
        <Fab
          component="a"
          href={duplicatesUrl}
          color="primary"
          variant="extended"
          size="small"
          aria-label="duplicates"
        >
          <People />
          Duplicates
        </Fab>
      </div>
    </StyledNavigator>
  );
};

Navigator.propTypes = {
  listUrl: PropTypes.string.isRequired,
  frequencyUrl: PropTypes.string.isRequired,
  duplicatesUrl: PropTypes.string.isRequired,
};

export default Navigator;
