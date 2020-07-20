/*
 * custom functionality fot test task of QATestLab company
 */

function displayChangeSaleStatusReason() {
    let el = $('#sale_status_c');
    let wrapper = $(el).parent();
    if (!$('textarea', $(wrapper))[0]) {
        $(wrapper).append(
            $('<textarea/>').attr({'name': 'sale_status_c_reason', 'rows': 2, 'cols': 30})
        );
    }


}