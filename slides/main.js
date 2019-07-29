const scroll = {
    currentSection: 0,
    options: {
        behavior: 'smooth',
        block: 'end'
    },
    lock: false,
    sections: document.querySelectorAll('section'),
    setLock: () => {
        scroll.lock = true;
        setTimeout(() => scroll.lock = false, 400);
    },
    handler: (e) => {
        if(scroll.lock) return;

        if(e.key === 'ArrowDown'){
            scroll.setLock();
            scroll.sections[scroll.currentSection<4?++scroll.currentSection:scroll.currentSection].scrollIntoView(scroll.options);
        } else if(e.key === 'ArrowUp') {
            scroll.setLock();
            scroll.sections[scroll.currentSection>0?--scroll.currentSection:scroll.currentSection].scrollIntoView(scroll.options);
        }
    }
}

document.body.onkeydown = scroll.handler;