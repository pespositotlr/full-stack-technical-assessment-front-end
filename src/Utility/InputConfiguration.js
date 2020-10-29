export const returnInputConfiguration = () => {
    return {
        itemName: {
            element: 'input', type: 'text', value: '', 
            validation: { required: true, maxLength: 100, maxValue: null }, valid: false, touched: false,
            errorMessage: '', label: 'Item Name:'
        },
        cost: {
            element: 'input', type: 'number', value: '', 
            validation: { required: true, maxLength: 10, maxValue: 2147483647 }, valid: false, touched: false,
            errorMessage: '', label: 'Item Cost:'
        }
    }
}