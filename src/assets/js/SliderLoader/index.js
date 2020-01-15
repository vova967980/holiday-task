'use strict';
import { loadJSON } from '../../../utils';
import createSlider from '../Slider/index';


loadJSON('/data/slides.json' )
    .then(createSlider);