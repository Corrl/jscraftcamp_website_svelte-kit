<script>
    export let headline
    export let center
</script>

<div class:center>

    <h2 class="uppercase wide">{headline}</h2>

    <slot/>

</div>

<style>
    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        text-align: center;
        margin-bottom: 40px;
    }
</style>