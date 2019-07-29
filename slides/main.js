const scroll = {
    lock: false,
    total: 5,
    current: 0,
    options: { behavior: 'smooth' },
    sections: document.querySelectorAll('section'),
    to: (index) => {
        if(index!==scroll.current && 0<=index && index<scroll.total) {
            scroll.lock = true;
            scroll.sections[index].scrollIntoView(scroll.options);
            scroll.current = index;
            history.replaceState({}, '', '#'+scroll.sections[index].id);
            // console.log('#'+scroll.sections[index].id);
            setTimeout(() => scroll.lock = false, 400);
        }
    },
    handler: (e) => {
        if(scroll.lock) return;
        if(e.key === 'ArrowDown') {
            scroll.to(scroll.current+1);
        } else if(e.key === 'ArrowUp') {
            scroll.to(scroll.current-1);
        }
    }
}

document.body.onkeydown = scroll.handler;