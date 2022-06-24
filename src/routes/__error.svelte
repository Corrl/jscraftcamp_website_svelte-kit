<script context="module">
    export function load() {
        return {
            stuff: {
                title: 'Page not found'
            }
        }
    }
</script>

<script>
    import Page from "../lib/components/Page.svelte"
</script>

<Page headline="Not found" center>

    <p>You just hit a route that doesn't exist... the sadness</p>

</Page>




