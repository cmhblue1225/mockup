// iOS Mockup Interactive Script

const screens = {
    login: {
        title: '로그인',
        info: '이메일과 비밀번호로 로그인합니다. 회원가입과 계정 찾기로 이동할 수 있습니다.',
        hasTabBar: false,
        html: `
            <div class="screen-content no-tabs" style="display: flex; flex-direction: column; justify-content: center; padding: 40px 24px;">
                <div class="status-bar">
                    <span class="time">9:41</span>
                    <span class="icons">📶 📡 🔋</span>
                </div>

                <div style="text-align: center; margin-bottom: 60px;">
                    <div style="font-size: 80px; margin-bottom: 20px;">📚</div>
                    <h1 style="font-size: 32px; font-weight: 700; margin-bottom: 8px;">독서 관리</h1>
                    <p style="color: var(--text-secondary); font-size: 17px;">책과 함께하는 즐거운 여정</p>
                </div>

                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <input type="email" class="input-field" placeholder="이메일" value="user@example.com">
                    <input type="password" class="input-field" placeholder="비밀번호" value="••••••••">
                    <button class="btn btn-primary" onclick="changeScreen('home')" style="width: 100%;">로그인</button>

                    <div style="display: flex; justify-content: space-between; margin-top: 8px;">
                        <a onclick="changeScreen('signup')" style="color: var(--primary-color); font-size: 15px; cursor: pointer;">회원가입</a>
                        <a onclick="changeScreen('find-account')" style="color: var(--primary-color); font-size: 15px; cursor: pointer;">계정 찾기</a>
                    </div>
                </div>
            </div>
        `
    },

    signup: {
        title: '회원가입',
        info: '새 계정을 만듭니다. 이메일, 비밀번호, 닉네임을 입력합니다.',
        hasTabBar: false,
        html: `
            <div class="screen-content no-tabs">
                <div class="status-bar">
                    <span class="time">9:41</span>
                    <span class="icons">📶 📡 🔋</span>
                </div>
                <div class="nav-bar">
                    <a class="nav-back" onclick="changeScreen('login')">← 취소</a>
                    <span class="nav-title">회원가입</span>
                </div>

                <div style="padding: 24px; padding-top: 40px;">
                    <div style="display: flex; flex-direction: column; gap: 16px;">
                        <div>
                            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 15px;">이메일</label>
                            <input type="email" class="input-field" placeholder="email@example.com">
                        </div>

                        <div>
                            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 15px;">비밀번호</label>
                            <input type="password" class="input-field" placeholder="8자 이상 입력">
                        </div>

                        <div>
                            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 15px;">비밀번호 확인</label>
                            <input type="password" class="input-field" placeholder="비밀번호 재입력">
                        </div>

                        <div>
                            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 15px;">닉네임</label>
                            <input type="text" class="input-field" placeholder="닉네임">
                        </div>

                        <button class="btn btn-primary" onclick="changeScreen('login')" style="width: 100%; margin-top: 24px;">가입하기</button>
                    </div>
                </div>
            </div>
        `
    },

    'find-account': {
        title: '계정 찾기',
        info: '이메일 인증을 통해 계정을 복구합니다.',
        hasTabBar: false,
        html: `
            <div class="screen-content no-tabs">
                <div class="status-bar">
                    <span class="time">9:41</span>
                    <span class="icons">📶 📡 🔋</span>
                </div>
                <div class="nav-bar">
                    <a class="nav-back" onclick="changeScreen('login')">← 뒤로</a>
                    <span class="nav-title">계정 찾기</span>
                </div>

                <div style="padding: 24px; padding-top: 40px;">
                    <div style="background: var(--background); padding: 16px; border-radius: 12px; margin-bottom: 24px;">
                        <p style="font-size: 15px; line-height: 1.5; color: var(--text-secondary);">
                            가입 시 사용한 이메일 주소를 입력하세요. 비밀번호 재설정 링크를 보내드립니다.
                        </p>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 16px;">
                        <input type="email" class="input-field" placeholder="email@example.com">
                        <button class="btn btn-primary" onclick="alert('인증 이메일이 발송되었습니다.')" style="width: 100%;">인증 이메일 받기</button>
                    </div>
                </div>
            </div>
        `
    },

    home: {
        title: '홈',
        info: '읽고 있는 책과 다 읽은 책을 확인할 수 있습니다.',
        hasTabBar: true,
        activeTab: 'home',
        html: `
            <div class="screen-content">
                <div class="status-bar">
                    <span class="time">9:41</span>
                    <span class="icons">📶 📡 🔋</span>
                </div>

                <div style="padding: 24px 0;">
                    <h2 style="font-size: 34px; font-weight: 700; padding: 0 24px; margin-bottom: 24px;">독서 기록</h2>

                    <!-- 읽고 있는 책 -->
                    <div style="margin-bottom: 32px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0 24px; margin-bottom: 16px;">
                            <h3 class="section-header" style="padding: 0; margin: 0;">읽고 있는 책</h3>
                        </div>

                        <div style="padding: 0 24px;">
                            <div class="book-card" onclick="changeScreen('reading-record')">
                                <div class="book-cover">📖</div>
                                <div class="book-info">
                                    <div class="book-title">클린 코드</div>
                                    <div class="book-author">로버트 C. 마틴</div>
                                    <div class="book-progress">245 / 584 페이지 (42%)</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 다 읽은 책 -->
                    <div>
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0 24px; margin-bottom: 16px;">
                            <h3 class="section-header" style="padding: 0; margin: 0;">다 읽은 책</h3>
                            <a onclick="changeScreen('finished-list')" style="color: var(--primary-color); font-size: 15px; cursor: pointer;">전체 보기</a>
                        </div>

                        <div style="display: flex; gap: 12px; overflow-x: auto; padding: 0 24px; -webkit-overflow-scrolling: touch;">
                            <div onclick="changeScreen('record-detail')" style="flex-shrink: 0; width: 100px; cursor: pointer;">
                                <div style="width: 100px; height: 150px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; font-size: 40px;">📚</div>
                                <div style="font-size: 13px; font-weight: 600;">리팩터링</div>
                                <div style="font-size: 12px; color: var(--text-secondary);">마틴 파울러</div>
                            </div>
                            <div style="flex-shrink: 0; width: 100px;">
                                <div style="width: 100px; height: 150px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 8px; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; font-size: 40px;">💡</div>
                                <div style="font-size: 13px; font-weight: 600;">실용주의 프로그래머</div>
                                <div style="font-size: 12px; color: var(--text-secondary);">앤드류 헌트</div>
                            </div>
                            <div style="flex-shrink: 0; width: 100px;">
                                <div style="width: 100px; height: 150px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 8px; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; font-size: 40px;">🚀</div>
                                <div style="font-size: 13px; font-weight: 600;">함께 자라기</div>
                                <div style="font-size: 12px; color: var(--text-secondary);">김창준</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    'reading-record': {
        title: '독서 기록',
        info: '현재 읽고 있는 책의 진행 상황을 기록합니다.',
        hasTabBar: false,
        html: `
            <div class="screen-content no-tabs">
                <div class="status-bar">
                    <span class="time">9:41</span>
                    <span class="icons">📶 📡 🔋</span>
                </div>
                <div class="nav-bar">
                    <a class="nav-back" onclick="changeScreen('home')">← 뒤로</a>
                    <span class="nav-title">독서 기록</span>
                </div>

                <div style="padding: 24px;">
                    <div style="text-align: center; margin-bottom: 32px;">
                        <div style="width: 120px; height: 180px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; font-size: 60px;">📖</div>
                        <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">클린 코드</h2>
                        <p style="color: var(--text-secondary); font-size: 17px;">로버트 C. 마틴</p>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 20px;">
                        <div>
                            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 15px;">현재 페이지</label>
                            <input type="number" class="input-field" placeholder="245" value="245" id="currentPage" onchange="checkCompletion()">
                            <div style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;">전체 584 페이지</div>
                        </div>

                        <div>
                            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 15px;">메모</label>
                            <textarea class="input-field" rows="4" placeholder="오늘 읽은 내용에 대한 메모를 남겨보세요."></textarea>
                        </div>

                        <button class="btn btn-primary" onclick="changeScreen('home')" style="width: 100%;">기록 저장</button>
                        <button class="btn btn-success" onclick="changeScreen('complete-record')" style="width: 100%;">완독하기</button>
                    </div>
                </div>
            </div>
        `
    },

    'complete-record': {
        title: '완독 기록',
        info: '책을 다 읽은 후 평점과 감상을 남깁니다.',
        hasTabBar: false,
        html: `
            <div class="screen-content no-tabs">
                <div class="status-bar">
                    <span class="time">9:41</span>
                    <span class="icons">📶 📡 🔋</span>
                </div>
                <div class="nav-bar">
                    <a class="nav-back" onclick="changeScreen('reading-record')">← 뒤로</a>
                    <span class="nav-title">완독 기록</span>
                </div>

                <div style="padding: 24px;">
                    <div style="text-align: center; margin-bottom: 24px; padding: 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 16px; color: white;">
                        <div style="font-size: 48px; margin-bottom: 12px;">🎉</div>
                        <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">축하합니다!</h2>
                        <p style="font-size: 17px; opacity: 0.9;">클린 코드를 완독하셨습니다</p>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 20px;">
                        <div>
                            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 15px;">평점</label>
                            <div style="display: flex; gap: 8px; font-size: 32px; justify-content: center; padding: 16px 0;">
                                <span onclick="this.parentElement.dataset.rating=1" style="cursor: pointer;">⭐</span>
                                <span onclick="this.parentElement.dataset.rating=2" style="cursor: pointer;">⭐</span>
                                <span onclick="this.parentElement.dataset.rating=3" style="cursor: pointer;">⭐</span>
                                <span onclick="this.parentElement.dataset.rating=4" style="cursor: pointer;">⭐</span>
                                <span onclick="this.parentElement.dataset.rating=5" style="cursor: pointer;">⭐</span>
                            </div>
                        </div>

                        <div>
                            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 15px;">독서 시작일</label>
                            <input type="date" class="input-field" value="2025-09-15">
                        </div>

                        <div>
                            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 15px;">독서 완료일</label>
                            <input type="date" class="input-field" value="2025-10-02">
                        </div>

                        <div>
                            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 15px;">감상평</label>
                            <textarea class="input-field" rows="6" placeholder="이 책에 대한 감상을 자유롭게 작성해보세요."></textarea>
                        </div>

                        <button class="btn btn-success" onclick="alert('완독 기록이 저장되었습니다! 🎉'); changeScreen('home')" style="width: 100%;">완독 기록 저장</button>
                    </div>
                </div>
            </div>
        `
    },

    'finished-list': {
        title: '다 읽은 책',
        info: '완독한 모든 책을 리스트로 확인할 수 있습니다.',
        hasTabBar: true,
        activeTab: 'home',
        html: `
            <div class="screen-content">
                <div class="status-bar">
                    <span class="time">9:41</span>
                    <span class="icons">📶 📡 🔋</span>
                </div>
                <div class="nav-bar">
                    <a class="nav-back" onclick="changeScreen('home')">← 뒤로</a>
                    <span class="nav-title">다 읽은 책</span>
                </div>

                <div style="padding: 16px 24px;">
                    <div style="margin-bottom: 16px; padding: 16px; background: var(--background); border-radius: 12px; text-align: center;">
                        <div style="font-size: 32px; font-weight: 700; color: var(--primary-color); margin-bottom: 4px;">12권</div>
                        <div style="font-size: 15px; color: var(--text-secondary);">올해 완독한 책</div>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div class="book-card" onclick="changeScreen('record-detail')">
                            <div class="book-cover">📚</div>
                            <div class="book-info">
                                <div class="book-title">리팩터링</div>
                                <div class="book-author">마틴 파울러</div>
                                <div style="font-size: 13px; color: var(--warning-color); margin-top: 4px;">⭐⭐⭐⭐⭐ 5.0</div>
                                <div style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">2025.09.01 완독</div>
                            </div>
                        </div>

                        <div class="book-card">
                            <div class="book-cover" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">💡</div>
                            <div class="book-info">
                                <div class="book-title">실용주의 프로그래머</div>
                                <div class="book-author">앤드류 헌트</div>
                                <div style="font-size: 13px; color: var(--warning-color); margin-top: 4px;">⭐⭐⭐⭐⭐ 5.0</div>
                                <div style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">2025.08.15 완독</div>
                            </div>
                        </div>

                        <div class="book-card">
                            <div class="book-cover" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">🚀</div>
                            <div class="book-info">
                                <div class="book-title">함께 자라기</div>
                                <div class="book-author">김창준</div>
                                <div style="font-size: 13px; color: var(--warning-color); margin-top: 4px;">⭐⭐⭐⭐ 4.5</div>
                                <div style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">2025.07.28 완독</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    'record-detail': {
        title: '기록 상세',
        info: '책에 대한 모든 독서 기록과 감상을 확인할 수 있습니다.',
        hasTabBar: false,
        html: `
            <div class="screen-content no-tabs">
                <div class="status-bar">
                    <span class="time">9:41</span>
                    <span class="icons">📶 📡 🔋</span>
                </div>
                <div class="nav-bar">
                    <a class="nav-back" onclick="changeScreen('finished-list')">← 뒤로</a>
                    <span class="nav-title">독서 기록</span>
                </div>

                <div style="padding: 24px;">
                    <div style="text-align: center; margin-bottom: 24px;">
                        <div style="width: 120px; height: 180px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; font-size: 60px;">📚</div>
                        <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">리팩터링</h2>
                        <p style="color: var(--text-secondary); font-size: 17px; margin-bottom: 12px;">마틴 파울러</p>
                        <div style="font-size: 24px; margin-bottom: 8px;">⭐⭐⭐⭐⭐</div>
                        <div style="font-size: 13px; color: var(--text-secondary);">2025.08.01 - 2025.09.01 (31일)</div>
                    </div>

                    <div style="background: var(--background); padding: 16px; border-radius: 12px; margin-bottom: 24px;">
                        <h3 style="font-size: 15px; font-weight: 600; margin-bottom: 8px;">감상평</h3>
                        <p style="font-size: 14px; line-height: 1.6; color: var(--text-secondary);">
                            코드 품질 개선에 대한 실용적인 가이드. 작은 리팩터링부터 시작하여 점진적으로 코드를 개선하는 방법을 배웠습니다.
                        </p>
                    </div>

                    <h3 style="font-size: 17px; font-weight: 600; margin-bottom: 16px;">독서 기록</h3>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="padding: 16px; background: var(--surface); border-radius: 10px; border-left: 4px solid var(--primary-color);">
                            <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">2025.09.01 · 448페이지</div>
                            <p style="font-size: 14px; line-height: 1.5;">완독! 이 책의 핵심은 '코드는 읽기 쉬워야 한다'는 것.</p>
                        </div>

                        <div style="padding: 16px; background: var(--surface); border-radius: 10px; border-left: 4px solid var(--primary-color);">
                            <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">2025.08.25 · 320페이지</div>
                            <p style="font-size: 14px; line-height: 1.5;">테스트 주도 개발과 함께 리팩터링하기</p>
                        </div>

                        <div style="padding: 16px; background: var(--surface); border-radius: 10px; border-left: 4px solid var(--primary-color);">
                            <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">2025.08.15 · 180페이지</div>
                            <p style="font-size: 14px; line-height: 1.5;">리팩터링 카탈로그가 정말 유용하다</p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 12px; margin-top: 24px;">
                        <button class="btn btn-secondary" style="flex: 1;">다시 읽기</button>
                        <button class="btn btn-primary" style="flex: 1;">공유하기</button>
                    </div>
                </div>
            </div>
        `
    },

    search: {
        title: '검색',
        info: '텍스트 검색 또는 바코드 스캔으로 책을 찾을 수 있습니다.',
        hasTabBar: true,
        activeTab: 'search',
        html: `
            <div class="screen-content">
                <div class="status-bar">
                    <span class="time">9:41</span>
                    <span class="icons">📶 📡 🔋</span>
                </div>

                <div style="padding: 24px 0;">
                    <h2 style="font-size: 34px; font-weight: 700; padding: 0 24px; margin-bottom: 24px;">검색</h2>

                    <div style="padding: 0 24px; margin-bottom: 24px;">
                        <div style="display: flex; gap: 8px;">
                            <input type="text" class="input-field" placeholder="책 제목, 저자, ISBN 검색" style="flex: 1;" onfocus="changeScreen('search-result')">
                            <button class="btn btn-primary" style="padding: 14px 16px;">🔍</button>
                            <button class="btn btn-secondary" style="padding: 14px 16px;" onclick="alert('카메라로 바코드를 스캔하세요')">📷</button>
                        </div>
                    </div>

                    <div style="margin-bottom: 32px;">
                        <h3 class="section-header">인기 책</h3>
                        <div style="display: flex; gap: 12px; overflow-x: auto; padding: 0 24px; -webkit-overflow-scrolling: touch;">
                            <div onclick="changeScreen('book-detail')" style="flex-shrink: 0; width: 100px; cursor: pointer;">
                                <div style="width: 100px; height: 150px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; font-size: 40px;">📚</div>
                                <div style="font-size: 13px; font-weight: 600;">클린 코드</div>
                                <div style="font-size: 12px; color: var(--text-secondary);">로버트 C. 마틴</div>
                            </div>
                            <div style="flex-shrink: 0; width: 100px;">
                                <div style="width: 100px; height: 150px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 8px; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; font-size: 40px;">💡</div>
                                <div style="font-size: 13px; font-weight: 600;">이펙티브 타입스크립트</div>
                                <div style="font-size: 12px; color: var(--text-secondary);">댄 밴더캄</div>
                            </div>
                            <div style="flex-shrink: 0; width: 100px;">
                                <div style="width: 100px; height: 150px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 8px; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; font-size: 40px;">🚀</div>
                                <div style="font-size: 13px; font-weight: 600;">도메인 주도 설계</div>
                                <div style="font-size: 12px; color: var(--text-secondary);">에릭 에반스</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 class="section-header">추천 책</h3>
                        <div style="padding: 0 24px; display: flex; flex-direction: column; gap: 12px;">
                            <div class="book-card">
                                <div class="book-cover" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);">🎯</div>
                                <div class="book-info">
                                    <div class="book-title">오브젝트</div>
                                    <div class="book-author">조영호</div>
                                    <div style="font-size: 13px; color: var(--primary-color); margin-top: 4px;">객체지향 설계 원칙</div>
                                </div>
                            </div>

                            <div class="book-card">
                                <div class="book-cover" style="background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);">⚡</div>
                                <div class="book-info">
                                    <div class="book-title">클린 아키텍처</div>
                                    <div class="book-author">로버트 C. 마틴</div>
                                    <div style="font-size: 13px; color: var(--primary-color); margin-top: 4px;">소프트웨어 구조 설계</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    'search-result': {
        title: '검색 결과',
        info: '검색된 책들을 리스트로 표시합니다.',
        hasTabBar: true,
        activeTab: 'search',
        html: `
            <div class="screen-content">
                <div class="status-bar">
                    <span class="time">9:41</span>
                    <span class="icons">📶 📡 🔋</span>
                </div>
                <div class="nav-bar">
                    <a class="nav-back" onclick="changeScreen('search')">← 뒤로</a>
                    <span class="nav-title">검색 결과</span>
                </div>

                <div style="padding: 16px 24px;">
                    <div style="margin-bottom: 16px; color: var(--text-secondary); font-size: 15px;">
                        '클린 코드'에 대한 검색 결과 <strong style="color: var(--primary-color);">8건</strong>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div class="book-card" onclick="changeScreen('book-detail')">
                            <div class="book-cover">📚</div>
                            <div class="book-info">
                                <div class="book-title">클린 코드</div>
                                <div class="book-author">로버트 C. 마틴 · 인사이트</div>
                                <div style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;">2013년 · 584페이지</div>
                            </div>
                        </div>

                        <div class="book-card">
                            <div class="book-cover" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);">⚡</div>
                            <div class="book-info">
                                <div class="book-title">클린 아키텍처</div>
                                <div class="book-author">로버트 C. 마틴 · 인사이트</div>
                                <div style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;">2019년 · 432페이지</div>
                            </div>
                        </div>

                        <div class="book-card">
                            <div class="book-cover" style="background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);">🎯</div>
                            <div class="book-info">
                                <div class="book-title">클린 소프트웨어</div>
                                <div class="book-author">로버트 C. 마틴 · 제이펍</div>
                                <div style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;">2017년 · 762페이지</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    'book-detail': {
        title: '책 상세',
        info: '책의 상세 정보를 확인하고 등록하거나 위시리스트에 추가할 수 있습니다.',
        hasTabBar: false,
        html: `
            <div class="screen-content no-tabs">
                <div class="status-bar">
                    <span class="time">9:41</span>
                    <span class="icons">📶 📡 🔋</span>
                </div>
                <div class="nav-bar">
                    <a class="nav-back" onclick="changeScreen('search-result')">← 뒤로</a>
                    <span class="nav-title">책 상세</span>
                </div>

                <div style="padding: 24px;">
                    <div style="text-align: center; margin-bottom: 24px;">
                        <div style="width: 160px; height: 240px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; font-size: 80px; box-shadow: 0 8px 24px rgba(0,0,0,0.15);">📚</div>
                    </div>

                    <div style="margin-bottom: 24px;">
                        <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">클린 코드</h2>
                        <p style="color: var(--text-secondary); font-size: 17px; margin-bottom: 16px;">로버트 C. 마틴 지음</p>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                            <div style="background: var(--background); padding: 12px; border-radius: 8px; text-align: center;">
                                <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">출판사</div>
                                <div style="font-size: 15px; font-weight: 600;">인사이트</div>
                            </div>
                            <div style="background: var(--background); padding: 12px; border-radius: 8px; text-align: center;">
                                <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">출판일</div>
                                <div style="font-size: 15px; font-weight: 600;">2013.12</div>
                            </div>
                            <div style="background: var(--background); padding: 12px; border-radius: 8px; text-align: center;">
                                <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">페이지</div>
                                <div style="font-size: 15px; font-weight: 600;">584쪽</div>
                            </div>
                            <div style="background: var(--background); padding: 12px; border-radius: 8px; text-align: center;">
                                <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">ISBN</div>
                                <div style="font-size: 15px; font-weight: 600;">9788966260959</div>
                            </div>
                        </div>
                    </div>

                    <div style="margin-bottom: 24px;">
                        <h3 style="font-size: 17px; font-weight: 600; margin-bottom: 12px;">책 소개</h3>
                        <p style="font-size: 15px; line-height: 1.6; color: var(--text-secondary);">
                            소프트웨어 장인 정신의 대가 로버트 C. 마틴이 제시하는 클린 코드의 원칙과 기법.
                            좋은 코드와 나쁜 코드를 구분하는 방법부터 좋은 코드를 작성하는 방법,
                            나쁜 코드를 좋은 코드로 바꾸는 방법까지 소개합니다.
                        </p>
                    </div>

                    <div style="display: flex; gap: 12px;">
                        <button class="btn btn-secondary" onclick="alert('위시리스트에 추가되었습니다!'); changeScreen('wishlist')" style="flex: 1;">⭐ 위시리스트</button>
                        <button class="btn btn-primary" onclick="alert('읽는 책으로 등록되었습니다!'); changeScreen('home')" style="flex: 1;">📖 읽기 시작</button>
                    </div>
                </div>
            </div>
        `
    },

    wishlist: {
        title: '위시리스트',
        info: '읽고 싶은 책들을 관리합니다.',
        hasTabBar: true,
        activeTab: 'wishlist',
        html: `
            <div class="screen-content">
                <div class="status-bar">
                    <span class="time">9:41</span>
                    <span class="icons">📶 📡 🔋</span>
                </div>

                <div style="padding: 24px 0;">
                    <h2 style="font-size: 34px; font-weight: 700; padding: 0 24px; margin-bottom: 24px;">위시리스트</h2>

                    <div style="padding: 0 24px;">
                        <div style="margin-bottom: 16px; padding: 16px; background: var(--background); border-radius: 12px; text-align: center;">
                            <div style="font-size: 32px; font-weight: 700; color: var(--primary-color); margin-bottom: 4px;">5권</div>
                            <div style="font-size: 15px; color: var(--text-secondary);">읽고 싶은 책</div>
                        </div>

                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <div class="book-card" onclick="changeScreen('book-detail')">
                                <div class="book-cover">📚</div>
                                <div class="book-info">
                                    <div class="book-title">클린 코드</div>
                                    <div class="book-author">로버트 C. 마틴</div>
                                    <div style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;">인사이트 · 584페이지</div>
                                </div>
                            </div>

                            <div class="book-card">
                                <div class="book-cover" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);">🎯</div>
                                <div class="book-info">
                                    <div class="book-title">오브젝트</div>
                                    <div class="book-author">조영호</div>
                                    <div style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;">위키북스 · 744페이지</div>
                                </div>
                            </div>

                            <div class="book-card">
                                <div class="book-cover" style="background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);">⚡</div>
                                <div class="book-info">
                                    <div class="book-title">클린 아키텍처</div>
                                    <div class="book-author">로버트 C. 마틴</div>
                                    <div style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;">인사이트 · 432페이지</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    'wishlist-empty': {
        title: '위시리스트 (빈)',
        info: '위시리스트가 비어있을 때 표시되는 화면입니다.',
        hasTabBar: true,
        activeTab: 'wishlist',
        html: `
            <div class="screen-content">
                <div class="status-bar">
                    <span class="time">9:41</span>
                    <span class="icons">📶 📡 🔋</span>
                </div>

                <div style="padding: 24px 0; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 500px;">
                    <div style="font-size: 80px; margin-bottom: 24px; opacity: 0.3;">⭐</div>
                    <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 8px;">위시리스트가 비어있습니다</h3>
                    <p style="color: var(--text-secondary); font-size: 15px; margin-bottom: 32px; text-align: center; padding: 0 40px;">
                        읽고 싶은 책을 검색하여<br>위시리스트에 추가해보세요
                    </p>
                    <button class="btn btn-primary" onclick="changeScreen('search')">책 검색하기</button>
                </div>
            </div>
        `
    },

    profile: {
        title: '프로필',
        info: '사용자 정보, 독서 통계, 설정을 확인할 수 있습니다.',
        hasTabBar: true,
        activeTab: 'profile',
        html: `
            <div class="screen-content">
                <div class="status-bar">
                    <span class="time">9:41</span>
                    <span class="icons">📶 📡 🔋</span>
                </div>

                <div style="padding: 24px 0;">
                    <h2 style="font-size: 34px; font-weight: 700; padding: 0 24px; margin-bottom: 24px;">프로필</h2>

                    <!-- 사용자 정보 -->
                    <div style="padding: 0 24px; margin-bottom: 24px;">
                        <div style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); padding: 24px; border-radius: 16px; color: white; text-align: center;">
                            <div style="width: 80px; height: 80px; background: white; border-radius: 50%; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; font-size: 36px;">👤</div>
                            <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 4px;">독서러버</h3>
                            <p style="font-size: 15px; opacity: 0.9;">reader@example.com</p>
                        </div>
                    </div>

                    <!-- 독서 통계 -->
                    <div style="padding: 0 24px; margin-bottom: 24px;">
                        <h3 class="section-header">독서 통계</h3>
                        <div class="stats-grid">
                            <div class="stat-card">
                                <div class="stat-value">12</div>
                                <div class="stat-label">올해 읽은 책</div>
                            </div>
                            <div class="stat-card" style="background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));">
                                <div class="stat-value">247</div>
                                <div class="stat-label">총 독서량</div>
                            </div>
                            <div class="stat-card" style="background: linear-gradient(135deg, var(--success-color), #30D158);">
                                <div class="stat-value">2.5</div>
                                <div class="stat-label">평균 독서 시간</div>
                            </div>
                            <div class="stat-card" style="background: linear-gradient(135deg, var(--warning-color), #FFCC00);">
                                <div class="stat-value">4.8</div>
                                <div class="stat-label">평균 평점</div>
                            </div>
                        </div>
                    </div>

                    <!-- 메뉴 -->
                    <div style="padding: 0 24px;">
                        <div style="background: var(--surface); border-radius: 12px; overflow: hidden;">
                            <div onclick="alert('프로필 편집')" style="padding: 16px; border-bottom: 1px solid var(--border-color); cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                                <span style="font-size: 17px;">프로필 편집</span>
                                <span style="color: var(--text-secondary);">›</span>
                            </div>
                            <div onclick="changeScreen('settings')" style="padding: 16px; border-bottom: 1px solid var(--border-color); cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                                <span style="font-size: 17px;">설정</span>
                                <span style="color: var(--text-secondary);">›</span>
                            </div>
                            <div onclick="if(confirm('로그아웃 하시겠습니까?')) changeScreen('login')" style="padding: 16px; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                                <span style="font-size: 17px; color: var(--danger-color);">로그아웃</span>
                                <span style="color: var(--text-secondary);">›</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    settings: {
        title: '설정',
        info: '앱 설정을 변경할 수 있습니다.',
        hasTabBar: true,
        activeTab: 'profile',
        html: `
            <div class="screen-content">
                <div class="status-bar">
                    <span class="time">9:41</span>
                    <span class="icons">📶 📡 🔋</span>
                </div>
                <div class="nav-bar">
                    <a class="nav-back" onclick="changeScreen('profile')">← 뒤로</a>
                    <span class="nav-title">설정</span>
                </div>

                <div style="padding: 16px 24px;">
                    <h3 style="font-size: 13px; font-weight: 600; color: var(--text-secondary); margin-bottom: 12px; padding: 0 8px;">알림</h3>
                    <div style="background: var(--surface); border-radius: 12px; overflow: hidden; margin-bottom: 24px;">
                        <div style="padding: 16px; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 17px;">독서 리마인더</span>
                            <input type="checkbox" checked style="width: 50px; height: 30px;">
                        </div>
                        <div style="padding: 16px; display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 17px;">목표 달성 알림</span>
                            <input type="checkbox" checked style="width: 50px; height: 30px;">
                        </div>
                    </div>

                    <h3 style="font-size: 13px; font-weight: 600; color: var(--text-secondary); margin-bottom: 12px; padding: 0 8px;">화면</h3>
                    <div style="background: var(--surface); border-radius: 12px; overflow: hidden; margin-bottom: 24px;">
                        <div style="padding: 16px; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 17px;">다크 모드</span>
                            <input type="checkbox" style="width: 50px; height: 30px;">
                        </div>
                        <div style="padding: 16px; display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <div style="font-size: 17px; margin-bottom: 4px;">텍스트 크기</div>
                                <div style="font-size: 13px; color: var(--text-secondary);">보통</div>
                            </div>
                            <span style="color: var(--text-secondary);">›</span>
                        </div>
                    </div>

                    <h3 style="font-size: 13px; font-weight: 600; color: var(--text-secondary); margin-bottom: 12px; padding: 0 8px;">계정</h3>
                    <div style="background: var(--surface); border-radius: 12px; overflow: hidden; margin-bottom: 24px;">
                        <div onclick="alert('비밀번호 변경')" style="padding: 16px; border-bottom: 1px solid var(--border-color); cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 17px;">비밀번호 변경</span>
                            <span style="color: var(--text-secondary);">›</span>
                        </div>
                        <div onclick="alert('데이터 백업')" style="padding: 16px; border-bottom: 1px solid var(--border-color); cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 17px;">데이터 백업</span>
                            <span style="color: var(--text-secondary);">›</span>
                        </div>
                        <div onclick="if(confirm('정말 계정을 삭제하시겠습니까?')) alert('계정이 삭제되었습니다.')" style="padding: 16px; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 17px; color: var(--danger-color);">계정 삭제</span>
                            <span style="color: var(--text-secondary);">›</span>
                        </div>
                    </div>

                    <div style="text-align: center; color: var(--text-secondary); font-size: 13px;">
                        <p>버전 1.0.0</p>
                        <p style="margin-top: 4px;">© 2025 독서 관리 앱</p>
                    </div>
                </div>
            </div>
        `
    }
};

// Tab bar HTML
const tabBarHTML = (activeTab = 'home') => `
    <div class="tab-bar">
        <a class="tab-item ${activeTab === 'home' ? 'active' : ''}" onclick="changeScreen('home')">
            <div class="tab-icon">🏠</div>
            <div class="tab-label">홈</div>
        </a>
        <a class="tab-item ${activeTab === 'search' ? 'active' : ''}" onclick="changeScreen('search')">
            <div class="tab-icon">🔍</div>
            <div class="tab-label">검색</div>
        </a>
        <a class="tab-item ${activeTab === 'wishlist' ? 'active' : ''}" onclick="changeScreen('wishlist')">
            <div class="tab-icon">⭐</div>
            <div class="tab-label">위시리스트</div>
        </a>
        <a class="tab-item ${activeTab === 'profile' ? 'active' : ''}" onclick="changeScreen('profile')">
            <div class="tab-icon">👤</div>
            <div class="tab-label">프로필</div>
        </a>
    </div>
`;

// Change screen function
function changeScreen(screenId) {
    const screen = screens[screenId];
    if (!screen) return;

    const screenElement = document.getElementById('screen');
    const screenInfo = document.getElementById('screenInfo');
    const screenSelect = document.getElementById('screenSelect');

    // Update screen content
    screenElement.innerHTML = screen.html;
    if (screen.hasTabBar) {
        screenElement.innerHTML += tabBarHTML(screen.activeTab);
    }

    // Update info panel
    screenInfo.innerHTML = `
        <h4 style="font-size: 16px; font-weight: 600; margin-bottom: 8px;">${screen.title}</h4>
        <p style="color: var(--text-secondary);">${screen.info}</p>
    `;

    // Update selector
    screenSelect.value = screenId;

    // Scroll to top
    screenElement.scrollTop = 0;

    // Add fade in animation
    screenElement.classList.remove('fade-in');
    setTimeout(() => {
        screenElement.classList.add('fade-in');
    }, 10);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const screenSelect = document.getElementById('screenSelect');
    screenSelect.addEventListener('change', (e) => {
        changeScreen(e.target.value);
    });

    // Load initial screen
    changeScreen('home');
});
