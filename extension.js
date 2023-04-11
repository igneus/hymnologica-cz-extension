'use strict';

console.log('init');

// Chant edit form:
// populate "Folio" from "Folios"
const foliosInput = document.getElementById('edit-field-folios-und-0-value');
foliosInput.onkeyup = () => {
    const value = foliosInput.value;
    const folio = value.match(/^\d+[rv]?/);
    if (null === folio) {
	return;
    }

    const length = (null !== value.match(/[rv]/)) ? 4 : 3;
    document.getElementById('edit-field-folio-und-0-value').value = folio[0].padStart(length, '0');
};

console.log('init done');
