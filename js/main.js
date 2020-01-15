"use strict";

const list = document.querySelector('.projects-list');

fetch('https://api.github.com/users/DariuszOkonski/repos?sort=updated&direction=desc')
  .then(resp => resp.json())
  .then(resp => {

    const repos = resp;

    for (const repo of repos) {
      const {
        description,
        html_url,
        name,
        homepage
      } = repo;

      list.innerHTML += `
        <li class="project">
        <div class="project__container">
          <i class="fa fa-github project__logo" aria-hidden="true"></i>
          <h3 class="project__title">${name}</h3>
          <p class="project__description">${description ? description : 'No description'}</p>
        </div>
        <div class="project__footer">
          ${homepage ?

            `<a class="project__link project__link--demo" target="_blank" rel="nofollow noreferrer" href="${homepage}" title="Demo: ${name}.">
            <i class="fa fa-desktop project__font-awesome" aria-hidden="true"></i>
            Demo
          </a>` : ``
          }
          <a class="project__link project__link--code" target="_blank" rel="nofollow noreferrer" href="${html_url}" title="Source code: ${name}.">
            <i class="fa fa-code-fork project__font-awesome" aria-hidden="true"></i>
            Github
          </a>
        </div>
      </li>
      `;
    }

  })
  .catch(err => {
    console.log(err);
  });