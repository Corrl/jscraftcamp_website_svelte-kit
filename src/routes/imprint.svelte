<script context="module">
    export function load() {
        return {
            stuff: {
                title: 'Impressum'
            }
        }
    }
</script>

<script>
    import Page from "../lib/components/Page.svelte";
    import Spacer from "../lib/components/Spacer/Spacer.svelte";
</script>

<Page headline="Impressum">

    <h4>This site is a clone of <a href="https://jscraftcamp.org/">https://jscraftcamp.org/</a></h4>
    <p>built for self-educational reasons by</p>

    <Spacer size="xxs"/>

    <p>
        <strong>Corinna Steinhoff</strong><br>
        Reginbaldstr. 16<br>
        81247 München<br>
        jscc@corinnasteinhoff.de
    </p>

</Page>



