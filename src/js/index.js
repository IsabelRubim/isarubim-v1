import "../scss/main.scss";

import { elements }  from './views/base';
import * as dropdownProject from './views/dropdownProject';

elements.triggers.forEach(trigger => trigger.addEventListener('mouseenter', dropdownProject.handleEnter));
elements.triggers.forEach(trigger => trigger.addEventListener('mouseleave', dropdownProject.handleLeave));


