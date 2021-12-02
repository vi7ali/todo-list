"use strict";

const Components = (() => {
  const projectContainer = (project) => {
    const container = document.createElement("div");
    container.classList.add("aside__project");
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
    desc.innerHTML = `<ul class="project__list"> 
                        <li class="list__item">
                          <span>Duedate:</span> 
                          <span>${project.dueDate}</span>
                        </li>
                        <li class="list__item">
                          <span>Tasks: </span>
                          <span>${project.tasks.length}</span>
                        </li>
                        <li class="list__item">
                          <button class="project__button">
                          <svg
                          xmlns:dc="http://purl.org/dc/elements/1.1/"
                          xmlns:cc="http://creativecommons.org/ns#"
                          xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                          xmlns:svg="http://www.w3.org/2000/svg"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                          xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                          version="1.1"
                          id="Capa_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 591.6 591.6"
                          style="enable-background:new 0 0 591.6 591.6;"
                          xml:space="preserve"
                          sodipodi:docname="plus-sign-svgrepo-com.svg"
                          inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)"><metadata
                          id="metadata3884"><rdf:RDF><cc:Work
                              rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
                                rdf:resource="http://purl.org/dc/dcmitype/StillImage" /></cc:Work></rdf:RDF></metadata><defs
                          id="defs3882" /><sodipodi:namedview
                          pagecolor="#ffffff"
                          bordercolor="#666666"
                          borderopacity="1"
                          objecttolerance="10"
                          gridtolerance="10"
                          guidetolerance="10"
                          inkscape:pageopacity="0"
                          inkscape:pageshadow="2"
                          inkscape:window-width="1920"
                          inkscape:window-height="1016"
                          id="namedview3880"
                          showgrid="false"
                          inkscape:zoom="1.4164977"
                          inkscape:cx="164.84319"
                          inkscape:cy="295.79999"
                          inkscape:window-x="0"
                          inkscape:window-y="27"
                          inkscape:window-maximized="1"
                          inkscape:current-layer="Capa_1" />
                        <g
                            id="g3847"
                            transform="rotate(45,295.8,295.8)">
                          <g
                            id="g3845">
                            <path fill="#D11A2A"
                            d="M 581.4,244.8 H 346.8 V 10.2 C 346.8,4.488 342.312,0 336.6,0 H 255 c -5.712,0 -10.2,4.488 -10.2,10.2 V 244.8 H 10.2 C 4.488,244.8 0,249.288 0,255 v 81.6 c 0,5.712 4.488,10.2 10.2,10.2 h 234.6 v 234.6 c 0,5.712 4.488,10.2 10.2,10.2 h 81.6 c 5.712,0 10.2,-4.488 10.2,-10.2 V 346.8 h 234.6 c 5.712,0 10.2,-4.488 10.2,-10.2 V 255 c 0,-5.712 -4.488,-10.2 -10.2,-10.2 z m -10.2,81.6 H 336.6 c -5.712,0 -10.2,4.488 -10.2,10.2 V 571.2 H 265.2 V 336.6 c 0,-5.712 -4.488,-10.2 -10.2,-10.2 H 20.4 V 265.2 H 255 c 5.712,0 10.2,-4.488 10.2,-10.2 V 20.4 h 61.2 V 255 c 0,5.712 4.488,10.2 10.2,10.2 h 234.6 z"
                            id="path3841"
                            inkscape:connector-curvature="0" />
                            <path fill="#D11A2A"
                            d="m 303.96,33.66 h -20.4 c -2.856,0 -5.1,2.244 -5.1,5.1 v 204 c 0,2.856 2.244,5.1 5.1,5.1 2.856,0 5.1,-2.244 5.1,-5.1 V 43.86 h 15.3 c 2.856,0 5.1,-2.244 5.1,-5.1 0,-2.856 -2.244,-5.1 -5.1,-5.1 z"
                            id="path3843"
                            inkscape:connector-curvature="0" />
                          </g>
                        </g>
                        <g
                            id="g3849"
                            transform="rotate(45,295.8,295.8)">
                        </g>
                        <g
                            id="g3851"
                            transform="rotate(45,295.8,295.8)">
                        </g>
                        <g
                            id="g3853"
                            transform="rotate(45,295.8,295.8)">
                        </g>
                        <g
                            id="g3855"
                            transform="rotate(45,295.8,295.8)">
                        </g>
                        <g
                            id="g3857"
                            transform="rotate(45,295.8,295.8)">
                        </g>
                        <g
                            id="g3859"
                            transform="rotate(45,295.8,295.8)">
                        </g>
                        <g
                            id="g3861"
                            transform="rotate(45,295.8,295.8)">
                        </g>
                        <g
                            id="g3863"
                            transform="rotate(45,295.8,295.8)">
                        </g>
                        <g
                            id="g3865"
                            transform="rotate(45,295.8,295.8)">
                        </g>
                        <g
                            id="g3867"
                            transform="rotate(45,295.8,295.8)">
                        </g>
                        <g
                            id="g3869"
                            transform="rotate(45,295.8,295.8)">
                        </g>
                        <g
                            id="g3871"
                            transform="rotate(45,295.8,295.8)">
                        </g>
                        <g
                            id="g3873"
                            transform="rotate(45,295.8,295.8)">
                        </g>
                        <g
                            id="g3875"
                            transform="rotate(45,295.8,295.8)">
                        </g>
                        <g
                            id="g3877"
                            transform="rotate(45,295.8,295.8)">
                        </g>
                       </svg>
                      </button>
                      <button class="project__button">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                          viewBox="0 0 568.599 568.599" style="enable-background:new 0 0 568.599 568.599;" xml:space="preserve">
                            <path fill="#458B00" d="M565.692,147.211L507.96,89.479c-4.08-4.08-10.404-4.08-14.484,0L241.128,342.031L75.276,176.179
                              c-4.08-4.08-10.404-4.08-14.484,0L3.06,233.911c-4.08,4.08-4.08,10.404,0,14.484l230.724,230.724
                              c1.836,1.836,4.488,3.06,7.14,3.06s5.304-1.02,7.14-3.06l317.628-317.424C569.568,157.615,569.568,151.291,565.692,147.211z
                              M241.128,457.495L24.684,241.051l43.248-43.248l165.852,165.852c4.08,4.08,10.404,4.08,14.484,0L500.82,111.103l43.248,43.248
                              L241.128,457.495z"/>
                            <path fill="#458B00" d="M497.148,133.543L352.92,277.771c-2.04,2.04-2.04,5.304,0,7.14c1.02,1.02,2.244,1.428,3.672,1.428
                              c1.428,0,2.652-0.408,3.672-1.428L500.82,144.355l10.812,10.812c2.04,2.04,5.304,2.04,7.14,0c2.04-2.04,2.04-5.304,0-7.14
                              l-14.484-14.484c-1.02-1.02-2.244-1.428-3.672-1.428C499.188,132.115,498.168,132.523,497.148,133.543z"/>
                        </svg>
                      </button>
                      </li>
                      </ul>`;
    return desc;
  };

  return {
    projectContainer,
    projectDescription,
    projectTitle,
  };
})();

export default Components;
