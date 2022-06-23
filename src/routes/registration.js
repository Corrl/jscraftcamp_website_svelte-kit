import fs from 'fs'

export async function get() {

    const directory = './participants'
    const filename = '_template.json'
    const url = `${directory}/${filename}`

    const template = fs.readFileSync(url, 'utf8')

    return {
        body: {
            template
        }
    };
}