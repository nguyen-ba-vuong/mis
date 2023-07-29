// scroll event
window.onscroll = function() {cathscrollheader()};

function cathscrollheader() {
    if (document.documentElement.scrollTop > 50) {
        document.getElementById("header").className = "scroll-menu";
    } else {
        document.getElementById("header").className = "";
    }
};


// Slide tabs

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();



// text animation fade_in_top 
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('scroll');
        observer.unobserve(entry.target);
        }
    });
});

const textElements = document.querySelectorAll('.text-animation-top');
textElements.forEach(textElement => {
    observer.observe(textElement);
});

// text animation fade_in_right
const op_left = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('scroll');
        op_left.unobserve(entry.target);
        }
    });
});

const textLeft = document.querySelectorAll('.text-animation-left');
textLeft.forEach(textLeft => {
    op_left.observe(textLeft);
});

// text animation fade_in_right
const op_right = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('scroll');
        op_right.unobserve(entry.target);
        }
    });
});

const textRight = document.querySelectorAll('.text-animation-right');
textRight.forEach(textRight => {
    op_right.observe(textRight);
});



// text blur 
const op_blur = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('scroll');
        op_blur.unobserve(entry.target);
        }
    });
});

const textBlurs = document.querySelectorAll('.text-blur');
textBlurs.forEach(textBlur => {
    op_blur.observe(textBlur);
});

// section-scale 

const op_scale = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('scroll');
        op_scale.unobserve(entry.target);
        }
    });
});

const sectionScales = document.querySelectorAll('.section-scale');
sectionScales.forEach(sectionScale => {
    op_scale.observe(sectionScale);
});