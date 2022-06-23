import fs from 'fs'

export async function get() {

    const directory = './participants'

    const filenames = fs.readdirSync(directory)

    const participants = filenames.reduce((participants, filename) => {
        if(filename.startsWith('_')) return participants

        const url = `${directory}/${filename}`
        const participant = JSON.parse(fs.readFileSync(url, 'utf8'))
        participants.push(participant)
        return participants
    }, [])

    return {
        body: {
            participants
        }
    };
}