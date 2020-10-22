import moment from 'moment';

export const returnInputConfiguration = () => {
    return {
        itemName: {
            element: 'input', type: 'text', value: '', 
            validation: { required: true, maxLength: 100 }, valid: false, touched: false,
            errorMessage: '', label: 'Item Name:'
        },
        cost: {
            element: 'input', type: 'number', value: '', 
            validation: { required: true, maxLength: 20 }, valid: false, touched: false,
            errorMessage: '', label: 'Item Cost:'
        }
    }
}