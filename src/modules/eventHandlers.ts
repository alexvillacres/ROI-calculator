import { calculateMoneySaved } from './calculator';
import { formContainer, moneySavedInput } from './domElements';
import { toggleElementsVisibility, updateCalculatorState, updateResults } from './uiManipulation';

const averageAnnualSalary = 137000;
const timeSavedPercentage = 0.24;
let moneySaved: number;

export function handleNextButtonClick(event: Event): void {
  // Your existing logic
  event.preventDefault();
  const numberOfEmployeesElement = document.getElementById('employee-number') as HTMLInputElement;
  let numberOfEmployees = 0;

  if (numberOfEmployeesElement) {
    numberOfEmployees = parseInt(numberOfEmployeesElement.value, 10);
  }

  moneySaved = calculateMoneySaved(averageAnnualSalary, numberOfEmployees, timeSavedPercentage);
  console.log(moneySaved, moneySavedInput);
  updateResults(moneySaved, 'money-saved');
  updateCalculatorState('middle');
}

export function handlePreviousButtonClick(event: Event): void {
  updateCalculatorState('start');
}

export function handleSubmitButtonClick(event: Event): void {
  if (!formContainer.reportValidity()) {
    event.preventDefault();
    return; // If the form isn't valid, it stops further execution.
  }
  toggleElementsVisibility({
    form_header: 'none',
    roi_block_two: 'none',
    roi_button_wrap: 'none',
  });
  setTimeout(() => {
    updateCalculatorState('success');
  }, 1000);
}
