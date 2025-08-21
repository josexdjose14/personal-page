import type { ProjectData } from "./definitions";

export const projectList: ProjectData[] = [
    {
        id: 5,
        image: "images/project_05.PNG",
        name: "EMOSYNC",
        description: "Final project to fulfill the bootcamp. It is presented as a platform providing psychological services, where psychologists provide their services to clients through virtual appointments.",
        github: "https://github.com/MAKAIABootcamp/emosync-project-front-5",
        deploy: "https://emosync-d2f42.web.app/"
    },
    {
        id: 6,
        image: "images/project_06.png",
        name: "practice_projectShortUrl",
        description: "A SSR traditional (Express + Handlebars) webpage shortener. You can create an account, confirm and recover your account by email, and have a CRUD for URL. Testing how pages were made before frameworks like Vite and React, where the entire page was rendered from the backend/server.",
        github: "https://github.com/josexdjose14/practice_projectShortUrl",
        deploy: "https://practice-projectshorturl.onrender.com/"
    },
    {
        id: 7,
        image: "images/project_07.png",
        name: "notepad-frontend",
        description: "Notepad webpage, includes a login, register, recover and homepage, and a CRUD for the notes.",
        github: "https://github.com/josexdjose14/practice-notepad-frontend",
        deploy: "https://practice-notepad-frontend.vercel.app/"
    },
    {
        id: 8,
        image: "images/project_08.png",
        name: "bia-test",
        description: "BIA technical challenge, This is a web application created in Next that consumes the API https://restcountries.com/#rest-countries to display and filter countries.",
        github: "https://github.com/josexdjose14/bia-test",
        deploy: "https://bia-test.vercel.app/"
    },
]