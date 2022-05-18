import throttle from "lodash.throttle";

const formRef = document.querySelector(".feedback-form");

populizeFormValues();

formRef.addEventListener("input", throttle(onFormInput, 500));
formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  localStorage.removeItem("feedback-form-state");

  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;

  const feedbackFormState = {
    email,
    message,
  };

  console.log(feedbackFormState);

  e.currentTarget.reset();
}

function onFormInput() {
  const email = formRef.elements.email.value;
  const message = formRef.elements.message.value;

  const feedbackFormState = {
    email,
    message,
  };

  localStorage.setItem(
    "feedback-form-state",
    JSON.stringify(feedbackFormState)
  );
}

function populizeFormValues() {
  const formValues = JSON.parse(localStorage.getItem("feedback-form-state"));

  if (formValues) {
    formRef.elements.email.value = formValues.email;
    formRef.elements.message.value = formValues.message;
  }
}
