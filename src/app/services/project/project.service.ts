import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: any = [
    {
      id: 0,
      name: "magic",
      title: "Magic Project",
      tools: ['Angular'],
      img: './../../../assets/magic.jpg',
      text: `
      This is a one week long angular project.
      Bla bla bla
      `,
      github: 'https://github.com/Hortasha/Noroff-FinalCA',
      host: '//magic.eidesite.com'
    },

    {
      id: 1,
      name: "course",
      title: "Course Project",
      tools: ['React', 'Strapi'],
      img: './../../../assets/course.jpg',
      text: `
      This is a three week long react project.
      Bla bla bla
      `,
      github: 'https://github.com/Hortasha/react-course',
      host: '//course.eidesite.com'
    },

    {
      id: 2,
      name: "thrones",
      title: "Thrones Project",
      tools: ['Socket.io', 'Vanilla JS'],
      img: './../../../assets/thrones.jpg',
      text: `
      This is a four week long socket.io project.
      Bla bla bla
      `,
      github: 'https://github.com/Hortasha/SemesterOppgaveHost2018',
      host: '//thrones.eidesite.com'
    }
  ]

  constructor() { }

  getProject(id) {
    return this.projects[id];
  }

  getProjects() {
    return this.projects;
  }
}
