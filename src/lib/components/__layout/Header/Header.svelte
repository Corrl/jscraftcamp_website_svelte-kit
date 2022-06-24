<script>
    import { base } from '$app/paths';

    const nav = [
        ['Registration', '/registration'],
        ['Participants', '/participants'],
        ['Sponsoring', '/sponsoring'],
        ['Values', '/values'],
    ]

</script>

<header class="main-column">
    <nav aria-label="primary">
        <div class="logo">
            <a href="{base}/">
                <h3>
                    JSCraftCamp
                </h3>
            </a>
        </div>

        <div>
            {#each nav as [text, url]}
                <a href={base}{url}>{text}</a>
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

