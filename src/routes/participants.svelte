<!--suppress JSUnusedAssignment -->
<script context="module">
    export function load({props}) {
        return {
            props,
            stuff: {
                title: 'Participants'
            }
        }
    }
</script>

<script>
    import Page from "../lib/components/Page.svelte";
    import ParticipantCard from "../lib/components/participants/ParticipantCard/ParticipantCard.svelte";
    import Spacer from "../lib/components/Spacer/Spacer.svelte";
    import Count from "../lib/components/participants/Count.svelte";
    import FilterTags from "../lib/components/participants/FilterTags.svelte";

    export let participants

    let filterFor = ''

    $: filteredParticipants = filterFor === '' ? participants
        : participants.filter(p => p.tags.some(tag => tag.toLowerCase() === filterFor.toLowerCase()))
</script>

<Page headline="Participants">

    <Spacer size="xxs"/>

    <FilterTags {participants} bind:filterFor/>

    <Spacer size="m"/>

    <Count participants={filteredParticipants}/>

    <Spacer size="m"/>

    <div id="participants">
        {#each filteredParticipants as participant}
            <ParticipantCard {...participant}/>
        {/each}
    </div>

</Page>


<style>

    #participants {
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
        justify-content: space-evenly;
    }

</style>
