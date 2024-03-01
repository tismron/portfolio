const animate = (sections) => {
    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.parentElement.classList.add("show");
        } else {
            entry.target.parentElement.classList.remove("show");
        }
        });
    });

    sections.forEach((section) => {
        observer.observe(section);
    })
}

export default animate