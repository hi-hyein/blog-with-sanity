import CodeInput from "../components/CodeInput";

export default {
    name: 'code',
    title: 'Code',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'language',
            title: 'Ranguage',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'code',
            title: 'Code',
            type: 'string',
            validation: Rule => Rule.required(),
            inputComponent: CodeInput
        }
    ]
}