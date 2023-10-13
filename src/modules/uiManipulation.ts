import { formContainer, moneySavedInput } from './domElements';

export function updateResults(moneySaved: number, elementId: string): void {
  if (moneySavedInput) {
    moneySavedInput.textContent = `$${moneySaved.toLocaleString()}`;
  }
}

export function toggleElementsVisibility(elements: { [key: string]: 'none' | 'flex' }): void {
  Object.keys(elements).forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = elements[id];
    }
  });
}

export function updateCalculatorState(newState: 'start' | 'middle' | 'success') {
  if (formContainer) {
    formContainer.setAttribute('data-calculator-state', newState);
  }
}
