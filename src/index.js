import './style.css';
import printMe from './print.js';

async function component() {
  const { default: _ } = await import('lodash');

  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

component().then((component) => {
  document.body.appendChild(component);
});
