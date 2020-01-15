import {createImage} from '../../../utils';

export default function (className, src, alt, backupSrc) {
    const img = createImage(src, backupSrc);

    if(Array.isArray(className)) {
        img.classList.add(...className);
    }
    else {
        img.setAttribute('class',className);
    }

    img.setAttribute('alt', alt);

    return img;
}