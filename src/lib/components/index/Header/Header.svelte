<script>
    let nav = [
        {text: 'Registration', to: '/registration'},
        {text: 'Participants', to: '/participants'},
        {text: 'Sponsoring', to: '/sponsoring'},
        {text: 'Values', to: '/values'}
    ]

</script>

<header class="main-column">
    <nav>
        <div class="logo">
            <a href="/">
                <h3>
                    JSCraftCamp
                </h3>
            </a>
        </div>

        <div>
            {#each nav as n}
                <a href={n.to}>{n.text}</a>
            {/each}
        </div>
    </nav>
</header>

<style>

    header {
        /*border: 1px solid darkmagenta;*/
    }

    nav {
        display: flex;
        flex-wrap: wrap;
    }

    .logo {
        padding-right: 1em;
        margin-right: auto;
    }

    .logo a,
    .logo a:hover {
        user-select: none;
        text-decoration: none;
    }

    a {
        color: var(--text-color);
    }

    div:last-child {
        display: flex;
        gap: 2em;
    }

</style>

