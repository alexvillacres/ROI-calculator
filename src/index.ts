import './styles/calculator.css';

import {
  decrementButton,
  incrementButton,
  nextButton,
  prevButton,
  stepperInput,
  submitButton,
} from './modules/domElements';
import {
  handleNextButtonClick,
  handlePreviousButtonClick,
  handleSubmitButtonClick,
} from './modules/eventHandlers';
import { changeValue } from './modules/stepper';

document.addEventListener('DOMContentLoaded', () => {
  // variables
  const count = 0;

  // Attach event handlers
  nextButton?.addEventListener('click', handleNextButtonClick);
  nextButton?.addEventListener('touchstart', handleNextButtonClick);

  submitButton?.addEventListener('click', handleSubmitButtonClick);
  submitButton?.addEventListener('touchstart', handleSubmitButtonClick);

  prevButton?.addEventListener('click', handlePreviousButtonClick);
  prevButton?.addEventListener('touchstart', handlePreviousButtonClick);

  incrementButton?.addEventListener('click', () => changeValue(stepperInput, 1));
  decrementButton?.addEventListener('click', () => changeValue(stepperInput, -1));
});
