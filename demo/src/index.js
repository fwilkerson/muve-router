import './normalize.css';
import './skeleton.css';
import './index.css';

import muve from 'muve';

import model from './model';
import view from './view';

muve(view, model, document.getElementById('root'));