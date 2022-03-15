/* eslint-disable camelcase */
import api from './services/api';
import select from './tags/select';
import option from './tags/option';
import label from './tags/label';
import textarea from './tags/textarea';
import input from './tags/input';
import div from './tags/div';
import toHtmlFor from './ultil/toHtmlFor';

(async () => {
  const data = await api('/api/fields');
  const form = document.getElementById('steps');

  // eslint-disable-next-line no-underscore-dangle
  const { request_fields, user_fields } = data._embedded;

  request_fields.forEach((field) => {
    if (field.type === 'enumerable') {
      const wrapElement = div({ className: 'form-group' });
      const selectElement = select({
        name: field.name,
        required: field.required,
      });

      const placeholderOpt = option({
        value: '',
        text: 'Selecione uma opção',
      })
      selectElement.appendChild(placeholderOpt);

      Object.values(field.values).forEach((optionValue) => {
        const optionElement = option({
          value: optionValue,
          text: optionValue,
          name: field.name,
          required: field.required,
        });
        selectElement.add(optionElement);

      });


      const labelElement = label({
        text: field.name,
        htmlFor: toHtmlFor(field.name),
      });
      if(field.required) {
        wrapElement.classList.add('required');
      }
      wrapElement.appendChild(labelElement);
      wrapElement.appendChild(selectElement);
      form.appendChild(wrapElement);
    }

    if (field.type === 'big_text') {
      const wrapElement = div({ className: 'form-group' });
      const textareaElement = textarea({
        placeholder: field.name,
        required: field.required,
        name: field.name,
      });

      const labelElement = label({
        text: field.name,
        htmlFor: toHtmlFor(field.name),
      });
      wrapElement.appendChild(labelElement);
      wrapElement.appendChild(textareaElement);
      form.appendChild(wrapElement);
    }
  });

  const supportedTypes = ['text', 'phone', 'email'];

  const wrapElement = div({ className: 'form-group', id: 'user_fields' });

  const userFieldsHeader = document.createElement('h3');
  userFieldsHeader.textContent = 'Complete com seus dados pessoais';
  wrapElement.appendChild(userFieldsHeader);

  user_fields.forEach(({
    name, placeholder, required, type
  }) => {
    const inputElement = input({
      name,
      placeholder,
      required,
      type: supportedTypes.includes(type) && type,
    });

    const labelElement = label({ text: name, htmlFor: toHtmlFor(name) });
    if(required) {
      wrapElement.classList.add('required');
    }
    wrapElement.appendChild(labelElement);
    wrapElement.appendChild(inputElement);
    form.appendChild(wrapElement);
  });

  function getPercentage(total, current) {
    return ((current) / total) * 100;
  }



  const groups = document.getElementsByClassName('form-group');
  const currentStep = document.getElementById('current_step');
  groups[0].classList.add('active');

  let counter = 0;
  const total = groups.length - 1;


  currentStep.style.width = `${getPercentage(total, counter)}%`;




  const nextFormStep = document.getElementById('next');

  nextFormStep.addEventListener('click', (e) => {
    e.preventDefault();

    const isRequiredStep = groups[counter]
    const isRequiredChild = isRequiredStep.children
    let hasError = false
    Array.from(isRequiredChild).forEach((child) => {
      if(child.value === '' && child.required){

        const isRequeridMessageEl = document.createElement('span');
        isRequeridMessageEl.classList.add('is-required-message');
        isRequeridMessageEl.innerText = 'este campo é requerido';

        child.after(isRequeridMessageEl)
        child.classList.add('is-required');

        setTimeout(() => {
          child.classList.remove('is-required');
          isRequiredStep.removeChild(isRequeridMessageEl);
        }, 5000);

        hasError = true;

      }
    })

    if(hasError) return false


    if (counter < total) {
      counter += 1;
      currentStep.style.width = `${getPercentage(total, counter)}%`;
    } else alert('Dados envido com sucesso!');

    Array.from(groups).forEach((g) => g.classList.remove('active'));
    groups[counter].classList.add('active');


  });


})();
