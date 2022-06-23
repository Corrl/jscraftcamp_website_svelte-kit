<script context="module">
    export function load({props}) {
        return {
            props
        }
    }
</script>

<script>
    import Page from "../lib/components/index/Page.svelte";
    import Spacer from "../lib/components/index/Spacer/Spacer.svelte";
    import RegisterJSON from "../lib/components/registration/RegisterJSON.svelte";

    export let template
</script>

<Page headline="Registration">

    <p>
        To register for JSCraftCamp you have to add a json file with your name
        and some other information to our{" "}
        <a
                href="https://github.com/jscraftcamp/website"
                rel="noreferrer noopener"
                target="_blank"
        >
            GitHub Repository
        </a>{" "}
        via a{" "}
        <a
                href="http://stackoverflow.com/questions/14680711/how-to-do-a-github-pull-request"
                rel="noreferrer noopener"
                target="_blank"
        >
            Pull Request
        </a>
        . Registration is free of charge. Your json file should follow the
        naming scheme <code>$name_or_nickname.json</code> and must be placed
        in the folder <code>participants</code>. The structure of the file is
        described below.
    </p>

    <p>
        To test if your json file is a valid registration you can run{" "}
        <code>npm test</code>
        (more details about this are in the{" "}
        <a
                href="https://github.com/jscraftcamp/website/blob/main/README.md"
                rel="noreferrer noopener"
                target="_blank"
        >
            README
        </a>
        ). Invalid registrations will be rejected. If you need any help with
        registration, don't hesitate to contact one of the{" "}
        <a href="/theteam">team</a>
    </p>

    <p>
        Out of these files a page with information about all participants will
        be generated.
    </p>

    <p>
        To unregister please write another pull request or{" "}
        <a href="mailto:team@jscraftcamp.org">let us know</a>.
    </p>

    <Spacer size="s"/>

    <RegisterJSON {template}/>

</Page>


<style>

    a:hover {
        text-decoration: none;
    }

    p {
        text-align: center;
    }

</style>