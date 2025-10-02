// Flowchart Interactive Script

let currentScale = 1;
let selectedNode = null;

// Node descriptions
const nodeDescriptions = {
    'app-start': {
        title: '앱 시작',
        description: '사용자가 앱을 실행하면 로그인 화면으로 이동합니다.',
        connections: ['로그인 화면']
    },
    'login': {
        title: '로그인 화면',
        description: '이메일과 비밀번호를 입력하여 로그인합니다. 회원가입, 계정 찾기로 이동할 수 있습니다.',
        connections: ['회원가입', '아이디/비밀번호 찾기', '메인 화면']
    },
    'signup': {
        title: '회원가입',
        description: '새 계정을 생성합니다. 이메일, 비밀번호, 닉네임을 입력합니다.',
        connections: ['로그인 화면']
    },
    'find-account': {
        title: '아이디/비밀번호 찾기',
        description: '이메일 인증을 통해 계정 정보를 복구합니다.',
        connections: ['로그인 화면']
    },
    'login-success': {
        title: '로그인 성공',
        description: '로그인에 성공하면 메인 화면으로 이동합니다.',
        connections: ['메인 화면']
    },
    'main-tabs': {
        title: '메인 화면 (탭바)',
        description: '4개의 탭으로 구성: 홈, 검색, 위시리스트, 프로필',
        connections: ['홈 탭', '검색 탭', '위시리스트 탭', '프로필 탭']
    },
    'home-tab': {
        title: '홈 탭',
        description: '읽고 있는 책과 다 읽은 책을 관리하는 메인 화면입니다.',
        connections: ['읽고 있는 책', '다 읽은 책']
    },
    'reading-books': {
        title: '읽고 있는 책',
        description: '현재 읽고 있는 책이 있는지 확인합니다.',
        connections: ['등록 버튼', '독서 기록 화면']
    },
    'no-reading': {
        title: '등록 버튼',
        description: '읽고 있는 책이 없을 때 표시되는 등록 버튼입니다.',
        connections: ['책 검색']
    },
    'reading-record': {
        title: '독서 기록 화면',
        description: '현재 페이지를 입력하고 메모를 작성할 수 있습니다.',
        connections: ['기록 유형']
    },
    'record-type': {
        title: '기록 유형',
        description: '현재 페이지가 마지막 페이지인지에 따라 다른 화면을 표시합니다.',
        connections: ['일반 기록', '완독 기록']
    },
    'normal-record': {
        title: '일반 기록 (진행 중)',
        description: '현재 페이지와 간단한 메모를 저장합니다.',
        connections: ['홈 탭']
    },
    'complete-record': {
        title: '완독 기록 (평점/감상)',
        description: '책을 다 읽었을 때 평점과 감상을 작성합니다.',
        connections: ['축하 메시지']
    },
    'congrats': {
        title: '축하 메시지',
        description: '완독 축하 애니메이션과 메시지를 표시합니다.',
        connections: ['홈 탭']
    },
    'finished-books': {
        title: '다 읽은 책',
        description: '완독한 책들을 미리보기로 표시합니다 (4-5권).',
        connections: ['다 읽은 책 리스트']
    },
    'finished-list': {
        title: '다 읽은 책 리스트',
        description: '모든 완독 책을 리스트 형태로 보여줍니다.',
        connections: ['독서 기록 상세']
    },
    'record-detail': {
        title: '독서 기록 상세',
        description: '해당 책에 대한 모든 기록을 시간순으로 표시합니다.',
        connections: ['기록 관리 액션']
    },
    'record-actions': {
        title: '기록 관리 액션',
        description: '기록 보기, 수정, 삭제, 다시 읽기, 공유 기능을 제공합니다.',
        connections: []
    },
    'search-tab': {
        title: '검색 탭',
        description: '책을 검색하고 등록하거나 위시리스트에 추가할 수 있습니다.',
        connections: ['검색 전 상태', '책 검색']
    },
    'before-search': {
        title: '검색 전 상태',
        description: '인기 책 목록과 추천 책 목록을 표시합니다.',
        connections: []
    },
    'book-search': {
        title: '책 검색',
        description: '텍스트 검색 또는 바코드 스캔으로 책을 찾습니다.',
        connections: ['검색 결과']
    },
    'search-result': {
        title: '검색 결과 리스트',
        description: '검색된 책들을 리스트 형태로 표시합니다.',
        connections: ['책 상세 정보']
    },
    'book-detail': {
        title: '책 상세 정보',
        description: '책의 상세 정보(제목, 저자, 출판사, 줄거리 등)를 표시합니다.',
        connections: ['책 액션']
    },
    'book-actions': {
        title: '책 액션',
        description: '읽는 책으로 등록하거나 위시리스트에 추가할 수 있습니다.',
        connections: ['홈 탭', '위시리스트 탭']
    },
    'wishlist-tab': {
        title: '위시리스트 탭',
        description: '읽고 싶은 책들을 관리합니다.',
        connections: ['위시리스트 상태']
    },
    'wishlist-state': {
        title: '위시리스트 상태',
        description: '위시리스트에 책이 있는지 확인합니다.',
        connections: ['빈 상태', '책 선택']
    },
    'empty-wishlist': {
        title: '빈 상태',
        description: '위시리스트가 비어있을 때 검색 탭으로 안내합니다.',
        connections: ['검색 탭']
    },
    'wishlist-book': {
        title: '책 선택',
        description: '위시리스트의 책을 선택하여 상세 정보를 봅니다.',
        connections: ['책 상세 정보']
    },
    'profile-tab': {
        title: '프로필 탭',
        description: '사용자 정보와 독서 통계, 설정을 관리합니다.',
        connections: ['사용자 정보', '독서 통계', '설정', '로그아웃']
    },
    'profile-info': {
        title: '사용자 정보',
        description: '프로필 사진, 이름, 이메일을 편집할 수 있습니다.',
        connections: []
    },
    'reading-stats': {
        title: '독서 통계',
        description: '올해 읽은 책, 총 독서량, 평균 독서 시간을 표시합니다.',
        connections: []
    },
    'settings': {
        title: '설정',
        description: '알림 설정, 테마 설정(다크/라이트), 계정 관리 기능을 제공합니다.',
        connections: []
    },
    'logout': {
        title: '로그아웃',
        description: '현재 계정에서 로그아웃하고 로그인 화면으로 돌아갑니다.',
        connections: ['로그인 화면']
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeNodes();
    initializeControls();
    drawConnectors();
});

// Initialize node interactions
function initializeNodes() {
    const nodes = document.querySelectorAll('.node');
    nodes.forEach(node => {
        node.addEventListener('click', () => {
            selectNode(node);
        });

        node.addEventListener('mouseenter', () => {
            highlightConnections(node, true);
        });

        node.addEventListener('mouseleave', () => {
            highlightConnections(node, false);
        });
    });
}

// Select node
function selectNode(node) {
    // Remove previous selection
    if (selectedNode) {
        selectedNode.classList.remove('active');
    }

    // Add new selection
    node.classList.add('active');
    selectedNode = node;

    // Show info
    const nodeId = node.dataset.id;
    const info = nodeDescriptions[nodeId];

    if (info) {
        const infoPanel = document.getElementById('nodeInfo');
        infoPanel.innerHTML = `
            <h4 style="font-size: 16px; font-weight: 600; margin-bottom: 8px;">${info.title}</h4>
            <p style="margin-bottom: 12px; color: var(--text-secondary);">${info.description}</p>
            ${info.connections.length > 0 ? `
                <div style="margin-top: 12px;">
                    <strong style="font-size: 13px;">연결된 화면:</strong>
                    <ul style="margin-top: 8px; padding-left: 20px; color: var(--text-secondary);">
                        ${info.connections.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        `;
    }

    // Scroll into view
    node.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Highlight connections
function highlightConnections(node, highlight) {
    const nodeId = node.dataset.id;
    const connectors = document.querySelectorAll(`.connector[data-from="${nodeId}"], .connector[data-to="${nodeId}"]`);

    connectors.forEach(connector => {
        if (highlight) {
            connector.classList.add('active');
        } else {
            connector.classList.remove('active');
        }
    });
}

// Initialize controls
function initializeControls() {
    const resetBtn = document.getElementById('resetBtn');
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    const flowchart = document.getElementById('flowchart');

    resetBtn.addEventListener('click', () => {
        currentScale = 1;
        flowchart.style.transform = `scale(${currentScale})`;
        if (selectedNode) {
            selectedNode.classList.remove('active');
            selectedNode = null;
        }
        document.getElementById('nodeInfo').innerHTML = '노드를 클릭하여 상세 정보를 확인하세요.';
    });

    zoomInBtn.addEventListener('click', () => {
        currentScale = Math.min(currentScale + 0.1, 2);
        flowchart.style.transform = `scale(${currentScale})`;
    });

    zoomOutBtn.addEventListener('click', () => {
        currentScale = Math.max(currentScale - 0.1, 0.5);
        flowchart.style.transform = `scale(${currentScale})`;
    });
}

// Draw connectors between nodes
function drawConnectors() {
    const connectors = document.querySelectorAll('.connector');

    connectors.forEach(connector => {
        const fromId = connector.dataset.from;
        const toId = connector.dataset.to;

        const fromNode = document.querySelector(`[data-id="${fromId}"]`);
        const toNode = document.querySelector(`[data-id="${toId}"]`);

        if (fromNode && toNode) {
            const fromRect = fromNode.getBoundingClientRect();
            const toRect = toNode.getBoundingClientRect();
            const flowchartRect = document.getElementById('flowchart').getBoundingClientRect();

            const fromX = fromRect.left + fromRect.width / 2 - flowchartRect.left;
            const fromY = fromRect.bottom - flowchartRect.top;
            const toX = toRect.left + toRect.width / 2 - flowchartRect.left;
            const toY = toRect.top - flowchartRect.top;

            const height = Math.abs(toY - fromY);
            const angle = Math.atan2(toX - fromX, toY - fromY) * 180 / Math.PI;

            connector.style.height = `${height}px`;
            connector.style.left = `${fromX}px`;
            connector.style.top = `${fromY}px`;
            connector.style.transform = `rotate(${angle}deg)`;
        }
    });
}

// Redraw connectors on window resize
window.addEventListener('resize', () => {
    drawConnectors();
});
