<script>
    import '../lib/styles/global.css'
    import '../lib/styles/global-typo.css'
    import '../lib/styles/global-colors.css'

    import Header from '../lib/components/index/Header/Header.svelte';
    import Footer from '../lib/components/index/Footer/Footer.svelte'
    import Spacer from "../lib/components/index/Spacer/Spacer.svelte";

</script>


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