'use strict';

export const loadJSON = async (url, options) => {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return await data;
    }
    catch (e) {
        console.log(e);
    }
};

export const createImage = (url, backupUrl) => {
    const img = new Image();
    img.src = url;
    img.onerror = () => {
        img.src = backupUrl;
    };
    return img;
};
