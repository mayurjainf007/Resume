function toggleSubskills(skillItem) {
    let subskillsContainer = skillItem.nextElementSibling;
    let subskills = skillItem.getAttribute("data-subskills").split(",");

    // Close other open skill sections (optional)
    document.querySelectorAll(".subskills").forEach(container => {
        if (container !== subskillsContainer) {
            container.innerHTML = "";
            container.style.display = "none";
        }
    });

    // Toggle current subskills
    if (subskillsContainer.innerHTML.trim() === "") {
        subskillsContainer.style.display = "flex";
        subskillsContainer.innerHTML = subskills.map(subskill => 
            `<div class="subskill">${subskill.trim()}</div>`
        ).join("");

        adjustSubskillAlignment(subskillsContainer);
    } else {
        subskillsContainer.innerHTML = "";
        subskillsContainer.style.display = "none";
    }
}

// Adjust subskills alignment dynamically
function adjustSubskillAlignment(container) {
    let containerWidth = container.offsetWidth;
    let totalWidth = 0;
    let subskills = container.querySelectorAll(".subskill");

    subskills.forEach(skill => {
        totalWidth += skill.offsetWidth + 10;
        if (totalWidth > containerWidth) {
            skill.style.display = "block"; // Moves to new line when width exceeded
        } else {
            skill.style.display = "inline-block";
        }
    });
}
