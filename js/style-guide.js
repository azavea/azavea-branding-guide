---

---
(function(){

  // Converts pixels to ems
  function px_to_em(input) {
    //var emSize = parseFloat($("body").width());
    //return Math.round((input / emSize) * 100) / 10;
    return Math.round((input/16) * 10)/10;
  }

  // Converts ems to px
  function em_to_px(input) {
    return Math.round((input*16) * 10)/10;
  }

  // Copy to clipboard functionality
  var clipboard = new Clipboard('.pattern-code-copy-btn');

  clipboard.on('success', function(e) {
    e.trigger.textContent = 'Copied';
  });

})();

/*------------------------------------*\
    #TABS
\*------------------------------------*/
/**
 * Tabs Activation
 * 1) Add active class to the first tab and panel by default
 * 2) Add active class to first js-tabs-list__item (used in code tabs in styleguide)
 * 3) On click of tab, prevent page jumping and run openTab function
 */

(function(){

  var tabContainer = document.querySelectorAll('.js-tabs');
  var tabBtn = document.querySelectorAll('.js-tab');
  var tabContent = document.querySelectorAll('.js-tabs-panel');
  var tabsList = document.querySelectorAll('.js-tabs-list');

  for (i=0; i<tabContainer.length; i++) {
    var tabFirst = tabContainer[i].querySelector('.js-tab:first-child'); /* 1 */
    var tabPanelFirst = tabContainer[i].querySelector('.js-tabs-panel:first-child'); /* 1 */
    tabFirst.classList.add('is-active'); /* 1 */
    tabPanelFirst.classList.add('is-active'); /* 1 */
  }

  for (i=0; i<tabsList.length; i++) {
    var tabsListItem = tabsList[i].querySelector('.js-tabs-list-item:first-child'); /* 2 */
    tabsListItem.classList.add('is-active'); /* 2 */
  }

  for (i=0; i<tabBtn.length; i++) {
    tabBtn[i].addEventListener('click', function (e) { /* 3 */
      e.preventDefault();/* 3 */
      openTab(this);/* 3 */
    });
  }

  /**
   * Open Tab function
   * 1) Pass in clicked tab into function as el
   * 2) Get href of the clicked tab. Also get the data-code-tabs attribute.
   *    These are used to show and hide proper tab panel or tabs-list__items
   *    when the correlating variation is clicked on
   * 3) Remove active class from all tabs on click (click event above).
   *    Add active class to clicked tab.
   * 4) Select this tab's href and create new Href. If tab href exists on click,
   *    add active class to the tab.
   * 5) Select all tabs panels. On click remove all active classes from panels.
   *    Add class to panel associated with tab clicked on.
   * 6) For all tabs lists (list of code block tabs on styleguide), select all
   *    tab list items. If data-code-tabs matches between variation tab
   *    clicked and tabs list item, remove active classes from all tab list
   *    items and add active class to item with same data-code-tabs value.
   * 7) Add active class to tab whose href matches the correct tabs panel.
   */
  function openTab(el) { /* 1 */
    thisHref = el.getAttribute('href'); /* 2 */
    thisData = el.getAttribute('data-code-tabs');/* 2 */

    var tabParent = el.parentNode.parentNode.parentNode;
    var tabBtns = tabParent.querySelectorAll('.js-tab');

    for (j=0; j<tabBtns.length; j++) {
      tabBtns[j].classList.remove('is-active'); /* 3 */
    }

    el.classList.add('is-active'); /* 3 */

    var newHref = document.querySelector(thisHref); /* 4 */
    var newerHref = newHref.querySelector('.js-tabs-panel');
    var firstLink = newHref.querySelector('.js-tab'); /* 4 */
    if (firstLink) {
      firstLink.classList.add('is-active'); /* 4 */
    }

    var tabsPanel = tabParent.querySelectorAll('.js-tabs-panel');
    for (j=0; j<tabsPanel.length; j++) {
      tabsPanel[j].classList.remove('is-active'); /* 5 */
      if (newerHref) {
        newerHref.classList.add('is-active'); /* 5 */
      }
    }

    var tabsList = document.querySelectorAll('.js-tabs-list');
    for (k=0; k<tabsList.length; k++) { /* 6 */
      var tabsListItem = tabsList[k].querySelectorAll('.js-tabs-list-item'); /* 6 */
      for (l=0; l<tabsListItem.length; l++) {
        if (el.getAttribute('data-code-tabs') == tabsListItem[l].getAttribute('data-code-tabs')) { /* 6 */
          var tabsItems = tabsList[k].querySelectorAll('.js-tabs-list-item');
          for (m=0; m<tabsItems.length; m++) {
            tabsItems[m].classList.remove('is-active');/* 6 */
          }
          tabsListItem[l].classList.add('is-active'); 6 
        }
      }
    }

    document.querySelector(thisHref).classList.add('is-active'); /* 7 */
  }

})();

/*------------------------------------*\
    #PRIMARY NAVIGATION
\*------------------------------------*/
/**
 * Toggles active class on the primary nav item
 * 1) Select all nav dropdown triggers and cycle through them
 * 2) If not a button, add ARIA role and - to be safe - tabindex=0
 * 3) Add explicit keyboard handling for SPACE (like a real <button>)
 * 4) Add aria-expanded (based on initial state)
 * 5) On click, find the nav dropdown trigger parent
 * 6) If the nav dropdown trigger parent already has active class, remove it and set aria-expanded=false on toggle.
 * 7) If the nav dropdown trigger parent does not have an active class, add it and set aria-expanded=true on toggle.
 */
(function(){

  var navLink = document.querySelectorAll('.js-nav-dropdown-trigger'); /* 1 */

  for (i=0; i<navLink.length; i++) { /* 1 */

    if (navLink[i].nodeName != 'BUTTON') { /* 2 */
      navLink[i].setAttribute('role','button');
      navLink[i].setAttribute('tabindex','0');
      
      navLink[i].addEventListener('keypress',function(event){ /* 3 */
        if (event.keyCode == 32) {
          event.preventDefault();
          this.click();
        }
      });
    }
    
    if (navLink[i].parentNode.classList.contains('is-active')) {  /* 4 */
      navLink[i].setAttribute('aria-expanded','true');
    }
    else {
      navLink[i].setAttribute('aria-expanded','false');
    }

    navLink[i].addEventListener('click',function(event){ /* 5 */
      event.preventDefault();
      var navLinkParent = this.parentNode; /* 5 */

      if (navLinkParent.classList.contains('is-active')) { /* 6 */
          navLinkParent.classList.remove('is-active');
          this.setAttribute('aria-expanded', 'false');
      }
      else { /* 7 */
          navLinkParent.classList.add('is-active');
          this.setAttribute('aria-expanded', 'true');
      }
    });
  }

  /*
   * Toggles active class on the primary nav panel
   * 1) Select all nav triggers and cycle through them
   * 2) If not a button, add ARIA role and - to be safe - tabindex=0
   * 3) Add explicit keyboard handling for SPACE (like a real <button>)
   * 4) Add aria-expanded (based on initial state)
   * 5) On click, find the nav panel within the header
   * 6) If the navPanel already has active class, remove it and set aria-expanded=false on toggle.
   * 7) If the navPanel does not have an active class, add it and set aria-expanded=true on toggle. */
   
  var navToggle = document.querySelectorAll('.js-nav-trigger'),/* 1 */
      navBackdrop = document.querySelectorAll('#js-nav-backdrop'),
      navPanel = document.querySelectorAll('.js-nav-panel');

  for (i=0; i<navToggle.length; i++) { /* 1 */

    if (navToggle[i].nodeName != 'BUTTON') { /* 2 */
      navToggle[i].setAttribute('role','button');
      navToggle[i].setAttribute('tabindex','0');
      
      navToggle[i].addEventListener('keypress',function(event){ /* 3 */
        if (event.keyCode == 32) {
          event.preventDefault();
          this.click();
        }
      });
    }
    
    if (navPanel[0].classList.contains('is-active')) {  /* 4 */
      navToggle[i].setAttribute('aria-expanded','true');
    }
    else {
      navToggle[i].setAttribute('aria-expanded','false');
    }
    
    navToggle[i].addEventListener('click',function(event){ /* 5 */
      event.preventDefault();

      if (navPanel[0].classList.contains('is-active')) { /* 6 */
          navPanel[0].classList.remove('is-active');
          this.setAttribute('aria-expanded', 'false');
      }
      else { /* 7 */
          navPanel[0].classList.add('is-active');
          this.setAttribute('aria-expanded', 'true');
      }
    });
    
    navBackdrop[i].addEventListener('click',function(event){
      if (navPanel[0].classList.contains('is-active')) {
          navPanel[0].classList.remove('is-active');
          this.setAttribute('aria-expanded', 'false');
      }
      else { /* 7 */
          navPanel[0].classList.add('is-active');
          this.setAttribute('aria-expanded', 'true');
      }
    });
  }
  
  /**
   * Sets aria-current to the current navigation link
   * 1) Select all items denoted as current
   * 2) Add the aria-current attribute
   */
   
    var navLink = document.querySelectorAll('.is-current'); /* 1 */
   
    for (i=0; i<navLink.length; i++) { /* 1 */
      navLink[i].setAttribute('aria-current', 'page'); /* 2 */
    }

})();
