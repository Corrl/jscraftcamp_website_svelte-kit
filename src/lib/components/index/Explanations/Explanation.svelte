<script>
    export let headline
    export let icon
</script>

<div class="explanation">

    <img src={icon} alt="">

    <h2>
        {headline}
    </h2>

    <p>
        <slot/>
    </p>
</div>

<style>
    .explanation {
        text-align: center;
    }

    h2 {
        line-height: 1.1;
        margin: 2rem 0;
    }

</style>