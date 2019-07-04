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
      <br>
      <p>This is a week long assignment that had the following requirements:</p>
      <ul>
        <br>
        <li><b>Login Page</b></li>
        <ul>
          <li>Error for wrong input</li>
          <li>Save authentication token in local storage</li>
        </ul>
        <br>
        <li><b>Home page</b></li>
        <ul>
          <li>Display cards from: https://api.magicthegathering.io/v1/cards</li>
          <li>Search function</li>
        </ul>
        <br>
        <li><b>Card Specific Page</b></li>
        <ul>
          <li>Open this page when selecting specific card</li>
          <li>More information about card</li>
        </ul>
        <br>
        <li><b>About Page</b></li>
        <ul>
          <li>Create a dropdown</li>
        </ul>
        <br>
        <li><b>Contact Page</b></li>
        <ul>
          <li>Input validation for contact form</li>
        </ul>
      </ul>
      <br>
      <p>We were free to use whatever framework we prefered. And i did choose to do this assignment with angular.</p><br>
      <p>Logging into the website you need login:</p><br>
      <p>Username: abc</p>
      <p>Password: 123</p>
      `,
      github: 'https://github.com/Hortasha/Noroff-FinalCA',
      host: 'http://magic.eidesite.com'
    },

    {
      id: 1,
      name: "course",
      title: "Course Project",
      tools: ['React', 'Strapi'],
      img: './../../../assets/course.jpg',
      text: `
      <br>
      <p>
        This was a group project together with classmates where we had a real life client.
        <br><br>
        The goal was to give the client some input on how they could make the user interface more intuitive on their own website.
        <br><br>
        We did choose to limit the work to the course section of their website, and came with a suggestion on how they could improve.
        <br><br>
        Our main focus for this project was:
      </p>
      <br>
      <ul>
        <li>Learning the react framework</li>
        <li>Limiting the amount of information for the user</li>
        <li>Creating a admin point of view</li>
        <li>Intuitive user interface so the user understand how to navigate</li>
      </ul>
      `,
      github: 'https://github.com/Hortasha/react-course',
      host: 'http://course.eidesite.com'
    },

    {
      id: 2,
      name: "thrones",
      title: "Thrones Project",
      tools: ['Socket.io', 'Vanilla JS'],
      img: './../../../assets/thrones.jpg',
      text: `
      <br>
      <p>
        This was a semester project over a month where we were to create a board game based on Game of Thrones.
        <br><br>
        Using socket.io was optinal for this assignment, and this was before learning node or any frameworks.
        <br><br>
        I did choose to create a server - client communication with socket.io supporting up to ten clients at one time. For this project i only wrote vanilla javascript, html and sass using the socket.io framework.
        <br><br>
        This is also the first project i did where i try to get familiar with node, and there are quite a few bad practices on this assignment, but that said it was a project i learned a lot from.
      </p>
      `,
      github: 'https://github.com/Hortasha/SemesterOppgaveHost2018',
      host: 'http://thrones.eidesite.com'
    },

    {
      id: 3,
      name: "holidaze",
      title: "Holidaze Project",
      tools: ['express', 'angular', 'node', 'mongodb', 'bcrypt', 'jsonwebtoken'],
      img: './../../../assets/holidaze.jpg',
      text: `
      <br>
      <p>
        This was a exam project where you should be able to provide hotel options for consumers or rent hotels.
        <br><br>
        On this website you can register a user or hotel that will have access to different functinality on the website. Data is stored in mongodb and passwords are being encrypted.
        <br><br>
        This is the first project where i have created user registration, login and used endpoints to communicate with server.
      </p>
      `,
      github: 'https://github.com/Hortasha/Holidaze',
      host: 'http://holidaze.eidesite.com/'
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
