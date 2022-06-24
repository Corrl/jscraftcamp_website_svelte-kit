<script context="module">
    export function load() {
        return {
            stuff: {
                title: 'JSCraftCamp'
            }
        }
    }
</script>

<script>
    import Page from "../lib/components/Page.svelte";
    import Logo from "../assets/images/Logo.svelte";
    import Spacer from "../lib/components/Spacer/Spacer.svelte";
    import Intro from "../lib/components/index/Intro.svelte";
    import Twitter from "../assets/images/Twitter.svelte";
    import GitHub from "../assets/images/GitHub.svelte";
    import Skyline from "../assets/images/Skyline.svelte";
    import Sponsors from "../lib/components/index/Sponsors.svelte";
    import CovidRules from "../lib/components/index/CovidRules/CovidRules.svelte";
    import Explanations from "../lib/components/index/Explanations/Explanations.svelte";
    import Schedule from "../lib/components/index/Schedule/Schedule.svelte";

    import {base} from '$app/paths'
</script>


<Page headline="Welcome to JSCraftCamp 2022! 🎉" center>

    <Intro {base}/>

    <Spacer size="xs"/>
    <Logo/>
    <Spacer size="xs"/>

    <h1>
        JSCraftCamp 2022
    </h1>

    <Spacer size="xxs"/>

    <span class="subline">
        Will return to Munich, this summer!
    </span>
    <span class="subline">
        A Barcamp about JavaScript and Crafting Software
    </span>

    <Spacer size="xs"/>

    <div id="intro-social-icons">
        <a href="https://twitter.com/jscraftcamp">
            <Twitter/>
        </a>
        <a href="https://github.com/jscraftcamp/website">
            <GitHub/>
        </a>
    </div>

    <Spacer size="xs"/>

    <Skyline/>

    <Spacer size="m"/>

    <Explanations />

    <Spacer size="m"/>

    <Schedule />

    <Spacer size="m"/>

    <CovidRules/>

    <Spacer size="xl"/>

    <Sponsors {base}/>
</Page>


<style>
    #intro-social-icons {
        display: flex;
        justify-content: center;
        gap: 2rem;
    }

    span {
        text-align: center;
    }
</style>