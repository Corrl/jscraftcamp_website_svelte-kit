<script>
    import '../lib/styles/global.css'
    import '../lib/styles/global-typo.css'
    import '../lib/styles/global-colors.css'

    import Header from '../lib/components/__layout/Header/Header.svelte';
    import Footer from '../lib/components/__layout/Footer/Footer.svelte'
    import Spacer from "../lib/components/Spacer/Spacer.svelte";

    import {page} from '$app/stores'

    $: title = $page.stuff.title
    $: if(!title) console.error('page missing title!')

</script>

<svelte:head>
    <title>{title} | JSCraftCamp - 2022 in Munich</title>
</svelte:head>

<div>
    Clone of <a href="https://jscraftcamp.org/">https://jscraftcamp.org/</a>
</div>

<Spacer size="s"/>

<Header/>

<Spacer size="xs"/>

<main class="main-column">
    <slot/>
</main>

<Spacer size="xxl"/>

<Footer/>


<style>
    main {
        /*border: 1px solid teal;*/
    }
    div {
        position: absolute;
        top: .5rem;
        right: .5rem;
        font-size: .9rem;
        background: black;
        color: white;
        padding: .2rem .4rem;
        border-radius: .3rem;
    }
</style>