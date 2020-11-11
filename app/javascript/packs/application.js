import '../stylesheets/style.scss';

import RailsUJS from '@rails/ujs';
import Turbolinks from 'turbolinks';
import ReactRailsUJS from 'react_ujs';

RailsUJS.start();
Turbolinks.start();

const componentRequireContext = require.context("components", true);
ReactRailsUJS.useContext(componentRequireContext);
