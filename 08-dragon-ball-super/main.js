'use strict'

const main = document.querySelector('main')
const video = document.querySelector('video')

main.onclick = () => video.muted = !video.muted