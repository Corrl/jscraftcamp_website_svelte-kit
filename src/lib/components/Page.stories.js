import Page from "./Page.svelte";

export default {
    title: 'index/Page',
    component: Page
}

// Svelte 'NATIVE FORMAT' syntax necessary to fill <slot/> ..? - doesn't seem to work with SvelteKit yet 06/22

export const Base = () => ({
    component: Page,
        props: {
            headline: 'PAGE HEADLINE'
        }
})