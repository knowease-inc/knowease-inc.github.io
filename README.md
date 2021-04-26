# knowease-inc.github.io
> Knowease-inc의 github pages

# 제작
## 프로젝트 환경 및 도구
### Git
* .github 폴더 삽입 및 내용 파일 생성 후
```
git config commit.template .github/GIT_COMMIT_TEMPLATE
```
## 기초 세팅
> ref: https://ko.nuxtjs.org/docs/2.x/deployment/github-pages/
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
     target: 'static',
     router: {
       base: '/<repository-name>/'
     }
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

## Build Setup
### 기초
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# deploy
$ yarn deploy
```
### TypeScript for Nuxt 세팅
* Nuxt 2.9 이후 외부모듈로 공식 지원 (코어 분리)
#### 기본
   1. 필요 모듈 설치
      ```bash
      yarn add --dev @nuxt/typescript-build @nuxt/types
      ```
   1. 적용
      ```javascript
      // nuxt.config.js

      export default {
        buildModules: ['@nuxt/typescript-build']
      }
      ```
   1. tsconfig.json 만들기 (`root/`)
      ```json
      {
        "compilerOptions": {
          "target": "ES2018",
          "module": "ESNext",
          "moduleResolution": "Node",
          "lib": [
            "ESNext",
            "ESNext.AsyncIterable",
            "DOM"
          ],
          "esModuleInterop": true,
          "allowJs": true,
          "sourceMap": true,
          "strict": true,
          "noEmit": true,
          "baseUrl": ".",
          "paths": {
            "~/*": [
              "./*"
            ],
            "@/*": [
              "./*"
            ]
          },
          "types": [
            "@types/node",
            "@nuxt/types"
          ]
        },
        "exclude": [
          "node_modules"
        ]
      }
      ```
   1. vue-shim.d.ts 만들기 (`root/`)
      ```typescript
      declare module "*.vue" {
        import Vue from 'vue'
        export default Vue
      }
      ```
#### Lint(Optional)
   1. 설치
      ```bash
      yarn add -D @nuxtjs/eslint-config-typescript
      ```
   1. `.eslintrc.js` 수정
      > 주의 : If you were using babel-eslint as parser, just remove it from your .eslintrc.js and your dependencies.
      ```javascript
      module.exports = {
        extends: [
          '@nuxtjs/eslint-config-typescript'
        ]
      }
      ```
   1. package.json 수정
      ```json
      "lint": "eslint --ext .ts,.js,.vue ."
      ```
#### Nuxt Property Decorator(Optional)
   1. 설치
      ```bash
      yarn add nuxt-property-decorator
      ```
   2. 참조 : [Nuxt Property Decorator](https://github.com/nuxt-community/nuxt-property-decorator)
#### 참조
* [TypeScript/Nuxt 공식](https://typescript.nuxtjs.org/)
* [TypeScript로 Nuxt 개발하기](https://jhyeok.com/nuxt-with-typescript/)
* [Nuxt에서 TypeScript로 개발하기(git)](https://github.com/ChoDragon9/create-nuxt-ts)
