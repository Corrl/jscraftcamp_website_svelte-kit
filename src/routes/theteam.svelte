<script context="module">
    export function load() {
        return {
            stuff: {
                title: 'The Team'
            }
        }
    }
</script>

<script>
    import Page from "../lib/components/Page.svelte";
    import Spacer from "../lib/components/Spacer/Spacer.svelte";

    import {base} from '$app/paths'

    const theTeam = [
        {
            "name": "Agnes Köhler",
            "photo": "agnes.png",
            "email": "koehler.agnes@gmail.com"
        },
        {
            "name": "David Losert",
            "photo": "david.jpg",
            "email": "david@david-losert.com"
        },
        {
            "name": "Jörn Bernhardt",
            "photo": "joern.jpg",
            "email": "joern.bernhardt@compose.us"
        },
        {
            "name": "Marco Emrich",
            "photo": "marco.jpg",
            "email": "marco.emrich@codecentric.de"
        },
        {
            "name": "Michael Zoidl",
            "photo": "michael.png",
            "email": "michael@alm.sh"
        },
        {
            "name": "Patrick Müller",
            "photo": "patrick.jpg",
            "email": "mp@floatec.de"
        },
        {
            "name": "Robert Hostlowsky",
            "photo": "robert.png"
        },
        {
            "name": "Sebastian Frerichs",
            "photo": "sebastian.jpg",
            "email": "sebastian.frerichs@codecentric.de"
        },
        {
            "name": "Simon Hofmann",
            "photo": "simon.png",
            "email": "simon@s1h.org"
        },
        {
            "name": "Wolfram Kriesing",
            "photo": "wolfram.jpg",
            "email": "w@kriesing.de"
        }
    ]

</script>

<Page headline="The team">

    <p>
        We are simple developers organizing this event in our spare time. If
        you have any questions or problems before or during the conference,
        don't hesitate to contact one of us!
    </p>

    <Spacer size="xs"/>

    <p>
        You can always reach us by E-Mail:{" "}
        <a href="mailto: team@jscraftcamp.org">team@jscraftcamp.org</a>
    </p>

    <Spacer size="m"/>

    <div id="the-team">
        {#each theTeam as {name, photo, email}}
            {@const [vorname, nachname] = name.split(' ')}
            <div>
                <img src={`${base}/img/theteam/${photo}`}
                     alt={"member image " + name}
                />
                <div><b>{vorname}</b> {nachname}</div>
                {#if email}
                    <a href={"mailto:" + email}>
                        {email}
                    </a>
                {/if}
            </div>
        {/each}
    </div>

</Page>

<style>
    p {
        text-align: center;
        max-width: 80ch;
        margin: 0 auto;
    }

    img {
        max-width: 100%;
        object-fit: cover;
    }

    #the-team {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
        grid-template-rows: repeat(auto-fit, min-content);
        grid-gap: 1rem;
    }

    #the-team a {
        word-wrap: normal;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
    }
</style>