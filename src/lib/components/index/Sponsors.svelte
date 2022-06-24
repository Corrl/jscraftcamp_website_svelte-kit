<script>
    export let base

    const sponsors = [
        {
            name: "codecentric",
            src: "/img/sponsor-2022/codecentric.png",
            link: "https://www.codecentric.de/",
        },
        {
            name: "Grollmus",
            src: "/img/sponsor-2022/grollmus.png",
            link: "https://www.grollmus.de/",
        },
        {
            name: "compose.us",
            src: "/img/sponsor-2022/compose-us.png",
            link: "https://www.compose.us/",
        },
        {
            name: "TNG Technology consulting",
            src: "/img/sponsor-2022/tng.png",
            link: "https://www.tngtech.com/",
        },
        {
            name: "Peerigon",
            src: "/img/sponsor-2022/peerigon.png",
            link: "https://www.peerigon.com/",
        },
        {
            name: "Sono Motors",
            src: "/img/sponsor-2022/sono-motors.png",
            link: "https://sonomotors.com/",
        },
        {
            name: "Instana",
            src: "/img/sponsor-2022/instana.png",
            link: "https://www.instana.com/",
        },
        {
            name: "Method park",
            src: "/img/sponsor-2022/method-park.png",
            link: "https://www.instana.com/",
        },
    ]

</script>

<h2>
    Our great sponsors
</h2>

<div>
    {#each sponsors as {name, src, link}}
        <a href={link} rel="noopener noreferrer" target="_blank">
            <img alt={name} {src} width="100%"/>
        </a>
    {/each}
</div>


<style>

    div {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 3rem 4rem;
    }

    a {
        display: flex;
        align-items: center;
        flex-basis: 300px;
    }

    img {
        width: 100%;
    }

</style>