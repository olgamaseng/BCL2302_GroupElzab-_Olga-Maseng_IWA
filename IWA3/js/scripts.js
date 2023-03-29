

// scripts.js

import { company } from '../js';

import { year } from './configuration.js';

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message