import '../stylesheets/style.scss';

import RailsUJS from '@rails/ujs';
import ReactRailsUJS from 'react_ujs';

RailsUJS.start();

const componentRequireContext = require.context("components", true);
ReactRailsUJS.useContext(componentRequireContext);
