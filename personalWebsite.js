function FadeIn() {
    const targets = document.querySelectorAll("*");
    console.log(targets);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.visibility = 'visible';
                entry.target.style.opacity = '1';
                entry.target.style.transition = 'opacity 1s ease';
            } else {
                entry.target.style.visibility = 'hidden'; 
                entry.target.style.opacity = '0';
            }
        })
    })

    targets.forEach(target => {
        observer.observe(target);
    })
}

FadeIn();