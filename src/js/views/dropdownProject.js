import { elements } from './base';

export const handleEnter = function() {
    this.classList.add('trigger-enter');

    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    elements.background.classList.add('dropdownBackground--open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = elements.nav.getBoundingClientRect();

    const coords = {
       height: dropdownCoords.height,
       width: dropdownCoords.width,
       top: dropdownCoords.top - navCoords.top,
       left: dropdownCoords.left - navCoords.left
    };

    elements.background.style.setProperty('width', `${coords.width}px`);
    elements.background.style.setProperty('height', `${coords.height}px`);
    elements.background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

export const handleLeave = function() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    elements.background.classList.remove('dropdownBackground--open');
}
