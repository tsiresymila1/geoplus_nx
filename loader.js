
const { parse } = require('graphql')
const { loadSchema } = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const { UrlLoader } = require('@graphql-tools/url-loader');
const { generateAll } = require('gql-generator-node');

module.exports = async (docString) => {
    const schema5 = await loadSchema(docString, {
        loaders: [new GraphQLFileLoader(), new UrlLoader()],
    });
    const operations = generateAll(schema5, 5);
    let strigned = '';
    for (const opt in operations) {
        const operation = operations[opt];
        for (const key in operation) {
            const element = operation[key];
            strigned += element
        }
    }
    return parse(strigned);
}