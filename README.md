# 8term-main-front

8기 메인 프로젝트 프론트엔드 레포지토리입니다.

## 기술 스택

<div align="left">
  <h4>Language & Tools:</h4>
  
  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)  &nbsp;
  ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)  &nbsp;
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  &nbsp;
  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)  &nbsp;
  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

  <h4>Framework & Library:</h4>
  
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  &nbsp;
  ![React Router DOM](https://img.shields.io/badge/react%20router%20dom-CA4245.svg?style=for-the-badge&logo=react-router&logoColor=%2361DAFB)  &nbsp;
  ![Axios](https://img.shields.io/badge/axios-%235A29E4.svg?style=for-the-badge&logo=axios&logoColor=white)  &nbsp;
  ![Styled-components](https://img.shields.io/badge/styled--components-%23DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white)  &nbsp;
  ![SweetAlert2](https://img.shields.io/badge/SweetAlert2-5A67D8?style=for-the-badge&logo=SweetAlert2&logoColor=white) &nbsp;
  ![React-Icons](https://img.shields.io/badge/React--Icons-61DBFB?style=for-the-badge&logo=react&logoColor=white)

  <h4>Global-State:</h4>
  
  ![Zustand](https://img.shields.io/badge/zustand-8B4513.svg?style=for-the-badge&logo=zustand&logoColor=white)

  <h4>Module Bundler:</h4>
  
  ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
  
  <h4>Cooperation:</h4>
  
  ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)  &nbsp;
  ![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=white)  &nbsp;
  ![ENV](https://img.shields.io/badge/.env-%23000000.svg?style=for-the-badge&logo=dotenv&logoColor=%23FFDD00)

  <h4>Communication:</h4>
  
  ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)  &nbsp;
  ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  &nbsp;
  ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) &nbsp;
  ![Notion](https://img.shields.io/badge/notion-%23FFFFFF.svg?style=for-the-badge&logo=notion&logoColor=black)  &nbsp;
  ![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)  &nbsp;
  ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
</div>

---

## 커밋 메시지 컨벤션

    git commit -m "✨ Feature(#123): 커밋 내용"

| Type             | Description       |
| ---------------- | ----------------- |
| 🌏 Deploy        | 배포 관련         |
| ⚙ Setting        | 개발 환경 셋팅    |
| 🐞 BugFix        | 버그 수정         |
| 💻 CrossBrowsing | 브라우저 호환성   |
| 📃 Docs          | 문서 작성 및 수정 |
| ✨ Feature       | 기능 개발         |
| 📬 API           | API 통신          |
| 📝 Modify        | 기능, 코드 수정   |
| 🔨 Refactor      | 코드 리팩토링     |
| 🎨 Publish       | 마크업 & 스타일링 |

## 브랜치 전략

- `feature/#이슈 번호/이슈 제목`
- 이슈 생성 시 자동 브랜치 생성

```yml
#issue-branch.yml
branchName: '#${issue.number}/${issue.title}'
gitSafeReplacementChar: '_'
autoCloseIssue: true
commentMessage: 'Branch ${branchName} created for issue: ${issue.title}'

branches:
  - label: 🌏 Deploy
    prefix: deploy/
  - label: ⚙ Setting
    prefix: setting/

  ...

  - label: '*'
    prefix: issue/

copyIssueLabelsToPR: true
copyIssueAssigneeToPR: true
copyIssueProjectsToPR: true

# workflow/create_branch_for_issue.yml
on:
  issues:
    types: [assigned]
  issue_comment:
    types: [created]
  pull_request:
    types: [opened, closed]

jobs:
  create_issue_branch_job:
    runs-on: ubuntu-latest
    steps:
      - name: Create Issue Branch
        uses: robvanderleek/create-issue-branch@main
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
