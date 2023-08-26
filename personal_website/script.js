document.addEventListener("DOMContentLoaded", function () {
    const skills = [
        { name: "HTML", level: 80 },
        { name: "CSS", level: 60 },
        { name: "JavaScript", level: 50 },
        { name: "C++", level: 80 },
        { name: "Java", level: 30 },
        { name: "SQL", level: 85 }
    ];

    const skillsList = document.querySelector(".skills-list");

    skills.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.innerHTML = `
            <span class="skill-name">${skill.name}</span>
            <div class="skill-bar">
                <div class="skill-level" style="width: ${skill.level}%;"></div>
            </div>
        `;
        skillsList.appendChild(skillItem);
    });
});
// Add this script after your other scripts
// const navLinks = document.querySelectorAll('nav a');


