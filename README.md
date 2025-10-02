# 📚 독서 관리 앱 - 프로젝트 문서

iOS 독서 기록 & 관리 애플리케이션의 프로젝트 문서입니다.

## 🚀 프로젝트 소개

책을 읽고, 기록하고, 관리하는 가장 쉬운 방법을 제공하는 독서 관리 앱입니다.

### ✨ 주요 기능

- **📖 독서 기록**: 읽고 있는 책의 진행 상황을 실시간으로 기록
- **🔍 책 검색**: 텍스트 검색과 바코드 스캔으로 책 검색
- **⭐ 위시리스트**: 읽고 싶은 책 저장 및 관리
- **📊 독서 통계**: 독서 습관을 한눈에 확인

## 📱 프로젝트 문서

### 1. 인터랙티브 플로우 차트
앱의 전체 흐름을 시각적으로 확인할 수 있습니다.
- 각 화면 간의 연결 관계
- 사용자 액션 및 분기점
- 인터랙티브한 노드 클릭 기능

### 2. 화면 목업
실제 iOS 앱 화면을 미리 체험할 수 있습니다.
- 아이폰 프레임으로 실제 기기처럼 표현
- 15개 이상의 모든 주요 화면 구현
- 버튼 클릭으로 실제 페이지 이동 가능

## 🛠 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **iOS Design**: iOS Human Interface Guidelines 준수
- **Deployment**: Netlify

## 📁 프로젝트 구조

```
mockup/
├── index.html              # 랜딩 페이지
├── flowchart.html          # 플로우 차트 페이지
├── mockup.html             # 화면 목업 페이지
├── css/
│   ├── landing.css         # 랜딩 페이지 스타일
│   ├── flowchart.css       # 플로우 차트 스타일
│   └── mockup.css          # 목업 스타일
├── js/
│   ├── flowchart.js        # 플로우 차트 인터랙션
│   └── mockup.js           # 목업 인터랙션
├── netlify.toml            # Netlify 배포 설정
└── README.md               # 프로젝트 문서
```

## 🌐 Netlify 배포 방법

### 1. GitHub에 프로젝트 업로드

```bash
git init
git add .
git commit -m "Initial commit: 독서 관리 앱 프로젝트 문서"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```

### 2. Netlify 배포

1. [Netlify](https://www.netlify.com/)에 로그인
2. "Add new site" → "Import an existing project" 선택
3. GitHub 저장소 연결
4. Build settings:
   - Build command: (비워둠)
   - Publish directory: `.`
5. "Deploy site" 클릭

### 3. 자동 배포

GitHub에 코드를 푸시하면 자동으로 Netlify에 배포됩니다.

## 📱 화면 구성

### 인증 화면
- 로그인
- 회원가입
- 계정 찾기

### 홈 탭
- 읽고 있는 책
- 독서 기록 작성
- 완독 기록
- 다 읽은 책 목록
- 기록 상세

### 검색 탭
- 책 검색 (텍스트/바코드)
- 인기 책 목록
- 추천 책 목록
- 검색 결과
- 책 상세 정보

### 위시리스트 탭
- 위시리스트 목록
- 빈 상태 화면

### 프로필 탭
- 사용자 정보
- 독서 통계
- 설정

## 🎨 디자인 시스템

### 컬러 팔레트
- Primary: #007AFF (iOS Blue)
- Secondary: #5856D6 (iOS Purple)
- Success: #34C759 (iOS Green)
- Warning: #FF9500 (iOS Orange)
- Danger: #FF3B30 (iOS Red)

### 타이포그래피
- Font Family: SF Pro Display, -apple-system, BlinkMacSystemFont
- iOS Human Interface Guidelines 준수

## 📄 라이선스

MIT License

## 👥 제작자

독서 관리 앱 프로젝트 팀

---

📚 **책과 함께하는 즐거운 여정**
