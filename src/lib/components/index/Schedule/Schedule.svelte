<script>

    const schedule = {
        Friday: [
            ['09:00', 'Doors open'],
            ['10:00-11:00', 'Opening & Marketplace'],
            ['11:00-13:00', 'Sessions'],
            ['13:00-14:00', 'Lunch - sponsored by Grollmus'],
            ['14:00-17:00', 'Sessions'],
            ['17:00-18:00', 'Review'],
            ['18:00-?', 'Networking'],
        ],
        Saturday: [
            ['09:00', 'Doors open'],
            ['10:00-11:00', 'Marketplace'],
            ['11:00-13:00', 'Sessions'],
            ['13:00-14:00', 'Lunch - sponsored by Sono Motors'],
            ['14:00-17:00', 'Sessions'],
            ['17:00-18:00', 'Review & Closing'],
        ]
    }

</script>

<h2>
    Schedule
</h2>

<div id="schedule">

    {#each Object.entries(schedule) as [day, d_schedule]}
        <div>
            <div class="row">
                <div></div>
                <div class="mini-headline">{day}</div>
            </div>
            {#each d_schedule as [time, text]}
                <div class="row">
                    <div>{time}</div>
                    <div>{text}</div>
                </div>
            {/each}
        </div>
    {/each}

</div>

<style>

    h2 {
        margin-bottom: 2rem;
    }

    .mini-headline {
        margin-bottom: 1rem;
    }

    #schedule {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 4rem;
    }

    .row {
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 2rem;
        padding: .5rem 1.2rem;
        border-bottom: 1px solid grey;
    }

    .row > div:first-child {
        text-align: center;
    }


</style>