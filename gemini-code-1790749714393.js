function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    // State 6 = Resolved in OOTB ServiceNow
    if (newValue == '6') { // Resolved
        g_form.setMandatory('close_notes', true);
        g_form.setMandatory('close_code', true);
        g_form.addInfoMessage('Please provide Resolution Code and Close Notes before submitting.');
    } else {
        g_form.setMandatory('close_notes', false);
        g_form.setMandatory('close_code', false);
    }
}