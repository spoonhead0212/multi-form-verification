// Change event for input elements
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};

// For textarea
const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  console.log(e.target.value);
};

// For select
const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  console.log(e.target.value);
};

// Form submission
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Form handling logic
};

// Form reset
const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
  // Reset handling logic
};

// Click event
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log('Button clicked!');
};

// Double click
const handleDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
  console.log('Double clicked!');
};

// Mouse enter/leave
const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
  console.log('Mouse entered');
};

const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
  console.log('Mouse left');
};

// Key down
const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') {
    console.log('Enter pressed');
  }
};

// Key up
const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
  console.log(`Key released: ${e.key}`);
};

// Focus
const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
  console.log('Input focused');
};

// Blur
const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
  console.log('Input lost focus');
};