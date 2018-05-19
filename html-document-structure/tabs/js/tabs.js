'use strict';

const tabs = document.getElementById('tabs'),
      navTabs = tabs.querySelector('.tabs-nav'),
      tabsContent = tabs.querySelector('.tabs-content'),
      article = navTabs.querySelector('li'),
      items = tabsContent.children;

document.addEventListener('DOMContentLoaded', function() {
  for (var i = 0; i < items.length; i++) {
    let listNav = article.cloneNode(true);
    navTabs.appendChild(listNav).firstElementChild.classList.add(items[i].dataset.tabIcon);
    navTabs.appendChild(listNav).firstElementChild.textContent = items[i].dataset.tabTitle;
    items[i].classList.add('hidden');
  }
  navTabs.removeChild(article);
  navTabs.firstElementChild.classList.add('ui-tabs-active');
  items[0].classList.remove('hidden');

  for (let btn of navTabs.children) {
    btn.addEventListener('click', setActiveNav);
  }
});

function setActiveNav() {
  let aktiveNavTab = tabs.querySelector('.ui-tabs-active');
  if (this.classList.contains('ui-tabs-active')) {
    return;
  } else {
    aktiveNavTab.classList.remove('ui-tabs-active');
    this.classList.add('ui-tabs-active');
    setActiveTab(this);
    }
}

function setActiveTab(btn) {
  let aktiveTab;
  for (let item of items) {
    if (!item.classList.contains('hidden')){
      aktiveTab = item;
    }
  }
  for (var i = 0; i < items.length; i++) {
    if (btn.textContent === items[i].dataset.tabTitle)
    items[i].classList.remove('hidden');
    aktiveTab.classList.add('hidden');
  }
}
