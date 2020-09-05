// A (more) readable version of form.js.

allInputsXXX = document.querySelectorAll("[jsname='o6bZLc'] input");
urlXXX = window.location.toString();
if (!window.location.search) {
  urlXXX+='?';
} 
for (elXXX of allInputsXXX) {
  if (elXXX.getAttribute('name') && elXXX.getAttribute('value')) {
    urlXXX += `${elXXX.getAttribute('name')}=${elXXX.getAttribute('value')}&`;
  }
}
window.open(urlXXX)
