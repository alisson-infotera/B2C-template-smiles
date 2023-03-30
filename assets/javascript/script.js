function TabNavigation() {
  const html = {
    links: [...document.querySelector('.tab-links').children],
    contents: [...document.querySelector('.tab-content').children],
    tabDefault: document.querySelector('[data-default]')
  }
  
  console.log(html)
  
  function hideAllTabContent() {
    html.contents.forEach(section => {
      section.style.display = 'none'
    })
  }
  
  function removeAllActiveClass() {
    html.links.forEach(tab => {
      tab.className = tab.className.replace(' active', '')
    })
  }
  
  function showCurrentTab(id) {
    const tabContent = document.querySelector(`#${id}`)
    tabContent.style.display = 'block'
  }

  function selectTab(event) {
    hideAllTabContent()
    showCurrentTab(event.currentTarget.dataset.id)
    removeAllActiveClass()
    event.currentTarget.className += ' active'
  }
  
  function listenForChange() {
    html.links.forEach(tab => {
      tab.addEventListener('click', selectTab)
    })
  }
  
  function init() {
    hideAllTabContent()
    listenForChange()

    html.tabDefault.click()
  }
  
  return {
    init
  }
}

window.addEventListener('load', () => {
  const tabNavigation = TabNavigation()
  tabNavigation.init()
})