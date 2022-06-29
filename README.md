<h1 align="center">Daily Saying</h1>

<p align="center">
  <a href="/wow-actions/daily-saying/blob/master/LICENSE"><img alt="MIT License" src="https://img.shields.io/github/license/wow-actions/daily-saying?style=flat-square"></a>
  <a href="https://www.typescriptlang.org" rel="nofollow"><img alt="Language" src="https://img.shields.io/badge/language-TypeScript-blue.svg?style=flat-square"></a>
  <a href="https://github.com/wow-actions/daily-saying/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=flat-square" ></a>
  <a href="https://github.com/marketplace/actions/daily-saying" rel="nofollow"><img alt="website" src="https://img.shields.io/static/v1?label=&labelColor=505050&message=marketplace&color=0076D6&style=flat-square&logo=google-chrome&logoColor=0076D6" ></a>
  <a href="https://github.com/wow-actions/daily-saying/actions/workflows/release.yml"><img alt="build" src="https://img.shields.io/github/workflow/status/wow-actions/daily-saying/Release/master?logo=github&style=flat-square" ></a>
  <a href="https://lgtm.com/projects/g/wow-actions/daily-saying/context:javascript" rel="nofollow"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/wow-actions/daily-saying.svg?logo=lgtm&style=flat-square" ></a>
</p>

<p align="center">
  <strong>Fetch a daily saying from iciba.com and output it</strong>
</p>

## 🚀 Usage

Create a `.github/workflows/daily-saying.yml` file in the repository you want to install this action, then add the following to it:

```yml
name: Daily Saying
on:
  push:
    branches:
      - master
jobs:
  run:
    runs-on: ubuntu-latest
    steps:
      - uses: wow-actions/daily-saying@v1
```

[screenshot](./screenshot.jpg)

## Inputs

Various inputs are defined to let you configure the action:

> Note: [Workflow command and parameter names are not case-sensitive](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-commands-for-github-actions#about-workflow-commands).

| Name                   | Description                            | Default |
| ---------------------- | -------------------------------------- | ------- |
| `extract_best_picture` | Extract the best picture from response | `true`  |

## Outputs

| Name | Description |
| --- | --- |
| `content` | The content of the saying |
| `translation` | The Chinese translation of the saying |
| `annotation` | The Chinese annotation of the saying |
| `tts` | The tts of the saying |
| `picture` | The picture of the saying |
| `picture2` | The picture2 of the saying |
| `picture3` | The picture3 of the saying |
| `picture4` | The picture4 of the saying |
| `share_picture` | The picture for sharing |
| `best_picture` | The best picture picked from picture/picture2picture3/picture4 |
| `date` | The date of the saying |

## 🔖 License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
