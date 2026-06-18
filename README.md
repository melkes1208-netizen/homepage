# ZETASUM - Next-Gen Web3 Platform

광고 시청 보상과 Web3 금융 생태계를 연결하는 차세대 글로벌 플랫폼 랜딩 페이지입니다.

## 주요 기능

- 다국어 지원 (한국어 / English / 中文 / 日本語)
- 히어로 섹션, 통계바, 플랫폼 카드, 로드맵, 파트너, 푸터
- 회원가입 모달 (이메일 / 게스트 모드)
- 스크롤 reveal 애니메이션
- 반응형 디자인 (모바일 지원)
- 파티클 배경 효과

## 파일 구조

```
homepage/
├── index.html   # 메인 HTML (React 기반 SPA)
├── app.js       # 사전 컴파일된 React 컴포넌트 (JSX → JS)
├── style.css    # 다크 Web3 테마 스타일시트
├── main.js      # 스크롤 reveal 애니메이션 (IntersectionObserver)
├── .gitignore
└── README.md
```

## 시작하기

별도의 빌드 없이 로컬 서버로 바로 실행할 수 있습니다.

```bash
python3 -m http.server 8080
```

브라우저에서 `http://localhost:8080` 접속

## 기술 스택

- React 18 (CDN UMD)
- CSS3 (CSS Variables, Grid, Flexbox, 애니메이션)
- JavaScript (ES6+, IntersectionObserver, MutationObserver)
- Google Fonts (Outfit)

## 라이브 링크

[GitHub Repository](https://github.com/melkes1208-netizen/homepage)
