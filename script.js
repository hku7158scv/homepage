// 문서가 로드되면 실행
document.addEventListener('DOMContentLoaded', function() {
    // 스크롤 애니메이션
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + window.innerHeight * 0.8;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
                section.classList.add('active');
            }
        });
    });
    
    // 생애 단계별 애니메이션
    const storyHeadings = document.querySelectorAll('.about-text h3');
    const storyParagraphs = document.querySelectorAll('.about-text p');
    
    function animateOnScroll() {
        const scrollPosition = window.scrollY + window.innerHeight * 0.9;
        
        storyHeadings.forEach((heading, index) => {
            if (scrollPosition > heading.offsetTop + heading.offsetParent.offsetTop) {
                setTimeout(() => {
                    heading.style.opacity = "1";
                    heading.style.transform = "translateY(0)";
                    
                    if (storyParagraphs[index]) {
                        setTimeout(() => {
                            storyParagraphs[index].style.opacity = "1";
                            storyParagraphs[index].style.transform = "translateY(0)";
                        }, 200);
                    }
                }, index * 100);
            }
        });
    }
    
    // 초기 스타일 설정
    storyHeadings.forEach(heading => {
        heading.style.opacity = "0";
        heading.style.transform = "translateY(20px)";
        heading.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });
    
    storyParagraphs.forEach(paragraph => {
        paragraph.style.opacity = "0";
        paragraph.style.transform = "translateY(20px)";
        paragraph.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });
    
    // 스크롤 이벤트에 애니메이션 함수 추가
    window.addEventListener('scroll', animateOnScroll);
    // 페이지 로드 시 한 번 실행하여 초기 화면에 보이는 요소들 애니메이션 적용
    setTimeout(animateOnScroll, 500);
    
    // '이야기 보기' 버튼 클릭 시 여정 섹션으로 스크롤
    const ctaButton = document.querySelector('.cta-button');
    const aboutSection = document.querySelector('#about');
    
    if (ctaButton && aboutSection) {
        ctaButton.addEventListener('click', function() {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // 폼 제출 처리
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // 폼 데이터 가져오기
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // 간단한 유효성 검사
            if (!name || !email || !message) {
                alert('모든 필드를 작성해주세요.');
                return;
            }
            
            // 폼이 실제로 제출되었을 때 표시할 메시지
            alert('메시지가 성공적으로 전송되었습니다! 감사합니다.');
            
            // 폼 초기화
            contactForm.reset();
        });
    }
    
    // 현재 연도 업데이트 (푸터)
    const yearSpan = document.createElement('span');
    yearSpan.textContent = new Date().getFullYear();
    const copyright = document.querySelector('footer p');
    if (copyright) {
        copyright.innerHTML = `&copy; ${yearSpan.textContent} 나의 인생 이야기. All rights reserved.`;
    }
}); 