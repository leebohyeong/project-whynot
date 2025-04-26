# 와이낫로드

## 프로젝트 정보
- LG U+ 캠페인 사이트
- **제작 기간** : 2022 ~ 2024 (계속 업데이트)
- **제작 도구** : Intellij
- **사용 기술** : HTML5, CSS3, SCSS, JavaScript, Git, Webpack
- **팀 규모**: 3명 (기획자1, 디자이너1, 퍼블리셔1)

## 프로젝트 설명
- pc, mobile 따로 제작했으며, 2022년도에 제작하고 2024년도까지 계속 리뉴얼 업데이트 작업을 했습니다.
- Webpack을 이용해 프로젝트 구조를 모듈화하고, JavaScript, CSS 등의 다양한 리소스를 효율적으로 번들링했습니다.

## 프로젝트 구조
- 📂 __resource/ — 개발 소스 (js, scss, pug)
- 📂 assets/ — 빌드 결과물 (배포용)
- 📂 m/ - mobile

## 로컬에서 실행하기
```bash
git clone https://github.com/leebohyeong/project-whynot.git
cd __resource
npm install
npm run watch
```

## 개발서버 배포

```bash
npm run dev
```

## 실 서버 배포
```bash
npm run prod
```