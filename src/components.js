"use strict";

const Components = (() => {
  const projectContainer = (project) => {
    const container = document.createElement("div");
    container.setAttribute("class", "aside__project");
    container.setAttribute(
      "id",
      project.name.replaceAll(" ", "").toLowerCase()
    );
    return container;
  };

  const projectTitle = (project) => {
    const title = document.createElement("h2");
    title.classList.add("project__title");
    title.innerText = project.name;    
    return title;
  };

  const projectDescription = (project) => {
    const desc = document.createElement("p");
    desc.classList.add("project__description");
    desc.classList.add("project__description--hidden");
    desc.innerHTML = `<ul> 
                        <li>Duedate: ${project.dueDate}</li>
                        <li>Tasks: ${project.tasks.length}</li>
                      </ul>`;
    return desc;
  };

  return {
    projectContainer,
    projectDescription,
    projectTitle
  };
})();

export default Components;