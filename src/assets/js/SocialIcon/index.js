'use strict';
import contactLink from '../ContactLink';

export default function (href) {
    const contactContainer = document.createElement('li');
    contactContainer.appendChild(contactLink(href,'socialIcons'));
    return contactContainer;
}