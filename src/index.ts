import fetch from 'node-fetch'
import { imageSize } from 'image-size'
import * as core from '@actions/core'

type Saying = {
  tts: string
  content: string
  note: string
  translation: string
  picture: string
  picture2: string
  picture3: string
  picture4: string
  fenxiang_img: string
  dateline: string
}

async function getPicturePixel(url: string) {
  const arrayBuffer = await fetch(url).then((res) => res.arrayBuffer())
  const buffer = Buffer.from(arrayBuffer)
  const size = imageSize(buffer)
  if (size.width && size.height) {
    return size.width * size.height
  }
  if (size.width) {
    return size.width
  }

  return size.height || 0
}

async function run() {
  try {
    const resp = await fetch('http://open.iciba.com/dsapi/')
    const data = (await resp.json()) as Saying

    let annotation = data.translation
    if (annotation === '新版每日一句') {
      annotation = ''
    }
    if (annotation.startsWith('小编的话')) {
      annotation = annotation.substring(5)
    }

    core.setOutput('tts', data.tts)
    core.setOutput('content', data.content)
    core.setOutput('translation', data.note)
    core.setOutput('annotation', annotation)
    core.setOutput('picture', data.picture)
    core.setOutput('picture2', data.picture2)
    core.setOutput('picture3', data.picture3)
    core.setOutput('picture4', data.picture4)
    core.setOutput('share_picture', data.fenxiang_img)
    core.setOutput('date', data.dateline)

    if (core.getInput('extract_best_picture') !== 'false') {
      const pics = [
        data.picture,
        data.picture2,
        data.picture3,
        data.picture4,
        // data.fenxiang_img,
      ].filter((url) => !!url)
      const pixelSize = await Promise.all(
        pics.map((url) => getPicturePixel(url)),
      )
      const maxSize = Math.max(...pixelSize)
      const maxIndex = pixelSize.indexOf(maxSize)
      core.setOutput('best_picture', pics[maxIndex])
    }
  } catch (e) {
    core.error(e)
    core.setFailed(e.message)
  }
}

run()
