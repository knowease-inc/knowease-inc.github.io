# https://www.get-a.io/

> GET-A Inc.의 github pages

## 기초 세팅

> ref: https://v2.nuxt.com/docs/get-started/installation

1. nuxt project 시작
   ```bash
   $ yarn create nuxt-app <project name>
   ```
   1. Git remote 연결
   ```bash
   $ git remote add origin <repo>
   # git init 등 기초 세팅
   ```
1. deploy 기초 세팅
   ```javascript
   // nuxt.config.js
   export default {
     target: 'public',
     router: {
       base: '/<repository-name>/',
     },
   }
   ```
1. push-dir 설치
   ```bash
   yarn add --dev push-dir
   ```
1. `deploy` scripts 추가 (in `package.json`)
   ```json
   "scripts": {
     "dev": "nuxt",
     "generate": "nuxt generate",
     "start": "nuxt start",
     "deploy": "push-dir --dir=dist --branch=gh-pages --cleanup"
   },
   ```
1. dist 생성 및 배포

   ```bash
   # dist 생성
   npm run generate

   # 배포
   npm run deploy
   ```

### TypeScript for Nuxt 세팅

- Nuxt 2.9 이후 외부모듈로 공식 지원 (코어 분리)

#### 기본

1.  필요 모듈 설치
    ```bash
    yarn add --dev @nuxt/typescript-build @nuxt/types
    ```
1.  적용

    ```javascript
    // nuxt.config.js

    export default {
      buildModules: ['@nuxt/typescript-build'],
    }
    ```

1.  tsconfig.json 만들기 (`root/`)
    ```json
    {
      "compilerOptions": {
        "target": "ES2018",
        "module": "ESNext",
        "moduleResolution": "Node",
        "lib": ["ESNext", "ESNext.AsyncIterable", "DOM"],
        "esModuleInterop": true,
        "allowJs": true,
        "sourceMap": true,
        "strict": true,
        "noEmit": true,
        "baseUrl": ".",
        "paths": {
          "~/*": ["./*"],
          "@/*": ["./*"]
        },
        "types": ["@types/node", "@nuxt/types"]
      },
      "exclude": ["node_modules"]
    }
    ```
1.  vue-shim.d.ts 만들기 (`root/`)
    ```typescript
    declare module '*.vue' {
      import Vue from 'vue'
      export default Vue
    }
    ```

#### Lint(Optional)

1.  설치
    ```bash
    yarn add -D @nuxtjs/eslint-config-typescript
    ```
1.  `.eslintrc.js` 수정
    > 주의 : If you were using babel-eslint as parser, just remove it from your .eslintrc.js and your dependencies.
    ```javascript
    module.exports = {
      extends: ['@nuxtjs/eslint-config-typescript'],
    }
    ```
1.  package.json 수정
    ```json
    "lint": "eslint --ext .ts,.js,.vue ."
    ```

#### Nuxt Property Decorator(Optional)

1.  설치
    ```bash
    yarn add nuxt-property-decorator
    ```
2.  참조 : [Nuxt Property Decorator](https://github.com/nuxt-community/nuxt-property-decorator)

#### 참조

- [TypeScript/Nuxt 공식](https://typescript.nuxtjs.org/)
- [TypeScript로 Nuxt 개발하기](https://jhyeok.com/nuxt-with-typescript/)
- [Nuxt에서 TypeScript로 개발하기(git)](https://github.com/ChoDragon9/create-nuxt-ts)

## 기타 정보

### Colors

1. Main1: `#313de3`
2. Main2: `#c5dbff`
3. Sub1: `#092356`
4. Sub2: `#45CA67`
5. Point: `#F84E3B`
6. Content Area: `#FFFFFF`
7. Background: `#F0EFED`

# template-for-new-repo

## 프로젝트 환경 및 도구

| 항목                     | 내용                                    | 세부내용                                                                                                                                                                                                                                                |
| ------------------------ | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 소스코드 관리            | **원칙**                                | 1. `git`, **Github Flow 전략**을 사용한다.(`issue-1`의 형식으로 브랜치명 생성 및 개발후 PR생성)<br/>2. Git **commit message 템플릿**을 이용한다.<br/>3. Git author를 Github 계정과 동일하게 설정한다.                                                   |
|                          | Git commit message 템플릿 적용          | `git config commit.template .github/GIT_COMMIT_TEMPLATE`                                                                                                                                                                                                |
|                          | Github 계정(이메일)을 Git author로 적용 | `git config --global user.email you@example.com`                                                                                                                                                                                                        |
|                          | Git commit editor를 vscode로 적용(임의) | `git config --global core.editor 'code --wait'`                                                                                                                                                                                                         |
| 문서작성 및 커뮤니케이션 | **원칙**                                | 1. 사내 모든 문서는 `org:knowease-inc` 에서 **검색 가능**하게 한다.<br/>2. 모든 해결해야할 업무 혹은 아이디어는, `org:knowease-inc`내 적절한 리포지토리 내 **Issue로 생성**한다.<br/>3. 커뮤니케이션은 **Issue 내 커멘트 및 멘션을 이용하여 소통**한다. |
|                          | 텍스트, 표, 코드 스니펫 작성            | [**Github Markdown**](https://docs.github.com/ko/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)                                                                               |
|                          | 다이어그램, 차트, 그래프 작성           | [**Github Mermaid**](https://docs.github.com/ko/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams)                                                                                                                       |
