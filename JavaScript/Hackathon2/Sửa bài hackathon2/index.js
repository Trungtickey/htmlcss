let heroInfo = {
    name: "Trung Tickey",
    job: "freelance react developer",
    imgUrl: "https://picsum.photos/200/300",
}
let personalDetail = {
    name: "Trung Tickey",
    dob: "28 march 2004",
    spokenLanguages:["English"],
    nationality: "Vietnam",
    interest: ["football", "calisthenic", "Journey"],
    techs:[
        {
            id: 1,
            imgUrl: "https://i.postimg.cc/cHdfNH2Z/android.png",
            techName: "Android",
            exp: 2,
        },
        {
            id: 2,
            imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
            techName: "Angular",
            exp: 1,
        },
        {
            id: 3,
            imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
            techName: "Bootstrap",
            exp: 3,
        },
        {
            id: 4,
            imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
            techName: "Vue",
            exp: 2,
        },
        {
            id: 5,
            imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
            techName: "React",
            exp: 2 / 3,
        },
        {
            id: 6,
            imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
            techName: "Mongodb",
            exp: 0.25,
        },
        {
            id: 7,
            imgUrl: "https://i.postimg.cc/RZzFYYjx/laravel.png",
            techName: "Laravel",
            exp: 1,
        },
        {
            id: 8,
            imgUrl: "https://i.postimg.cc/X7N3ybSJ/nodejs-icon.png",
            techName: "Node.js",
            exp: 5 / 6,
        },
    ],
};

let projects = [
    {
        id: 1,
        imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
        projectName: "Auto Drive Project",
        link: "https://abcd-example.com",
        tags: ["Angular", "React", "Jquery"],
    },
    {
        id: 2,
        imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
        projectName: "Ecommerce Project",
        link: "https://abcd-example.com",
        tags: ["Bootstrap", "CSS", "Javascript"],
    },
    {
        id: 3,
        imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
        projectName: "Chat Application",
        link: "https://abcd-example.com",
        tags: ["MongoDB", "Javascript"],
    },
    {
        id: 4,
        imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
        projectName: "Social Media Platform",
        link: "https://abcd-example.com",
        tags: ["Vue", "Javascript"],
    },
    {
        id: 5,
        imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
        projectName: "Image Sharing Platform",
        link: "https://abcd-example.com",
        tags: ["React", "Javascript"],
    },
];
let project = localStorage.setItem("storage", JSON.stringify(projects));

document.addEventListener("DOMContentLoaded", function (){
    var projectTable = document.getElementById("projectTable");
    let projects = localStorage.getItem("storage") ? JSON.parse(localStorage.getItem("storage")) : [];

    function displayProjects() {
        projectTable.innerHTML = `
            <th>Project Name</th>
            <th>Image URL</th>
            <th>Link</th>
            <th>Tags</th>
            <th>Action</th>
        `

        projects.forEach(p => {
            let row = projectTable.insertRow(-1);
            row.insertCell(0).innerHTML = p.projectName;
            row.insertCell(1).innerHTML = p.imgUrl;
            row.insertCell(2).innerHTML = p.link;
            row.insertCell(3).innerHTML = p.tags.join(", ");
            let actionCell = row.insertCell(4);

            let deleteButton = document.createElement("button")
            deleteButton.innerText = "Delete"
            deleteButton.addEventListener("click", function () {
                deleteProject(p.id)
            })

            let updateButton = document.createElement("button")
            updateButton.innerText = "Update"
            updateButton.addEventListener("click", function () {
                updateProject(p.id)
            })
            actionCell.appendChild(deleteButton);
            actionCell.appendChild(updateButton);
        })
    }
    function deleteProject(id) {
        projects = projects.filter(p => p.id !== id)
        localStorage.setItem("storage", JSON.stringify(projects))
        displayProjects()
    }

    function updateProject(id) {
        let projectToUpdate = projects.find(p => p.id === id)
        if(projectToUpdate){
            projectToUpdate.projectName = prompt("Enter new project name")
            projectToUpdate.imgUrl = prompt("Enter new image Url")
            projectToUpdate.link = prompt("Enter new link")
            projectToUpdate.tags = prompt("Enter new tags").split(",")
            localStorage.setItem("storage", JSON.stringify(projects))
            displayProjects()
        } else {
            console.error("Project not found with ID: ", id)
        }
    }

    document.getElementById("newProject").addEventListener("click", function (e) {
        e.preventDefault();
        let projectName = document.getElementById("project_name").value;
        let imgUrl = document.getElementById("img_url").value;
        let link = document.getElementById("link").value;
        let tags = document.getElementById("tag").value.split(",")

        var newProject = {
            id: projects.length + 1,
            projectName: projectName,
            imgUrl: imgUrl,
            link: link,
            tags: tags
        }
        projects.push(newProject)

        localStorage.setItem("storage", JSON.stringify(projects))
        displayProjects()
    })
    displayProjects()

})