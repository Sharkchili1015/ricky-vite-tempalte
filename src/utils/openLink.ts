export const openLink = (uri: string) => {
  const a = document.createElement('a')
  a.href = uri
  a.target = '_blank'
  document.body.appendChild(a)
  a.click()
  a.remove()
}
