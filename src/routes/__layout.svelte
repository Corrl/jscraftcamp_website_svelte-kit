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
</style>