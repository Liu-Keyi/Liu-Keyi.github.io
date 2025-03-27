// 更新版权年份
document.getElementById('year').textContent = new Date().getFullYear();

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 滚动动画
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .education-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// 初始化元素样式
window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .education-item');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // 延迟执行以确保过渡效果可见
    setTimeout(() => {
        animateOnScroll();
    }, 100);
});

window.addEventListener('scroll', animateOnScroll);