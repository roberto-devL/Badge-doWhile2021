const linksSocialMedia = {
  github: 'roberto-devL',
  youtube: 'channel/UCqNYRWAzpd-lgBH-f7mHKdw',
  linkedin: 'in/roberto-lima-4b021a208',
  instagram: 'iroberto.lima',
  twitter: 'irobertolima_'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getProfileInfosFromGitHub() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getProfileInfosFromGitHub()
