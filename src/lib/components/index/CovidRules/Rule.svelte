<script>
    export let icon
</script>

<li>
    <div>{icon}</div>
    <div>
        <slot />
    </div>
</li>

<style>
    li {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

</style>