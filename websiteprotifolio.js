document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.skills-box, .language-hobbies-box');

    function revealOnScroll() {
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (boxTop < windowHeight - 50) {
                box.classList.add('visible');
            }
        });
    }

// Scroll reveal effect for projects
window.addEventListener('scroll', function() {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        const projectPosition = project.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (projectPosition < screenPosition) {
            project.classList.add('visible');
        }
    });
});
<script>
    function toggleCodeBox() {
        const codeBox = document.getElementById('code-box');
        // Toggle visibility
        if (codeBox.style.display === 'none' || codeBox.style.display === '') {
            codeBox.style.display = 'block'; // Show the box
        } else {
            codeBox.style.display = 'none'; // Hide the box
        }
    }
</script>












