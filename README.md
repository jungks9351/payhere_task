# PAYHERE TASK

## 프로젝트

- Node version : 16.15.0
- Build Environment : Webpack, Babel
- Framework : React
- language : TypeScript
- Style : Styled-components
- Formatting : Eslint, Prettier

## 프로젝트 구조

```
├── public
└── src
    ├── api : api 관리
    ├── components : 컴포넌트 관리
    ├── context : Context api 관리
    ├── hooks : 커스텀 훅 관리
    ├── pages : 라우팅 페이지 관리
    ├── styles : 스타일 관리
    └── type.ts : 타입 관리
    └── ...
```

## 빌드 방법

터미널을 통해 바탕화면이나 원하는 위치로 설정 후 다음 명령어를 실행 시킵니다.

```
git clone https://github.com/jungks9351/payhere_task.git
```

폴더를 에디터에서 실행시켜줍니다.

모듈 설치

```
npm install
```

루트에 .env 파일 생성

Github Settings => Developer settings => Personal access tokens => Generate new token
에서 토큰을 발급 받아 아래의 Github Token에 적용해줍니다.

```
REACT_APP_GITHUB_TOKEN=[Github Token]
```

프로젝트 실행

```
npm start
```

## Git Convention

- chore : 프로젝트 환경 설정 및 수정
- style : UI 구현 및 수정, 폴더 파일 구조 변경
- feat : 기능 구현
- refactor : 기능 리팩토링
- remove : 사용하지 않는 코드 제거, console 제거
- docs : 문서 작성 및 수정

## 사용 라이브러리

### webpack

프로젝트가 크지 않은점을 고려해 CRA를 사용하지 않고 필요한 모듈만 번들링을 하기 위해 사용하였습니다.

### babel

최신 자바스크립트 문법을 브라우저에서 이해하지 못할 수 있기 때문에 사용하였습니다.

### TypeScript

정적타입을 미리 정의하여 컴파일 할 때 에러를 미리 확인하고 수정할 수 있어서 사용하였습니다.

### Styled-Components

스타일을 컴포넌트화 하여 재사용성이나 컴포넌트 별로 스타일을 관리할 수 있기 때문에 사용하였습니다.

디자인 패턴은 Continaer패턴과 Hooks 패턴을 사용하였습니다.

### ESLint, Prettier

코딩 컨벤션을 적용하여 코드의 오류나 사용하지 않는 코드를 줄이고 코드의 스타일을 통일시켜주기 위해 사용하였습니다.

### React-Router-Dom v6

페이지 라우팅과 URI의 path, query를 사용하기 위한 훅을 제공하기 때문에 사용하였습니다.

## REST API

URL Host [https://api.github.com](https://api.github.com/)

Header { Authorization : GithubToken}

<img width="500" alt="스크린샷 2022-10-11 오전 3 40 14" src="https://user-images.githubusercontent.com/81244738/194932428-fb8fed20-3cf0-4d17-89f0-af2615f16b59.png">

## 고민한 점

### UI/UX

아토믹 디자인을 적용해 보고 싶었지만 시간이 없어서 전체적인 측면부터 고려하여 Container 디자인 패턴과 Hook 패턴을 사용하였습니다.

반응형을 적용하기 위해서 상태로 관리 할지 미디어 쿼리로 관리할지 고민을 하였습니다. 시간 내에 개발을 하기 위해서 미디어쿼리로 적용을 하였습니다.

### 북마크 상태 관리

전역 상태를 관리하는 Redux, Recoil등의 상태 관리 라이브러리도 있지만 전역으로 관리할 상태가 북마크 한개만 필요해서 Context를 사용하여 문맥에 필요한 컴포넌트에만 적용하여 사용하였습니다.

### 컴포넌트화

재사용 가능한 데이터와 디자인을 컴포넌트화를 고민하였고 자원이나 기능에 따라 컴포넌트화를 하였습니다.

### 렌더링 최적화

컴포넌트에서 필요한 데이터를 최소화하고 메모이제이션하여 렌더링을 최적화 하기 위해 고민했습니다.

## 기능 구현

1. 검색

- 검색 홈에서 검색창에 Repository명을 입력해서 Repository를 검색
- 검색 결과 리스트에서 재검색 가능

2. 북마크

- 검색된 Public Repository를 등록
- 등록 개수는 최대 4개로 제한하며, 최대 개수 초과 등록 시 이를 사용자에게 알람
- LocalStorage 로컬 저장소를 활용
- 검색 홈에서 등록된 Public Repository를 볼 수 있습니다.
- 등록된 Repository를 삭제

3. 북마크 상세페이지

- 등록된 각각의 Public Repository의 issue를 한 페이지에서 렌더링
- 각 issue 마다 제목, Repository 명, issue 상태 표시
- Respository 명을 클릭하면 Github Repository 페이지로 이동
- 해당 issue를 클릭하면 Github의 상세 페이지로 이동
- 페이지네이션을 통해서 계속해서 issue를 렌더링

4. 라우팅

- 검색 홈, 검색 결과 페이지 구현
- 헤더의 로고를 클릭시 검색 홈으로 이동

## 아쉬운 점

Github REST API 의 search의 시간 내 요청 횟수 제한이 30이라서 여러번 요청하는 사이 403 에러가 발생하였습니다. 이를 해결해 보고 싶었지만 하지 못하였습니다.

이슈리스트를 페이지네이션 할 때 전체 갯수를 아는 방법을 찾지 못해 UX 측면에서 페이지를 여러 페이지 숫자를 보여 주고 싶었지만 하지 못해 현재 페이지의 숫자만 보여주게 되었습니다.

렌더링 최적화 경험이 적어 react-dev-tools 확장 프로그램을 사용하여 컴포넌트별로 상태를 관리하는 점을 고민했지만 더 나은 관리 방안을 찾지 못해 아쉽습니다.
