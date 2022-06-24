<script>
    import Logo from "../../../../assets/images/Logo.svelte"
    import FooterUL from "./FooterUL.svelte";

    import {base} from '$app/paths'

    const sitemap = [
        ['Registration', '/registration'],
        ['Home', '/'],
        ['Sponsoring', '/sponsoring'],
        ['Values', '/values'],
        ['Privacy Policy', '/imprint'],
    ]

    const getInTouch = [
        ['Team', '/theteam'],
        ['Twitter', 'https://twitter.com/jscraftcamp'],
        ['Github', 'https://github.com/jscraftcamp/website'],
        ['Imprint', '/imprint'],
    ]

    const archive = [
        ['2019', 'https://web.archive.org/web/20190706093953/http://jscraftcamp.org/'],
        ['2018', 'https://web.archive.org/web/20180809182443/http://jscraftcamp.org/'],
        ['2017', 'https://web.archive.org/web/20170715150754/http://jscraftcamp.org:80/'],
        ['2016', 'https://web.archive.org/web/20161011211857/http://jscraftcamp.org:80/'],
    ]

    const propsTo = [
        ['SvelteKit', 'https://kit.svelte.dev/', '/Svelte_Logo.svg'],
        ['GitHub', 'https://pages.github.com/', '/GitHub-Icon-White-Logo.wine.svg'],
    ]

</script>

<footer>
    <div class="main-column">

        <div class="logo">
            <Logo width="90" height="100"/>
        </div>

        <nav aria-label="secondary">

            <FooterUL title="Sitemap" links={sitemap} {base}/>

            <FooterUL title="Get in touch" links={getInTouch} {base}/>

            <FooterUL title="Archive" links={archive} {base}/>

            <FooterUL title="Props to" links={propsTo} {base}/>

        </nav>
    </div>
</footer>

<style>
    footer {
        margin-top: auto;
        width: 100%;
        background: var(--footer-bg);
        color: var(--footer-text);
    }

    .main-column {
        display: flex;
        align-items: center;
        margin: 0 auto;
        padding: 3rem 0;
        gap: 4rem;
        /*border: 1px solid magenta;*/
    }

    .logo {
        margin-right: auto;
    }

    nav {
        display: flex;
        flex-wrap: wrap;
        gap: 4rem;
    }

</style>