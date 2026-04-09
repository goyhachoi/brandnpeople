# 브랜드앤피플 홈페이지 — 시작 가이드

## 기술 스택
- **React 19** + **TypeScript**
- **Tailwind CSS 4** + **shadcn/ui**
- **Vite** (빌드 도구)
- **framer-motion** (애니메이션)
- 패키지 매니저: **pnpm**

---

## 로컬에서 실행하기

### 1. 사전 준비
- [Node.js 18 이상](https://nodejs.org) 설치
- pnpm 설치: `npm install -g pnpm`

### 2. 의존성 설치
```bash
cd brandnpeople
pnpm install
```

### 3. 개발 서버 실행
```bash
pnpm dev
```
브라우저에서 `http://localhost:3000` 접속

### 4. 빌드 (배포용)
```bash
pnpm build
```
`dist/` 폴더에 정적 파일이 생성됩니다.

---

## 주요 파일 구조

```
brandnpeople/
├── client/
│   ├── index.html              # HTML 엔트리, 폰트 설정
│   └── src/
│       ├── index.css           # 전체 디자인 토큰 (컬러, 폰트 등)
│       ├── pages/
│       │   └── Home.tsx        # 메인 페이지 (섹션 조립)
│       └── components/
│           ├── Navbar.tsx          # 상단 네비게이션
│           ├── HeroSection.tsx     # 히어로 (대표 이미지)
│           ├── TrustSection.tsx    # 신뢰 지표
│           ├── ProblemSection.tsx  # 문제 공감
│           ├── SolutionSection.tsx # 솔루션 4단계
│           ├── ServicesSection.tsx # 서비스 소개
│           ├── StoriesSection.tsx  # 성공 사례/후기
│           ├── AboutSection.tsx    # 대표 소개
│           ├── InsightsSection.tsx # 블로그
│           ├── FaqSection.tsx      # FAQ
│           ├── ContactSection.tsx  # 자료집 신청 + 진단컨설팅 신청
│           └── Footer.tsx          # 푸터
└── package.json
```

---

## 자주 수정하는 항목

### 대표 이미지 변경 (`HeroSection.tsx` 9번째 줄)
```tsx
const HERO_IMG = "이미지_URL_여기에_입력";
```

### 연락처/이메일 변경 (`Footer.tsx`)
```tsx
<p>이메일: hello@brandnpeople.kr</p>
```

### 후기 내용 변경 (`StoriesSection.tsx`)
`testimonials` 배열에서 이름, 직책, 후기 텍스트 수정

### 블로그 포스팅 연결 (`InsightsSection.tsx`)
`insights` 배열의 각 항목에 실제 블로그 URL 추가

---

## 배포 방법

### Vercel (추천)
1. [vercel.com](https://vercel.com) 가입
2. GitHub에 코드 업로드 후 Vercel에서 Import
3. Framework: **Vite** 선택
4. Build Command: `pnpm build`
5. Output Directory: `dist/public`

### Netlify
1. [netlify.com](https://netlify.com) 가입
2. `dist/public` 폴더를 드래그앤드롭으로 배포

---

## 디자인 컬러 팔레트

| 역할 | 색상 | 헥스 코드 |
|------|------|-----------|
| 배경 (크림) | ![#F9F6F0](https://via.placeholder.com/15/F9F6F0/F9F6F0.png) | `#F9F6F0` |
| 포인트 (코랄) | ![#E87A5D](https://via.placeholder.com/15/E87A5D/E87A5D.png) | `#E87A5D` |
| 보조 (세이지 그린) | ![#8A9A86](https://via.placeholder.com/15/8A9A86/8A9A86.png) | `#8A9A86` |
| 텍스트 (딥 브라운) | ![#2C2416](https://via.placeholder.com/15/2C2416/2C2416.png) | `#2C2416` |
| 서브 텍스트 | ![#6B6459](https://via.placeholder.com/15/6B6459/6B6459.png) | `#6B6459` |
