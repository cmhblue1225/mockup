// ========================================
// Web Mockup - Complete Interactive System
// ========================================

// Global State
const state = {
    currentPage: 'library',
    readingBooks: [
        { id: 1, title: '클린 코드', author: '로버트 C. 마틴', progress: 42, icon: '📖', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
        { id: 2, title: '리팩터링', author: '마틴 파울러', progress: 68, icon: '💡', color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
        { id: 3, title: '오브젝트', author: '조영호', progress: 15, icon: '🎯', color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }
    ],
    nextBooks: [
        { id: 4, title: '실용주의 프로그래머', author: '앤드류 헌트', icon: '🚀', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
        { id: 5, title: '클린 아키텍처', author: '로버트 C. 마틴', icon: '⚡', color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)' },
        { id: 6, title: '디자인 패턴', author: 'GoF', icon: '🎨', color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
        { id: 7, title: '함께 자라기', author: '김창준', icon: '📚', color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)' },
        { id: 8, title: '1984', author: '조지 오웰', icon: '🔥', color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' },
        { id: 9, title: '모두의 딥러닝', author: '조태호', icon: '🎵', color: 'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)' }
    ],
    finishedBooks: [
        { id: 10, title: '이펙티브 자바', author: '조슈아 블로크', rating: 5, icon: '📚', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
        { id: 11, title: '헤드 퍼스트 디자인 패턴', author: '에릭 프리먼', rating: 5, icon: '💡', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
        { id: 12, title: '도메인 주도 설계', author: '에릭 에반스', rating: 4, icon: '🚀', color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
        { id: 13, title: '테스트 주도 개발', author: '켄트 벡', rating: 5, icon: '⚡', color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
        { id: 14, title: '클린 소프트웨어', author: '로버트 C. 마틴', rating: 4, icon: '🎯', color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)' },
        { id: 15, title: '피플웨어', author: '톰 드마르코', rating: 5, icon: '📖', color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' }
    ]
};

// ========================================
// Initialization
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    setupViewToggle();
    setupBrowserButtons();
    navigateTo('library');
}

// ========================================
// View Toggle (Desktop / Tablet)
// ========================================
function setupViewToggle() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const browserFrame = document.getElementById('browserFrame');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (view === 'tablet') {
                browserFrame.classList.add('tablet');
                showToast('태블릿 뷰로 전환되었습니다');
            } else {
                browserFrame.classList.remove('tablet');
                showToast('데스크톱 뷰로 전환되었습니다');
            }
        });
    });
}

// ========================================
// Browser Buttons
// ========================================
function setupBrowserButtons() {
    const redBtn = document.querySelector('.btn-red');
    const yellowBtn = document.querySelector('.btn-yellow');
    const greenBtn = document.querySelector('.btn-green');

    redBtn?.addEventListener('click', () => {
        showToast('창을 닫을 수 없습니다 (데모 모드)');
    });

    yellowBtn?.addEventListener('click', () => {
        const browserFrame = document.getElementById('browserFrame');
        browserFrame.classList.toggle('tablet');
        showToast('창 크기가 조정되었습니다');
    });

    greenBtn?.addEventListener('click', () => {
        const browserFrame = document.getElementById('browserFrame');
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            browserFrame.requestFullscreen?.();
        }
    });
}

// ========================================
// Page Navigation
// ========================================
function navigateTo(page, event) {
    if (event) {
        event.preventDefault();
    }

    // Show loading
    showLoading();

    // Update state
    state.currentPage = page;

    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === page) {
            item.classList.add('active');
        }
    });

    // Update URL text
    const urlMap = {
        home: 'readowl.app/home',
        library: 'readowl.app/my-library',
        shop: 'readowl.app/shop',
        news: 'readowl.app/news'
    };
    document.querySelector('.url-text').textContent = urlMap[page] || 'readowl.app';

    // Load page content
    setTimeout(() => {
        loadPageContent(page);
        hideLoading();
    }, 300);
}

// ========================================
// Page Content Loaders
// ========================================
function loadPageContent(page) {
    const mainContent = document.getElementById('mainContent');

    switch (page) {
        case 'home':
            mainContent.innerHTML = getHomePageHTML();
            break;
        case 'library':
            mainContent.innerHTML = getLibraryPageHTML();
            break;
        case 'shop':
            mainContent.innerHTML = getShopPageHTML();
            break;
        case 'news':
            mainContent.innerHTML = getNewsPageHTML();
            break;
        default:
            mainContent.innerHTML = getLibraryPageHTML();
    }

    mainContent.classList.add('page-enter');
    setTimeout(() => mainContent.classList.remove('page-enter'), 500);
}

// ========================================
// Page HTML Generators
// ========================================

// Home Page
function getHomePageHTML() {
    const avgProgress = Math.round(state.readingBooks.reduce((sum, book) => sum + book.progress, 0) / state.readingBooks.length);

    return `
        <style>
            .content-header { padding: 24px 32px; border-bottom: 1px solid var(--border-color); }
            .page-title { font-size: 32px; font-weight: 700; margin-bottom: 8px; }
            .page-subtitle { font-size: 16px; color: var(--text-secondary); }
            .content-body { padding: 32px; }
            .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 40px; }
            .stat-card { background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); padding: 24px; border-radius: 16px; color: white; }
            .stat-value { font-size: 36px; font-weight: 700; margin-bottom: 8px; }
            .stat-label { font-size: 14px; opacity: 0.9; }
            .activity-feed { display: flex; flex-direction: column; gap: 16px; }
            .activity-item { background: var(--surface); padding: 20px; border-radius: 12px; box-shadow: var(--shadow); display: flex; align-items: center; gap: 16px; }
            .activity-icon { font-size: 32px; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; background: var(--background); border-radius: 12px; }
            .activity-content { flex: 1; }
            .activity-title { font-weight: 600; margin-bottom: 4px; }
            .activity-time { font-size: 13px; color: var(--text-secondary); }
        </style>

        <div class="content-header">
            <h1 class="page-title">환영합니다! 👋</h1>
            <p class="page-subtitle">오늘도 좋은 책과 함께 하세요</p>
        </div>

        <div class="content-body">
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-value">${state.readingBooks.length}</div>
                    <div class="stat-label">읽고 있는 책</div>
                </div>
                <div class="stat-card" style="background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));">
                    <div class="stat-value">${state.finishedBooks.length}</div>
                    <div class="stat-label">다 읽은 책</div>
                </div>
                <div class="stat-card" style="background: linear-gradient(135deg, #34C759, #30D158);">
                    <div class="stat-value">${avgProgress}%</div>
                    <div class="stat-label">평균 진행률</div>
                </div>
            </div>

            <h2 style="font-size: 22px; font-weight: 700; margin-bottom: 20px;">최근 활동</h2>
            <div class="activity-feed">
                <div class="activity-item">
                    <div class="activity-icon">📖</div>
                    <div class="activity-content">
                        <div class="activity-title">클린 코드를 읽고 있습니다</div>
                        <div class="activity-time">2시간 전</div>
                    </div>
                </div>
                <div class="activity-item">
                    <div class="activity-icon">⭐</div>
                    <div class="activity-content">
                        <div class="activity-title">이펙티브 자바에 5점을 주었습니다</div>
                        <div class="activity-time">1일 전</div>
                    </div>
                </div>
                <div class="activity-item">
                    <div class="activity-icon">🎉</div>
                    <div class="activity-content">
                        <div class="activity-title">리팩터링을 완독했습니다</div>
                        <div class="activity-time">3일 전</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Library Page
function getLibraryPageHTML() {
    const readingBooksHTML = state.readingBooks.map(book => `
        <div class="book-card" onclick="openBookDetail(${book.id})">
            <div class="book-cover">
                <div class="book-placeholder" style="background: ${book.color};">${book.icon}</div>
            </div>
            <div class="book-info">
                <div class="book-title">${book.title}</div>
                <div class="book-progress-mini">${book.progress}%</div>
            </div>
        </div>
    `).join('');

    const nextBooksHTML = state.nextBooks.map(book => `
        <div class="book-card" onclick="openBookDetail(${book.id})">
            <div class="book-cover">
                <div class="book-placeholder" style="background: ${book.color};">${book.icon}</div>
            </div>
            <div class="book-info">
                <div class="book-title">${book.title}</div>
            </div>
        </div>
    `).join('');

    const finishedBooksHTML = state.finishedBooks.map(book => `
        <div class="book-card" onclick="openBookDetail(${book.id})">
            <div class="book-cover">
                <div class="book-placeholder" style="background: ${book.color};">${book.icon}</div>
            </div>
            <div class="book-info">
                <div class="book-title">${book.title}</div>
                <div class="book-rating">${'⭐'.repeat(book.rating)}</div>
            </div>
        </div>
    `).join('');

    return `
        <style>
            .content-header { display: flex; justify-content: space-between; align-items: center; padding: 24px 32px; border-bottom: 1px solid var(--border-color); }
            .tabs { display: flex; gap: 8px; }
            .tab { padding: 8px 16px; background: transparent; border: none; border-radius: 8px; font-size: 15px; font-weight: 500; color: var(--text-secondary); cursor: pointer; transition: all 0.2s; }
            .tab:hover { background: var(--background); }
            .tab.active { background: var(--primary-color); color: white; }
            .search-bar { display: flex; align-items: center; gap: 8px; padding: 8px 16px; background: var(--background); border-radius: 8px; width: 300px; }
            .search-bar input { flex: 1; border: none; background: transparent; font-size: 14px; outline: none; }
            .content-body { padding: 32px; }
            .book-section { margin-bottom: 48px; }
            .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
            .section-title { font-size: 22px; font-weight: 700; }
            .section-link { font-size: 14px; color: var(--primary-color); text-decoration: none; font-weight: 500; cursor: pointer; }
            .section-link:hover { color: var(--secondary-color); }
            .book-shelf { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 24px; }
            .book-card { cursor: pointer; transition: all 0.3s; }
            .book-card:hover { transform: translateY(-4px); }
            .book-cover { width: 100%; aspect-ratio: 2/3; border-radius: 8px; overflow: hidden; box-shadow: var(--shadow); margin-bottom: 12px; transition: all 0.3s; }
            .book-card:hover .book-cover { box-shadow: var(--shadow-lg); }
            .book-info { text-align: center; }
            .book-title { font-size: 14px; font-weight: 600; margin-bottom: 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
            .book-progress-mini { font-size: 12px; color: var(--primary-color); font-weight: 500; }
            .book-rating { font-size: 12px; }
        </style>

        <div class="content-header">
            <div class="tabs">
                <button class="tab active">책장</button>
                <button class="tab" onclick="showToast('준비 중입니다')">모든 책</button>
            </div>
            <div class="search-bar">
                <span>🔍</span>
                <input type="text" placeholder="내 서재에서 검색" onkeypress="if(event.key==='Enter') searchBooks(this.value)">
            </div>
        </div>

        <div class="content-body">
            <section class="book-section">
                <h2 class="section-title">읽고 있는 책</h2>
                <div class="book-shelf">
                    ${readingBooksHTML}
                </div>
            </section>

            <section class="book-section">
                <div class="section-header">
                    <h2 class="section-title">다음 읽을 책</h2>
                    <a class="section-link" onclick="showToast('전체 목록을 표시합니다')">전체 보기 →</a>
                </div>
                <div class="book-shelf">
                    ${nextBooksHTML}
                </div>
            </section>

            <section class="book-section">
                <div class="section-header">
                    <h2 class="section-title">다 읽은 책</h2>
                    <a class="section-link" onclick="showToast('전체 목록을 표시합니다')">전체 보기 →</a>
                </div>
                <div class="book-shelf">
                    ${finishedBooksHTML}
                </div>
            </section>
        </div>
    `;
}

// Shop Page
function getShopPageHTML() {
    const books = [
        { title: '클린 코드', author: '로버트 C. 마틴', price: '32,000원', icon: '📖', color: '#667eea' },
        { title: '리팩터링', author: '마틴 파울러', price: '36,000원', icon: '💡', color: '#4facfe' },
        { title: '오브젝트', author: '조영호', price: '38,000원', icon: '🎯', color: '#fa709a' },
        { title: '클린 아키텍처', author: '로버트 C. 마틴', price: '29,000원', icon: '⚡', color: '#30cfd0' },
        { title: '실용주의 프로그래머', author: '앤드류 헌트', price: '31,000원', icon: '🚀', color: '#f093fb' },
        { title: '디자인 패턴', author: 'GoF', price: '42,000원', icon: '🎨', color: '#a8edea' },
        { title: '함께 자라기', author: '김창준', price: '16,000원', icon: '📚', color: '#ff9a9e' },
        { title: '테스트 주도 개발', author: '켄트 벡', price: '25,000원', icon: '✅', color: '#ffecd2' }
    ];

    const shopItemsHTML = books.map(book => `
        <div class="shop-item" onclick="showToast('${book.title}을(를) 장바구니에 추가했습니다')">
            <div class="shop-cover" style="background: linear-gradient(135deg, ${book.color} 0%, ${book.color}aa 100%); display: flex; align-items: center; justify-content: center; font-size: 48px;">
                ${book.icon}
            </div>
            <div class="shop-title">${book.title}</div>
            <div class="shop-author">${book.author}</div>
            <div class="shop-price">${book.price}</div>
        </div>
    `).join('');

    return `
        <style>
            .content-header { padding: 24px 32px; border-bottom: 1px solid var(--border-color); }
            .page-title { font-size: 32px; font-weight: 700; margin-bottom: 8px; }
            .page-subtitle { font-size: 16px; color: var(--text-secondary); }
            .content-body { padding: 32px; }
            .category-tabs { display: flex; gap: 12px; margin-bottom: 32px; overflow-x: auto; }
            .category-tab { padding: 12px 24px; background: var(--surface); border: 2px solid var(--border-color); border-radius: 24px; font-size: 14px; font-weight: 500; cursor: pointer; white-space: nowrap; transition: all 0.3s; }
            .category-tab:hover { border-color: var(--primary-color); color: var(--primary-color); }
            .category-tab.active { background: var(--primary-color); color: white; border-color: var(--primary-color); }
            .shop-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 24px; }
            .shop-item { background: var(--surface); border-radius: 12px; padding: 16px; box-shadow: var(--shadow); cursor: pointer; transition: all 0.3s; }
            .shop-item:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
            .shop-cover { width: 100%; aspect-ratio: 2/3; border-radius: 8px; margin-bottom: 12px; overflow: hidden; }
            .shop-title { font-size: 15px; font-weight: 600; margin-bottom: 4px; }
            .shop-author { font-size: 13px; color: var(--text-secondary); margin-bottom: 8px; }
            .shop-price { font-size: 16px; font-weight: 700; color: var(--primary-color); }
        </style>

        <div class="content-header">
            <h1 class="page-title">서점 🛒</h1>
            <p class="page-subtitle">새로운 책을 발견해보세요</p>
        </div>

        <div class="content-body">
            <div class="category-tabs">
                <div class="category-tab active" onclick="showToast('베스트셀러 카테고리')">📈 베스트셀러</div>
                <div class="category-tab" onclick="showToast('신간 카테고리')">🆕 신간</div>
                <div class="category-tab" onclick="showToast('프로그래밍 카테고리')">💻 프로그래밍</div>
                <div class="category-tab" onclick="showToast('자기계발 카테고리')">📚 자기계발</div>
                <div class="category-tab" onclick="showToast('소설 카테고리')">📖 소설</div>
            </div>

            <div class="shop-grid">
                ${shopItemsHTML}
            </div>
        </div>
    `;
}

// News Page
function getNewsPageHTML() {
    return `
        <style>
            .content-header { padding: 24px 32px; border-bottom: 1px solid var(--border-color); }
            .page-title { font-size: 32px; font-weight: 700; margin-bottom: 8px; }
            .page-subtitle { font-size: 16px; color: var(--text-secondary); }
            .content-body { padding: 32px; }
            .news-list { display: flex; flex-direction: column; gap: 20px; }
            .news-item { background: var(--surface); border-radius: 12px; padding: 24px; box-shadow: var(--shadow); cursor: pointer; transition: all 0.3s; }
            .news-item:hover { transform: translateY(-2px); box-shadow: var(--shadow-lg); }
            .news-category { display: inline-block; padding: 4px 12px; background: var(--primary-color); color: white; border-radius: 12px; font-size: 12px; font-weight: 600; margin-bottom: 12px; }
            .news-title { font-size: 20px; font-weight: 700; margin-bottom: 8px; }
            .news-excerpt { font-size: 15px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 12px; }
            .news-meta { font-size: 13px; color: var(--text-secondary); display: flex; gap: 16px; }
        </style>

        <div class="content-header">
            <h1 class="page-title">뉴스 📰</h1>
            <p class="page-subtitle">최신 도서 정보와 독서 관련 뉴스</p>
        </div>

        <div class="content-body">
            <div class="news-list">
                <div class="news-item" onclick="showToast('뉴스 상세 페이지로 이동합니다')">
                    <div class="news-category">신간</div>
                    <div class="news-title">2025년 가장 기대되는 프로그래밍 도서 TOP 10</div>
                    <div class="news-excerpt">올해 출간 예정인 프로그래밍 관련 도서 중 개발자들이 가장 기대하는 책들을 소개합니다. 클린 코드의 후속작부터 최신 프레임워크 가이드까지...</div>
                    <div class="news-meta">
                        <span>📅 2025.10.01</span>
                        <span>👁 1,234 조회</span>
                    </div>
                </div>

                <div class="news-item" onclick="showToast('뉴스 상세 페이지로 이동합니다')">
                    <div class="news-category" style="background: #34C759;">독서 팁</div>
                    <div class="news-title">효과적인 독서 습관 만들기: 개발자를 위한 5가지 팁</div>
                    <div class="news-excerpt">바쁜 개발자들을 위한 효율적인 독서 방법을 소개합니다. 출퇴근 시간 활용하기, 목표 설정하기, 메모 습관 들이기...</div>
                    <div class="news-meta">
                        <span>📅 2025.09.28</span>
                        <span>👁 2,567 조회</span>
                    </div>
                </div>

                <div class="news-item" onclick="showToast('뉴스 상세 페이지로 이동합니다')">
                    <div class="news-category" style="background: #FF9500;">이벤트</div>
                    <div class="news-title">독서의 달 특별 이벤트: 책 리뷰 작성하고 선물 받기</div>
                    <div class="news-excerpt">10월 한 달간 진행되는 독서의 달 특별 이벤트입니다. 여러분이 읽은 책에 대한 리뷰를 작성하시면 추첨을 통해 베스트셀러 도서를 선물로...</div>
                    <div class="news-meta">
                        <span>📅 2025.09.25</span>
                        <span>👁 3,891 조회</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ========================================
// Utility Functions
// ========================================

// Loading Overlay
function showLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.classList.add('active');
    }
}

function hideLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
}

// Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// Open Book Detail Modal
function openBookDetail(bookId) {
    // Find book from all arrays
    const allBooks = [...state.readingBooks, ...state.nextBooks, ...state.finishedBooks];
    const book = allBooks.find(b => b.id === bookId);

    if (!book) {
        showToast('책 정보를 찾을 수 없습니다');
        return;
    }

    const isReading = state.readingBooks.some(b => b.id === bookId);
    const isFinished = state.finishedBooks.some(b => b.id === bookId);

    const progressHTML = isReading ? `
        <div style="margin-bottom: 20px;">
            <div style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">독서 진행률</div>
            <div class="progress-bar" style="height: 10px; background: var(--border-color); border-radius: 5px; overflow: hidden;">
                <div class="progress-fill" style="width: ${book.progress}%; background: var(--primary-color); height: 100%;"></div>
            </div>
            <div style="text-align: right; font-size: 14px; color: var(--primary-color); font-weight: 600; margin-top: 8px;">
                ${book.progress}%
            </div>
        </div>
        <button onclick="openReadingModal('${book.title}')" style="width: 100%; padding: 14px; background: var(--primary-color); color: white; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer;">
            📖 계속 읽기
        </button>
    ` : '';

    const ratingHTML = isFinished ? `
        <div style="margin-bottom: 20px;">
            <div style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">내 평점</div>
            <div style="font-size: 28px;">${'⭐'.repeat(book.rating)}</div>
        </div>
        <button onclick="showToast('독서 기록을 표시합니다')" style="width: 100%; padding: 14px; background: var(--primary-color); color: white; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer;">
            📝 독서 기록 보기
        </button>
    ` : '';

    const startReadingHTML = !isReading && !isFinished ? `
        <button onclick="showToast('${book.title}을(를) 읽기 시작합니다'); closeModal();" style="width: 100%; padding: 14px; background: var(--primary-color); color: white; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer;">
            📖 읽기 시작하기
        </button>
    ` : '';

    let modalHTML = `
        <div class="modal-overlay" onclick="closeModal(event)">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h2>${book.title}</h2>
                    <button class="modal-close" onclick="closeModal()">✕</button>
                </div>
                <div class="modal-body">
                    <div class="modal-book-cover">
                        <div style="width: 200px; height: 300px; background: ${book.color}; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 80px; box-shadow: var(--shadow-lg);">
                            ${book.icon}
                        </div>
                    </div>
                    <div class="modal-book-info">
                        <div style="font-size: 16px; color: var(--text-secondary); margin-bottom: 16px;">
                            저자: ${book.author || '저자 정보 없음'}
                        </div>
                        ${progressHTML}
                        ${ratingHTML}
                        ${startReadingHTML}
                    </div>
                </div>
            </div>
        </div>

        <style>
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.3s;
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .modal-content {
                background: var(--surface);
                border-radius: 16px;
                padding: 32px;
                max-width: 600px;
                width: 90%;
                max-height: 90vh;
                overflow-y: auto;
                animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: var(--shadow-xl);
            }
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(40px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 24px;
            }
            .modal-header h2 {
                font-size: 24px;
                font-weight: 700;
            }
            .modal-close {
                background: var(--border-color);
                border: none;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                font-size: 18px;
                cursor: pointer;
                transition: all 0.2s;
            }
            .modal-close:hover {
                background: var(--text-secondary);
                color: white;
            }
            .modal-body {
                display: flex;
                gap: 32px;
            }
            .modal-book-cover {
                flex-shrink: 0;
            }
            .modal-book-info {
                flex: 1;
            }
        </style>
    `;

    // Add modal to body
    const modalContainer = document.createElement('div');
    modalContainer.id = 'bookModal';
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);
}

// Close Modal
function closeModal(event) {
    const modal = document.getElementById('bookModal');
    if (modal) {
        modal.remove();
    }
}

// Open Reading Modal
function openReadingModal(bookTitle) {
    closeModal();
    showToast(`${bookTitle} 읽기 화면으로 이동합니다`);

    // Simulate reading view
    setTimeout(() => {
        showToast('실제 앱에서는 여기서 책을 읽을 수 있습니다 📚');
    }, 1500);
}

// Search Books
function searchBooks(query) {
    if (!query || query.trim() === '') {
        showToast('검색어를 입력해주세요');
        return;
    }

    showToast(`"${query}" 검색 결과를 표시합니다`);

    // In a real app, this would filter the books
    // For demo, just show a message
    setTimeout(() => {
        showToast('검색 기능은 실제 앱에서 제공됩니다');
    }, 1500);
}
