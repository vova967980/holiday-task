
export function createComment(slideData) {
    let p = document.createElement('p');
    p.innerText = slideData.comment || '';
    return p;
}

export function createAuthor(slideData) {
    let h4 = document.createElement('h4');
    h4.innerText = slideData.author || '';
    return h4;
}