// Web Mockup Interactive Script

document.addEventListener('DOMContentLoaded', () => {
    initializeViewToggle();
    initializeBookInteractions();
});

// View Toggle (Desktop / Tablet)
function initializeViewToggle() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const browserFrame = document.getElementById('browserFrame');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;

            // Update active button
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update browser frame
            if (view === 'tablet') {
                browserFrame.classList.add('tablet');
            } else {
                browserFrame.classList.remove('tablet');
            }
        });
    });
}

// Book Interactions
function initializeBookInteractions() {
    // Navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Section links
    const sectionLinks = document.querySelectorAll('.section-link');
    sectionLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('전체 리스트 페이지로 이동합니다.');
        });
    });
}

// Show Book Detail
function showBookDetail(bookTitle) {
    const modal = createBookDetailModal(bookTitle);
    document.body.appendChild(modal);

    // Close modal on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    // Close modal on ESC key
    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', handleEsc);
        }
    };
    document.addEventListener('keydown', handleEsc);
}

// Create Book Detail Modal
function createBookDetailModal(bookTitle) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.2s;
    `;

    const content = document.createElement('div');
    content.style.cssText = `
        background: white;
        border-radius: 16px;
        padding: 32px;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.3s;
    `;

    const bookData = getBookData(bookTitle);

    content.innerHTML = `
        <style>
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            .modal-book-cover {
                width: 150px;
                height: 225px;
                margin: 0 auto 24px;
                border-radius: 12px;
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
                overflow: hidden;
            }
            .modal-book-title {
                font-size: 24px;
                font-weight: 700;
                text-align: center;
                margin-bottom: 8px;
            }
            .modal-book-author {
                font-size: 16px;
                color: #8E8E93;
                text-align: center;
                margin-bottom: 24px;
            }
            .modal-book-info {
                display: flex;
                flex-direction: column;
                gap: 12px;
                margin-bottom: 24px;
            }
            .info-row {
                display: flex;
                justify-content: space-between;
                padding: 12px;
                background: #F5F5F0;
                border-radius: 8px;
            }
            .info-label {
                font-weight: 600;
                color: #2C2C2C;
            }
            .info-value {
                color: #8E8E93;
            }
            .modal-actions {
                display: flex;
                gap: 12px;
            }
            .modal-btn {
                flex: 1;
                padding: 12px;
                border: none;
                border-radius: 8px;
                font-size: 15px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s;
            }
            .btn-primary {
                background: #D4A574;
                color: white;
            }
            .btn-primary:hover {
                background: #8B7355;
            }
            .btn-secondary {
                background: #F5F5F0;
                color: #2C2C2C;
            }
            .btn-secondary:hover {
                background: #E5E5E0;
            }
        </style>

        <div class="modal-book-cover">
            <div class="book-placeholder" style="${bookData.style}; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 60px;">
                ${bookData.icon}
            </div>
        </div>

        <h2 class="modal-book-title">${bookTitle}</h2>
        <p class="modal-book-author">${bookData.author}</p>

        <div class="modal-book-info">
            <div class="info-row">
                <span class="info-label">출판사</span>
                <span class="info-value">${bookData.publisher}</span>
            </div>
            <div class="info-row">
                <span class="info-label">페이지</span>
                <span class="info-value">${bookData.pages}쪽</span>
            </div>
            <div class="info-row">
                <span class="info-label">진행률</span>
                <span class="info-value">${bookData.progress}</span>
            </div>
        </div>

        <div class="modal-actions">
            <button class="modal-btn btn-secondary" onclick="this.closest('[style*=fixed]').remove()">
                닫기
            </button>
            <button class="modal-btn btn-primary" onclick="alert('독서 기록 화면으로 이동합니다.'); this.closest('[style*=fixed]').remove()">
                기록하기
            </button>
        </div>
    `;

    modal.appendChild(content);
    return modal;
}

// Get Book Data
function getBookData(bookTitle) {
    const books = {
        '클린 코드': {
            author: '로버트 C. 마틴',
            publisher: '인사이트',
            pages: 584,
            progress: '42%',
            icon: '📖',
            style: 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);'
        },
        '리팩터링': {
            author: '마틴 파울러',
            publisher: '한빛미디어',
            pages: 448,
            progress: '68%',
            icon: '💡',
            style: 'background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);'
        },
        '오브젝트': {
            author: '조영호',
            publisher: '위키북스',
            pages: 744,
            progress: '15%',
            icon: '🎯',
            style: 'background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);'
        }
    };

    return books[bookTitle] || {
        author: '알 수 없음',
        publisher: '알 수 없음',
        pages: 0,
        progress: '0%',
        icon: '📚',
        style: 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);'
    };
}
