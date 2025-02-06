## React 초기 세팅

1. Node.js 설치

2. Vite로 React 프로젝트 쉽게 설치하기 위해, vite 설치 후 react 프로젝트 생성
1) 개발 폴더로 cmd 에서 이동
2) npm create vite@latesest react-101
3) cd react-101
4) npm install - 프로젝트에 필요한 패키지(의존성) 설치
5) npm run dev - 개발 서버 실행
6) 나오는 localhost

3. 초기 폴더 정리
1) main.css, app.css 파일은 안 쓸꺼니까 삭제
2) 이에 따라 main.jsx에서도 필요없는 내용 지우고 아래만 남기기
```
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)

```


## React 프로젝트 클론하기
1. `git clone`
2. `npm intall` <- 최초 1번
3. `npm run dev` <- 프론트엔드 서버 실행 (서버켤 때마다 실행)



## 프로젝트 구조
1. index.html에서 main.jsx 파일을 불러온다
- jsx : javascript + xml

2. main.jsx에서 index.css, App.jsx(실제 html 태그 적여 있는 곳)을 불러온다.


# 추가 라이브러리 설치
1. styled-components: 동적 CSS를 처리해주는 라이브러리
- `$ npm install styled-components`
2. sass : SCSS 지원
- ` $ npm install sass`