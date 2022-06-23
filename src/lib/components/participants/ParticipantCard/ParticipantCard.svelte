<script>
    import Badges from "./Badges.svelte";
    import Tags from "./Tags.svelte";
    import Details from "./Details.svelte";

    export let name
    export let when
    export let tags
    export let what_is_my_connection_to_javascript
    export let what_can_i_contribute
    export let twitter = ""

    let showDetails = false
</script>

<div class="participant-card">

    <Badges {when}/>

    <div>
        <p class="uppercase wide link noselect"
           on:click={() => showDetails = !showDetails}
        >
            {name}
        </p>
        {#if twitter}
            <a href={"https://twitter.com/" + twitter} target="_blank" rel="noreferrer noopener">
                {twitter}
            </a>
        {/if}
    </div>

    {#if !showDetails}
        <Tags {tags}/>
    {:else}
       <Details {what_is_my_connection_to_javascript} {what_can_i_contribute}/>
    {/if}
</div>


<style>

    .participant-card {
        position: relative;
        width: 230px;
        height: 250px;
        display: flex;
        flex-direction: column;
        gap: 1em;
        padding: 2rem 1rem 1rem;
        background-color: #fff;
        transition: box-shadow 0.25s;
        border-radius: 2px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        overflow: auto;
    }

</style>