<script context="module">
    export function load() {
        return {
            stuff: {
                title: 'Values'
            }
        }
    }
</script>

<script>
    import Page from "../lib/components/Page.svelte";
</script>

<Page headline="Code of Conduct" center>

    <p>We are committed to providing a friendly, safe and welcoming environment
        for all, regardless of gender, sexual orientation, programming language,
        ability, ethnicity, socioeconomic status, and religion (or lack
        thereof).</p>

    <p>We believe in people and our guests - so we ask nothing more of
        everybody than to be respectful and friendly with one another.</p>

    <p>And so we invite all those who participate in the JSCraftCamp and the
        community surrounding the conference to help us create safe and positive
        experiences for everyone.</p>

    <p>If you have any questions or problems regarding this Code of Conduct,
        don't hesitate to contact one of us from the team.</p>

</Page>

<style>
    p {
        margin-bottom: 1.2rem;
        max-width: 73ch;
        text-align: center;
    }
</style>