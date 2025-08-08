// 추가적인 JavaScript 기능들
document.addEventListener('DOMContentLoaded', function() {
    // 페이지 로드 애니메이션
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// 키보드 네비게이션 지원
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const nextBtn = document.getElementById('nextBtn');
        if (nextBtn && !nextBtn.disabled) {
            nextBtn.click();
        }
    }
    
    if (e.key >= '1' && e.key <= '2') {
        const options = document.querySelectorAll('.option');
        const optionIndex = parseInt(e.key) - 1;
        if (options[optionIndex]) {
            options[optionIndex].click();
        }
    }
});