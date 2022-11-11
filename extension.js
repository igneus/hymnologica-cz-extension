'use strict';

console.log('init');

// Chant edit form:
// populate "Folio" from "Folios"
const foliosInput = document.getElementById('edit-field-folios-und-0-value');
foliosInput.onkeyup = () => {
    const folio = foliosInput.value.match(/^\d+[rv]/);
    if (null === folio) {
	return;
    }

    document.getElementById('edit-field-folio-und-0-value').value = folio[0].padStart(4, '0');
};

console.log('init done');
