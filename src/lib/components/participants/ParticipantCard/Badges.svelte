<script>
    export let when
</script>

<div class="badges">
    <span class="badge-friday" class:d-block={when.friday}>
        Fr
    </span>
    <span class="badge-saturday" class:d-block={when.saturday}>
        Sa
    </span>
</div>

<style>

    .badges {
        position: absolute;
        top: 0;
        left: 165px;
        display: flex;
        color: #fff;
        box-shadow: 0 0 4px -2px #000;
    }

    .badge-friday {
        display: none;
        background-color: orange;
        padding: 8px 4px 0;
    }

    .badge-saturday {
        display: none;
        background-color: teal;
        padding: 8px 4px 0;
    }

</style>