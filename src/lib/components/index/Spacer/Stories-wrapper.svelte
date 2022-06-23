<script>
    import Spacer from './Spacer.svelte'

    export let size

</script>

<div>
    <span>start</span>
        <Spacer {size}/>
    <span>end</span>
</div>

<style>
    div :global(div){
        background: yellow;
    }
</style>
