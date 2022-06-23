<script>
    export let participants
</script>

<div id="count">

    <div class="friday">
        <h3>Freitag</h3>
        <span class="count">{participants.filter(p => p.when.friday).length}</span>
        <p>(max. 80)</p>
    </div>

    <div class="saturday">
        <h3>Samstag</h3>
        <div class="count">{participants.filter(p => p.when.saturday).length}</div>
        <p>(max. 80)</p>
    </div>

</div>


<style>

    #count {
        display: flex;
        gap: 4rem;
        text-align: center;
    }

    .friday {
        margin-left: auto;
    }

    .saturday {
        margin-right: auto;
    }

    #count > div {
        display: grid;
        grid-template-columns: 1fr 3rem;
        grid-template-rows: min-content;
        /*border: 1px solid blue;*/
    }

    .count {
        font-size: var(--font-size-h3);
    }

    p {
        grid-column: 1/-1;
        font-size: .95rem;
    }


</style>