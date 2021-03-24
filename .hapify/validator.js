// Models validation script

const errors = [];
const warnings = [];

const primary = model.fields.find(f => f.primary);
if (!primary) errors.push('Primary field must be defined.');
else {
    if (primary.type !== 'number' || primary.subtype !== 'integer') 
        errors.push('Primary field must be an integer.');
    if (!primary.internal) errors.push('Primary field must be internal.');
}

if (model.fields.some(f => f.type === 'entity' && f.subtype !== null)) {
    warnings.push('Cardinality is not hanlded yet. Use "multiple" attribute.');
}
if (model.fields.some(f => f.type !== 'entity' && f.multiple)) {
    errors.push('Multiple is only avaible for entities.');
}
if (model.fields.some(f => f.type === 'file')) {
    errors.push('File type is not hanlded yet');
}
if (model.fields.some(f => f.type === 'file')) {
    errors.push('Object type is not hanlded yet');
}

return { errors, warnings };
