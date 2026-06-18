# ZETASUM - Next-Gen Web3 Platform

광고 시청 보상과 Web3 금융 생태계를 연결하는 차세대 글로벌 플랫폼 랜딩 페이지입니다.

## 🔗 라이브 데모

**https://melkes1208-netizen.github.io/homepage/**

## ✨ 주요 기능

### 디자인
- 딥 다크 배경(`#02040e`) + 인디고/바이올렛/핑크 그라디언트 시스템
- 마우스 커서 글로우 트래커 (부드러운 lerp 이징)
- 히어로 격자 배경 + 방사형 그로우 효과
- ZETASUM 타이틀 shimmer 흐름 애니메이션
- 드리프팅 앰비언트 오브 배경
- 글라스모피즘 카드 + 상단 그라디언트 빔 호버 효과
- 모달 스프링 애니메이션

### 인터랙션
- 스크롤 진입 시 통계 숫자 카운트업 애니메이션
- 카드·로드맵·파트너 스태거 등장 (110ms 간격)
- 로드맵 왼쪽 그라디언트 슬라이드 보더
- 반응형 디자인 (모바일 완전 지원)

### 콘텐츠
- 다국어 지원 (한국어 / English / 中文 / 日本語)
- 히어로, 통계, 플랫폼 카드, 로드맵, 파트너, 푸터 섹션
- 회원가입 모달 (이메일 / 게스트 모드)
- 파티클 배경 효과

## 📁 파일 구조

```
homepage/
├── index.html   # 메인 HTML (React 18 CDN 기반 SPA)
├── app.js       # 사전 컴파일된 React 컴포넌트 (JSX → JS)
├── style.css    # 프리미엄 Web3 디자인 시스템 v2.0
├── main.js      # 커서 글로우·카운트업·스태거 애니메이션
├── .gitignore
└── README.md
```

## 🚀 로컬 실행

```bash
python3 -m http.server 8080
```

브라우저에서 `http://localhost:8080` 접속

## 🛠 기술 스택

| 분류 | 기술 |
|---|---|
| UI 라이브러리 | React 18 (CDN UMD) |
| 스타일 | CSS3 (Variables, Grid, Flexbox, Animations) |
| 스크립트 | JavaScript ES6+ |
| 폰트 | Google Fonts — Outfit |
| 호스팅 | GitHub Pages |

## 📝 커밋 히스토리

| 커밋 | 내용 |
|---|---|
| `3ec9d58` | design: 프리미엄 Web3 디자인 시스템 v2.0 전면 업그레이드 |
| `696ebfc` | design: 시각적 임팩트 강화 |
| `e9d2425` | design: 월드클래스 Web3 디자인 시스템 전면 재설계 |
| `3a7b245` | refactor: Babel 런타임 제거 및 JSX 사전 컴파일 적용 |
| `d6d96a5` | feat: ZETASUM Web3 플랫폼 페이지 구현 |
